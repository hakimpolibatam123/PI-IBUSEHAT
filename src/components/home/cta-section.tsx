import { Download } from "lucide-react"

const QR_SIZE = 21
const finderOrigins = [
  [0, 0],
  [QR_SIZE - 7, 0],
  [0, QR_SIZE - 7],
]

function inFinder(x: number, y: number) {
  return finderOrigins.some(
    ([fx, fy]) => x >= fx - 1 && x <= fx + 7 && y >= fy - 1 && y <= fy + 7
  )
}

/** Decorative QR-style graphic. Swap for a real QR code of the store link. */
function QrGraphic() {
  const modules: { x: number; y: number; tone: number }[] = []
  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      if (inFinder(x, y)) continue
      if ((x * 7 + y * 13 + x * y) % 5 < 2) {
        modules.push({ x, y, tone: (x + y) % 3 })
      }
    }
  }
  const toneClass = ["fill-primary", "fill-brand-rose", "fill-plum"]

  return (
    <svg viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`} className="size-32" aria-hidden>
      {finderOrigins.map(([fx, fy]) => (
        <g key={`${fx}-${fy}`}>
          <rect x={fx} y={fy} width="7" height="7" rx="1" className="fill-plum" />
          <rect x={fx + 1} y={fy + 1} width="5" height="5" rx="0.6" className="fill-white" />
          <rect x={fx + 2} y={fy + 2} width="3" height="3" rx="0.4" className="fill-primary" />
        </g>
      ))}
      {modules.map(({ x, y, tone }) => (
        <rect
          key={`${x}-${y}`}
          x={x + 0.1}
          y={y + 0.1}
          width="0.8"
          height="0.8"
          rx="0.15"
          className={toneClass[tone]}
        />
      ))}
    </svg>
  )
}

function CtaSection() {
  return (
    <section id="unduh" className="scroll-mt-24 bg-mist px-6 pb-20 lg:pb-28">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 overflow-hidden rounded-3xl bg-plum px-8 py-12 text-white sm:px-12 md:flex-row md:justify-between">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/40 blur-3xl" />

        <div className="relative max-w-lg">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold">
            Mulai Sekarang
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Mulai Bersama IbuSehat
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Unduh sekarang dan nikmati pendampingan kesehatan terbaik untuk
            pemulihan optimal dan kebahagiaan keluarga.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-brand-rose px-6 text-sm font-semibold shadow-lg shadow-black/20 transition-opacity hover:opacity-90"
          >
            <Download className="size-4" />
            Unduh Aplikasi
          </a>
        </div>

        <div className="relative flex flex-col items-center rounded-2xl bg-white p-5 text-center text-foreground shadow-xl">
          <QrGraphic />
          <p className="mt-3 text-[0.65rem] leading-snug text-muted-foreground">
            Scan untuk Unduh di
            <br />
            Android &amp; iOS
          </p>
        </div>
      </div>
    </section>
  )
}

export { CtaSection }
