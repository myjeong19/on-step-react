import { cn } from '@/lib/shadcn-ui';

export const PuzzleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('w-12 h-12', className)}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="72" height="72" fill="url(#pattern0_8_22681)" />
      <defs>
        <pattern id="pattern0_8_22681" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_8_22681" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_8_22681"
          width="72"
          height="72"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
