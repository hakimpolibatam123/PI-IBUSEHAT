import { ArrowRight } from "lucide-react"

function IntroSection() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-primary/10 bg-lavender px-6 py-14 text-center sm:px-16">
        <span className="inline-block rounded-full bg-blush px-3 py-1 text-[0.65rem] font-semibold text-brand-rose">
          IbuSehat
        </span>
        <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pendamping Kesehatan Ibu{" "}
          <span className="text-primary">Pasca Melahirkan</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Mendampingi setiap langkah pemulihan ibu dari minggu pertama hingga
          aktif kembali dengan aman dan terpercaya.
        </p>
        <a
          href="#fitur"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Lihat Fitur
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </section>
  )
}

export { IntroSection }
