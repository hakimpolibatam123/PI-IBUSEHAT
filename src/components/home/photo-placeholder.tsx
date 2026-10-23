import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Stand-in for the photos in the design. Replace with
 * `<Image src="/images/…" fill className="object-cover" />` once real
 * photos are added to `public/images`.
 */
function PhotoPlaceholder({
  icon: Icon,
  label,
  className,
  children,
}: {
  icon: LucideIcon
  label: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-linear-to-br from-blush via-lavender to-primary/25",
        className
      )}
    >
      <div className="absolute -top-10 -right-10 size-48 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 size-56 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-primary/70">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/70 shadow-sm backdrop-blur">
          <Icon className="size-7" />
        </span>
        <span className="text-xs font-medium text-plum/60">{label}</span>
      </div>
      {children}
    </div>
  )
}

export { PhotoPlaceholder }
