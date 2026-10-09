"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { Spinner } from "@/components/ui/spinner"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap duration-(--dur) ease-gr8r outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 motion-safe:active:not-aria-[haspopup]:scale-[0.98] transition-[background-color,border-color,color,box-shadow,scale] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Plan 045 : le survol fonce (ou éclaircit en sombre) par mélange, sans transparence,
        // pour garder le contraste du libellé.
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_-1px_0_rgb(0_0_0/0.12)] hover:bg-[color-mix(in_oklab,var(--primary),var(--foreground)_14%)]",
        outline:
          "border-border-strong bg-card shadow-xs hover:bg-accent hover:text-foreground aria-expanded:bg-accent aria-expanded:text-foreground dark:bg-card dark:hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-accent hover:text-foreground aria-expanded:bg-accent aria-expanded:text-foreground",
        destructive:
          // Le survol fonce le libellé plutôt que la teinte : ≥ 5:1 au repos comme au survol.
          "bg-destructive-soft text-destructive hover:bg-destructive/15 hover:text-[color-mix(in_oklab,var(--destructive),var(--foreground)_20%)] aria-expanded:bg-destructive/15 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-control-md gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-control-xs gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-control-sm gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-meta in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-control-lg gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-control-md",
        "icon-xs":
          "size-control-xs rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-control-sm rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-control-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  loading = false,
  disabled,
  children,
  render,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    /** Plan 049 : garde le libellé, ajoute un indicateur et bloque le bouton. */
    loading?: boolean
  }) {
  // Rendu sous un autre élément (`render={<Link />}`), le bouton n'en est plus un : pas
  // d'indicateur injecté dans l'enfant, et `disabled` reste celui que l'appelant a posé.
  const rendered = render !== undefined

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      render={render}
      disabled={rendered ? disabled : disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && !rendered ? (
        <>
          <Spinner aria-hidden="true" role={undefined} aria-label={undefined} />
          {children}
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
