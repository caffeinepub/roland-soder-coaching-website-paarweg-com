import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { featureFlags } from '@/config/featureFlags';

interface MobileReadMoreProps {
  children: React.ReactNode;
  collapsedHeight?: string;
  id?: string;
}

export default function MobileReadMore({ 
  children, 
  collapsedHeight = '200px',
  id 
}: MobileReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = id || `mobile-read-more-${Math.random().toString(36).substr(2, 9)}`;

  // If compacting is disabled, render content fully expanded without any collapse UI
  if (!featureFlags.enableMobileReadMoreCompacting) {
    return <div>{children}</div>;
  }

  // Original behavior when compacting is enabled
  return (
    <div className="relative">
      {/* Content wrapper - always rendered in DOM for SEO */}
      <div
        id={contentId}
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-none' : 'md:max-h-none'}
        `}
        style={{
          maxHeight: isExpanded ? 'none' : `min(${collapsedHeight}, 100%)`,
        }}
        aria-expanded={isExpanded}
      >
        {children}
      </div>

      {/* Gradient fade effect when collapsed - mobile only */}
      {!isExpanded && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Toggle button - mobile only */}
      <div className="mt-4 flex justify-center md:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls={contentId}
          aria-expanded={isExpanded}
          className="gap-2"
        >
          {isExpanded ? (
            <>
              Weniger anzeigen
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Mehr anzeigen
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
