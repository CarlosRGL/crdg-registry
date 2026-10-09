import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const skeletonVariants = cva("animate-pulse bg-surface-3 motion-reduce:animate-none", {
  variants: {
    shape: {
      default: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    shape: "default",
  },
})

function Skeleton({
  className,
  shape,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ shape }), className)}
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants }
