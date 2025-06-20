"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/shared/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer w-sm-400-to-md-600 inline-flex shrink-0 items-center rounded-full bg-purple-600 p-[0.25rem] transition-all outline-none",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block size-[clamp(0.75rem,0.273rem+2.04vw,1.25rem)] rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
