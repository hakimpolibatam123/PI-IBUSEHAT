import { Flame, Footprints, Moon, TrendingUp } from "lucide-react"

const metrics = [
  {
    icon: Footprints,
    title: "Aktivitas Ringan",
    description: "Pedometer & peregangan santai pasca nifas",
    badge: "Gerak Sehat",
    badgeClass: "bg-blush text-brand-rose",
  },
  {
    icon: Flame,
    title: "Streak Harian",
    description: "Konsistensi perawatan diri & minum air",
    badge: "Disiplin",
    badgeClass: "bg-lavender text-primary",
  },
  {
    icon: Moon,
    title: "Pola Tidur",
    description: "Sinkronisasi istirahat ibu dan durasi tidur bayi",
    badge: "Istirahat",
    badgeClass: "bg-blush text-brand-rose",
  },
  {
    icon: TrendingUp,
    title: "Evaluasi Progres",
    description: "Laporan mingguan untuk konsultasi dokter/bidan",
    badge: "Mingguan",
    badgeClass: "bg-lavender text-primary",
  },
]

const steps = { current: 3420, target: 4000 }

function StepsRing() {
  const radius = 16
  const circumference = 2 * Math.PI * radius
  const progress = steps.current / steps.target

  return (
    <svg viewBox="0 0 40 40" className="size-12 -rotate-90" aria-hidden>
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        strokeWidth="4"
        className="stroke-lavender"
      />
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
        className="stroke-primary"
      />
    </svg>
  )
}

function TrackerMockup() {
  return (
    <div className="mx-auto w-full max-w-xs rounded-[2rem] border border-primary/10 bg-white p-5 shadow-2xl shadow-primary/15">
      <div className="flex items-center justify-between text-[0.65rem] font-semibold">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand-rose" />
          IbuSehat Track
        </span>
        <span className="text-muted-foreground">Hari ke-18</span>
      </div>

      <div className="mt-4 rounded-xl border border-primary/10 p-3">
        <div className="flex items-center justify-between text-[0.65rem]">
          <span className="font-medium">Pemulihan Rahim</span>
          <span className="font-semibold text-primary">82%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-lavender">
          <div className="h-full w-[82%] rounded-full bg-primary" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-primary/10 p-3">
        <div>
          <p className="text-[0.65rem] text-muted-foreground">Langkah Santai</p>
          <p className="mt-0.5 font-heading text-xl font-bold">
            {steps.current.toLocaleString("id-ID")}
          </p>
          <p className="text-[0.6rem] text-primary">
            Target: {steps.target.toLocaleString("id-ID")}
          </p>
        </div>
        <StepsRing />
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-xl bg-lavender p-3">
        <Moon className="size-4 text-primary" />
        <div className="flex-1">
          <p className="text-[0.65rem] font-medium">Tidur Ibu &amp; Bayi</p>
          <p className="text-[0.6rem] text-muted-foreground">
            6.5 jam akumulatif
          </p>
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[0.6rem] font-medium">
          Stabil
        </span>
      </div>

      <p className="mt-4 border-t border-primary/10 pt-3 text-center text-[0.65rem] font-medium">
        Streak Pemulihan: 14 Hari Rutin 🔥
      </p>
    </div>
  )
}

function MonitoringSection() {
  return (
    <section id="cara-kerja" className="scroll-mt-24 bg-mist px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-3xl bg-lavender px-6 py-12 sm:px-12">
          <TrackerMockup />
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest text-brand-rose uppercase">
            Monitoring Harian
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pantau Kesehatanmu{" "}
            <span className="text-primary">Setiap Hari</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Setiap ibu memiliki ritme nifas yang berbeda. Pantau parameter kunci
            pemulihan tanpa rasa cemas berlebih langsung dari genggaman.
          </p>

          <ul className="mt-8 space-y-3">
            {metrics.map(({ icon: Icon, title, description, badge, badgeClass }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-xl border border-primary/10 bg-white p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-lavender text-primary">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {description}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold ${badgeClass}`}
                >
                  {badge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { MonitoringSection }
