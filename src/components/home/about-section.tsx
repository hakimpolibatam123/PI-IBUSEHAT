import { Check, PersonStanding } from "lucide-react"
import { PhotoPlaceholder } from "./photo-placeholder"

const highlights = ["Program Terarah", "Konten Terpercaya", "Mudah Digunakan"]

function AboutSection() {
  return (
    <section id="tentang" className="scroll-mt-24 px-6 pt-10 pb-16 lg:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <PhotoPlaceholder
          icon={PersonStanding}
          label="Foto ibu berolahraga ringan"
          className="aspect-[4/3]"
        >
          <span className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold text-primary-foreground">
            IbuSehat
          </span>
        </PhotoPlaceholder>

        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest text-brand-rose uppercase">
            Tentang Kami
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dedikasi Nyata untuk{" "}
            <span className="text-brand-rose">Kesehatan Ibu</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            IbuSehat dirancang untuk merangkul ibu secara holistik. Masa nifas
            memerlukan kepedulian klinis sekaligus sentuhan hangat. Kami
            memadukan rekomendasi berbasis bukti dengan kenyamanan rutinitas
            harian dirumah.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex size-5 items-center justify-center rounded-full bg-blush text-brand-rose">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#fitur"
            className="mt-8 inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/85"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </section>
  )
}

export { AboutSection }
