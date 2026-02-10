/**
 * Color utility functions for converting computed CSS colors to HEX format.
 * Handles rgb(), rgba(), and oklch() color formats from computed styles.
 */

/**
 * Converts an RGB color string to HEX format
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns HEX color string (e.g., "#FF5733")
 */
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Converts OKLCH color values to RGB
 * @param l - Lightness (0-1)
 * @param c - Chroma (0-0.4)
 * @param h - Hue (0-360)
 * @returns RGB values as [r, g, b]
 */
function oklchToRgb(l: number, c: number, h: number): [number, number, number] {
  // Convert OKLCH to OKLab
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const bLab = c * Math.sin(hRad);

  // Convert OKLab to linear RGB
  const l_ = l + 0.3963377774 * a + 0.2158037573 * bLab;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * bLab;
  const s_ = l - 0.0894841775 * a - 1.291485548 * bLab;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const r_linear = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g_linear = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const b_linear = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  // Convert linear RGB to sRGB
  const toSrgb = (c: number) => {
    const abs = Math.abs(c);
    if (abs <= 0.0031308) {
      return c * 12.92;
    }
    return (Math.sign(c) * 1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
  };

  const r = toSrgb(r_linear);
  const g = toSrgb(g_linear);
  const b = toSrgb(b_linear);

  // Clamp and convert to 0-255 range
  const clamp = (val: number) => Math.max(0, Math.min(255, val * 255));
  return [clamp(r), clamp(g), clamp(b)];
}

/**
 * Normalizes a computed CSS color string to HEX format
 * Supports rgb(), rgba(), and oklch() formats
 * @param colorString - Computed CSS color string
 * @returns HEX color string or null if parsing fails
 */
export function normalizeColorToHex(colorString: string): string | null {
  if (!colorString) return null;

  const trimmed = colorString.trim();

  // Handle rgb() and rgba()
  const rgbMatch = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    return rgbToHex(r, g, b);
  }

  // Handle oklch()
  const oklchMatch = trimmed.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*[\d.]+)?\)/);
  if (oklchMatch) {
    const l = parseFloat(oklchMatch[1]);
    const c = parseFloat(oklchMatch[2]);
    const h = parseFloat(oklchMatch[3]);
    const [r, g, b] = oklchToRgb(l, c, h);
    return rgbToHex(r, g, b);
  }

  // Handle hex colors (already in correct format)
  if (trimmed.startsWith('#')) {
    return trimmed.toUpperCase();
  }

  return null;
}
