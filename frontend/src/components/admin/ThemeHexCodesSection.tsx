import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useComputedThemeHexColors } from '@/hooks/useComputedThemeHexColors';
import { Copy, Check, Palette } from 'lucide-react';
import { useState } from 'react';

/**
 * Admin-only UI section that displays runtime-computed HEX color values
 * for the page background and primary booking CTA button.
 * Provides copy-to-clipboard functionality for each color value.
 */
export default function ThemeHexCodesSection() {
  const colors = useComputedThemeHexColors();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-primary" />
          <CardTitle>Theme Color Codes (HEX)</CardTitle>
        </div>
        <CardDescription>
          Runtime-computed HEX values for current theme (updates with dark mode)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Background Color */}
        <div className="flex items-center justify-between rounded-lg border bg-card p-4">
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 shrink-0 rounded-md border-2 border-border shadow-sm"
              style={{
                backgroundColor: colors.background || 'transparent',
              }}
            />
            <div>
              <p className="font-semibold">Page Background</p>
              <p className="text-sm text-muted-foreground">
                Main background color for all pages
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {colors.background ? (
              <>
                <Badge variant="outline" className="font-mono text-sm">
                  {colors.background}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(colors.background!, 'background')}
                  className="h-8 w-8 p-0"
                >
                  {copiedField === 'background' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </>
            ) : (
              <Badge variant="outline">Loading...</Badge>
            )}
          </div>
        </div>

        {/* Primary Button Color */}
        <div className="flex items-center justify-between rounded-lg border bg-card p-4">
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 shrink-0 rounded-md border-2 border-border shadow-sm"
              style={{
                backgroundColor: colors.primaryButton || 'transparent',
              }}
            />
            <div>
              <p className="font-semibold">Primary / CTA Button</p>
              <p className="text-sm text-muted-foreground">
                Booking button and primary actions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {colors.primaryButton ? (
              <>
                <Badge variant="outline" className="font-mono text-sm">
                  {colors.primaryButton}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(colors.primaryButton!, 'primaryButton')}
                  className="h-8 w-8 p-0"
                >
                  {copiedField === 'primaryButton' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </>
            ) : (
              <Badge variant="outline">Loading...</Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
