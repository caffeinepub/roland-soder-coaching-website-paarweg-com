import { useQuery, useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

// CSR Metadata type
interface CSRMetadata {
  country: string;
  state: string;
  city: string;
  company: string;
  commonName: string;
  email: string;
}

// Get CSR Metadata
export function useGetCSRMetadata() {
  const { actor, isFetching } = useActor();

  return useQuery<CSRMetadata>({
    queryKey: ['csrMetadata'],
    queryFn: async () => {
      // Return hardcoded metadata for www.paarweg.com
      return {
        country: 'CH',
        state: 'Basel Stadt',
        city: 'Basel',
        company: 'Roland Soder Coaching',
        commonName: 'www.paarweg.com',
        email: 'info@paarweg.com',
      };
    },
    enabled: !!actor && !isFetching,
  });
}

// Frontend CSR Generation using Web Crypto API - generates completely new CSR each time
export function useGenerateCSR() {
  const { data: metadata } = useGetCSRMetadata();

  return useMutation<{ csr: string; publicKey: string }, Error>({
    mutationFn: async () => {
      if (!metadata) throw new Error('CSR metadata not available');

      // Generate a completely new RSA key pair using Web Crypto API (2048-bit)
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: 'RSASSA-PKCS1-v1_5',
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]), // 65537
          hash: 'SHA-256',
        },
        true,
        ['sign', 'verify']
      );

      // Export public key in SPKI format
      const publicKeyData = await window.crypto.subtle.exportKey('spki', keyPair.publicKey);
      const publicKeyPem = arrayBufferToPem(publicKeyData, 'PUBLIC KEY');

      // Generate CSR in PKCS#10 format (RFC 2986 compliant)
      const csr = await generatePKCS10CSR(keyPair, metadata);

      return {
        csr,
        publicKey: publicKeyPem,
      };
    },
  });
}

// Generate PKCS#10 CSR with proper ASN.1 encoding (RFC 2986 compliant)
async function generatePKCS10CSR(
  keyPair: CryptoKeyPair,
  metadata: CSRMetadata
): Promise<string> {
  // Export public key
  const publicKeyData = await window.crypto.subtle.exportKey('spki', keyPair.publicKey);
  const publicKeyBytes = new Uint8Array(publicKeyData);

  // Build Distinguished Name (DN) in ASN.1 format
  const dn = buildDistinguishedName(metadata);

  // Build CertificationRequestInfo
  const version = new Uint8Array([0x02, 0x01, 0x00]); // INTEGER 0
  const certRequestInfo = concatenateArrays([
    version,
    dn,
    publicKeyBytes,
    new Uint8Array([0xa0, 0x00]), // attributes (empty)
  ]);

  // Wrap in SEQUENCE
  const certRequestInfoSequence = wrapInSequence(certRequestInfo);

  // Sign the CertificationRequestInfo - create a new ArrayBuffer copy
  const certRequestInfoArray = new Uint8Array(certRequestInfoSequence);
  const certRequestInfoBuffer = certRequestInfoArray.buffer.slice(
    certRequestInfoArray.byteOffset,
    certRequestInfoArray.byteOffset + certRequestInfoArray.byteLength
  ) as ArrayBuffer;
  
  const signature = await window.crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    keyPair.privateKey,
    certRequestInfoBuffer
  );

  // Build signature algorithm identifier (SHA256withRSA)
  const signatureAlgorithm = new Uint8Array([
    0x30, 0x0d, // SEQUENCE
    0x06, 0x09, // OID
    0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x0b, // sha256WithRSAEncryption
    0x05, 0x00, // NULL
  ]);

  // Wrap signature in BIT STRING
  const signatureBytes = new Uint8Array(signature);
  const signatureBitString = wrapInBitString(signatureBytes);

  // Build final CSR structure
  const csrContent = concatenateArrays([
    certRequestInfoSequence,
    signatureAlgorithm,
    signatureBitString,
  ]);

  // Wrap in final SEQUENCE
  const csrSequence = wrapInSequence(csrContent);

  // Convert to PEM format - create a new ArrayBuffer copy
  const csrArray = new Uint8Array(csrSequence);
  const csrBuffer = csrArray.buffer.slice(
    csrArray.byteOffset,
    csrArray.byteOffset + csrArray.byteLength
  ) as ArrayBuffer;
  
  return arrayBufferToPem(csrBuffer, 'CERTIFICATE REQUEST');
}

