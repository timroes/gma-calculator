import * as React from "react"

import { cn } from "@/lib/utils"

interface FieldProps {
  label: React.ReactNode
  htmlFor?: string
  className?: string
  children: React.ReactNode
}

function Field({ label, htmlFor, className, children }: FieldProps) {
  return (
    <div
      data-slot="field"
      className={cn(
        "relative rounded-md border border-input bg-transparent px-3 pt-3 pb-2 text-left transition-[color,box-shadow]",
        "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        className
      )}
    >
      <label
        htmlFor={htmlFor}
        className="absolute -top-2 left-2.5 bg-background px-1 text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      <div className="flex items-center">{children}</div>
    </div>
  )
}

export { Field }
