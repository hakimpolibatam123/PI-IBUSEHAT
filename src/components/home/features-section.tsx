import { ArrowRight, Bot, Flower2, MoveDiagonal, Utensils } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: MoveDiagonal,
    title: "Workout Pasca Melahirkan",
    description:
      "Latihan pemulihan otot perut dan dasar panggul yang dirancang bertahap sesuai usia nifas.",
    tone: "rose",
  },
  {
    icon: Utensils,
    title: "Nutrisi & Diet Seimbang",
    description:
      "Rekomendasi menu kaya zat besi, serat, dan nutrisi esensial untuk memperlancar laktasi.",
    tone: "rose",
  },
  {
    icon: Flower2,
    title: "Skincare Aman Ibu Menyusui",
    description:
      "Panduan kandungan bahan kosmetik yang bebas bahan kimia berbahaya untuk ibu dan bayi.",
    tone: "primary",
  },
  {
    icon: Bot,
    title: "Asisten Cerdas AI 24/7",
    description:
      "Tanya jawab seputar tanda bahaya nifas, laktasi, dan tips menenangkan bayi kapan saja.",
    tone: "rose",
  },
] as const

function FeaturesSection() {
  return (
    <section id="fitur" className="scroll-mt-24 px-6 pt-4 pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description, tone }) => (
          <article
            key={title}
            className="group flex flex-col rounded-2xl border border-primary/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-full",
                tone === "rose"
                  ? "bg-blush text-brand-rose"
                  : "bg-lavender text-primary"
              )}
            >
              <Icon className="size-4.5" />
            </span>
            <h3 className="mt-6 font-heading text-base font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
              {description}
            </p>
            <a
              href="#unduh"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
            >
              Pelajari Fitur
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export { FeaturesSection }
