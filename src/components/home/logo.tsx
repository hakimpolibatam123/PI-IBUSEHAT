import { HeartPulse } from "lucide-react"
import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#beranda"
      className={cn("flex items-center gap-2.5 font-heading", className)}
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-blush text-brand-rose">
        <HeartPulse className="size-4.5" />
      </span>
      <span className="text-lg font-bold tracking-tight">
        Ibu<span className="text-primary">Sehat</span>
      </span>
    </a>
  )
}

export { Logo }