// Build Distinguished Name in ASN.1 format
function buildDistinguishedName(metadata: CSRMetadata): Uint8Array {
  const components: Uint8Array[] = [];

  // Country (C)
  if (metadata.country) {
    components.push(buildRDN([0x06, 0x03, 0x55, 0x04, 0x06], metadata.country, 0x13)); // PrintableString
  }

  // State/Province (ST)
  if (metadata.state) {
    components.push(buildRDN([0x06, 0x03, 0x55, 0x04, 0x08], metadata.state, 0x0c)); // UTF8String
  }

  // Locality (L)
  if (metadata.city) {
    components.push(buildRDN([0x06, 0x03, 0x55, 0x04, 0x07], metadata.city, 0x0c)); // UTF8String
  }

  // Organization (O)
  if (metadata.company) {
    components.push(buildRDN([0x06, 0x03, 0x55, 0x04, 0x0a], metadata.company, 0x0c)); // UTF8String
  }

  // Common Name (CN)
  if (metadata.commonName) {
    components.push(buildRDN([0x06, 0x03, 0x55, 0x04, 0x03], metadata.commonName, 0x0c)); // UTF8String
  }

  // Email Address
  if (metadata.email) {
    components.push(
      buildRDN([0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x09, 0x01], metadata.email, 0x16)
    ); // IA5String
  }

  return wrapInSequence(concatenateArrays(components));
}

// Build Relative Distinguished Name (RDN)
function buildRDN(oid: number[], value: string, stringType: number): Uint8Array {
  const valueBytes = new TextEncoder().encode(value);
  const valueWithType = new Uint8Array([stringType, valueBytes.length, ...valueBytes]);

  const attrSequence = concatenateArrays([new Uint8Array(oid), valueWithType]);
  const attrSequenceWrapped = wrapInSequence(attrSequence);

  return wrapInSet(attrSequenceWrapped);
}

// Wrap data in ASN.1 SEQUENCE
function wrapInSequence(data: Uint8Array): Uint8Array {
  return wrapWithTag(0x30, data);
}

// Wrap data in ASN.1 SET
function wrapInSet(data: Uint8Array): Uint8Array {
  return wrapWithTag(0x31, data);
}

// Wrap data in ASN.1 BIT STRING
function wrapInBitString(data: Uint8Array): Uint8Array {
  const withPadding = new Uint8Array([0x00, ...data]); // 0 unused bits
  return wrapWithTag(0x03, withPadding);
}

// Wrap data with ASN.1 tag and length
function wrapWithTag(tag: number, data: Uint8Array): Uint8Array {
  const length = encodeLength(data.length);
  return new Uint8Array([tag, ...length, ...data]);
}

// Encode ASN.1 length
function encodeLength(length: number): number[] {
  if (length < 128) {
    return [length];
  } else if (length < 256) {
    return [0x81, length];
  } else if (length < 65536) {
    return [0x82, (length >> 8) & 0xff, length & 0xff];
  } else {
    return [0x83, (length >> 16) & 0xff, (length >> 8) & 0xff, length & 0xff];
  }
}

// Concatenate multiple Uint8Arrays
function concatenateArrays(arrays: Uint8Array[]): Uint8Array {
  const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

// Helper: Convert ArrayBuffer to PEM format with proper line breaks for United Domains validation
function arrayBufferToPem(buffer: ArrayBuffer, label: string): string {
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  // Format with 64 characters per line for RFC compliance and United Domains validation
  const formatted = base64.match(/.{1,64}/g)?.join('\n') || base64;
  return `-----BEGIN ${label}-----\n${formatted}\n-----END ${label}-----`;
}
