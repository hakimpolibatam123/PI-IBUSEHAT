import { Baby, CircleCheck } from "lucide-react"
import { PhotoPlaceholder } from "./photo-placeholder"

const reasons = [
  "Workout Terarah",
  "Nutrisi Seimbang",
  "Skincare Aman",
  "Asisten AI 24/7",
  "Pantau Tidur",
  "Pantau Progres",
]

const stats = [
  { value: "40 Hari", label: "Panduan Nifas Terpadu" },
  { value: "100% Aman", label: "Rekomendasi Terverifikasi" },
]

function HeroSection() {
  return (
    <section
      id="beranda"
      className="-mt-20 scroll-mt-24 bg-mist pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1 text-[0.65rem] font-semibold tracking-wider text-brand-rose uppercase">
            <span className="size-1.5 rounded-full bg-brand-rose" />
            Aplikasi Kesehatan Ibu
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-plum sm:text-6xl">
            Ibu<span className="text-primary">Sehat</span>
          </h1>
          <p className="mt-3 font-heading text-xl font-semibold text-foreground sm:text-2xl">
            Sehat Ibu, <span className="text-brand-rose">Bahagia Keluarga</span>
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Pendamping kesehatan fisik dan mental ibu pasca melahirkan dengan
            bimbingan terstruktur, aman, dan penuh kepedulian.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#unduh"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/85"
            >
              Unduh Aplikasi
            </a>
            <a
              href="#tentang"
              className="inline-flex h-11 items-center rounded-full bg-blush px-6 text-sm font-semibold text-brand-rose transition-colors hover:bg-blush/70"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          <dl className="mt-10 flex max-w-md gap-8 border-t border-primary/10 pt-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "border-l border-primary/10 pl-8" : undefined}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:pl-10">
          <div className="absolute -top-10 right-16 size-56 rounded-full bg-blush" />
          <PhotoPlaceholder
            icon={Baby}
            label="Foto ibu bersama bayi"
            className="aspect-[4/3] shadow-xl shadow-primary/10"
          />

          <div className="relative mx-4 -mt-16 rounded-2xl border border-white/20 bg-primary p-5 text-primary-foreground shadow-2xl shadow-plum/40 sm:mx-auto sm:max-w-sm lg:absolute lg:-bottom-12 lg:-left-4 lg:m-0 lg:w-80">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 font-heading text-sm font-semibold">
                <CircleCheck className="size-4" />
                Mengapa IbuSehat
              </p>
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[0.6rem] font-semibold">
                Lengkap
              </span>
            </div>
            <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {reasons.map((reason, i) => (
                <li key={reason} className="flex items-center gap-2 text-xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[0.6rem] font-bold text-primary">
                    {i + 1}
                  </span>
                  {reason}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
