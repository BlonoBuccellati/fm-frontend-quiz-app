"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

function ProgressBar({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      role="progressbar"
      className={cn(
        "dark:bg-blue-850 h-200 w-full overflow-hidden rounded-full bg-white p-[0.25rem]",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full rounded-full bg-purple-600 transition-all"
        style={{
          width: `${value ?? 0}%`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { ProgressBar };
