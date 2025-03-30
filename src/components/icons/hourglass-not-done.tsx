import { cn } from '@/lib/shadcn-ui';

export const HourglassNotDone = ({ className }: { className?: string }) => {
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
      <rect width="72" height="72" fill="url(#pattern0_22_1867)" />
      <defs>
        <pattern id="pattern0_22_1867" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_22_1867" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_22_1867"
          width="72"
          height="72"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
