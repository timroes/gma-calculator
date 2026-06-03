import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "../../lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative inline-block size-4 shrink-0 rounded-[4px] border border-gray-300 bg-white align-middle shadow-xs outline-none",
        "focus-visible:border-teal-500 focus-visible:ring-[3px] focus-visible:ring-teal-300",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-teal-600 data-[state=checked]:text-white data-[state=checked]:border-teal-600",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="absolute inset-0 flex items-center justify-center text-current"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
