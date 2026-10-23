import { Headphones, MessageSquare, Share2 } from "lucide-react"
import { Logo } from "./logo"

const columns = [
  {
    id: "fitur-pemulihan",
    title: "Fitur Pemulihan",
    links: [
      "Workout Pasca Melahirkan",
      "Nutrisi Seimbang Nifas",
      "Skincare Ibu Menyusui",
      "Asisten AI 24/7",
    ],
  },
  {
    id: "bantuan",
    title: "Bantuan",
    links: ["FAQ", "Kontak Dukungan", "Kebijakan Privasi", "Syarat & Ketentuan"],
  },
]

const linkHrefs: Record<string, string> = {
  FAQ: "#faq",
  "Kontak Dukungan": "mailto:halo@ibusehat.id",
}

const socials = [
  { icon: Share2, label: "Bagikan" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Headphones, label: "Layanan Pelanggan" },
]

function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-white px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pendamping kesehatan fisik dan mental ibu pasca melahirkan. Sehat
              Ibu, Bahagia Keluarga.
            </p>
            <p className="mt-6 text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              Kontak Kami
            </p>
            <a
              href="mailto:halo@ibusehat.id"
              className="mt-1 inline-block text-sm font-medium hover:text-primary"
            >
              halo@ibusehat.id
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.id} id={column.id} className="scroll-mt-24">
              <h3 className="font-heading text-sm font-semibold">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={linkHrefs[link] ?? "#"}
                      className="text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-semibold">Mitra Kerjasama</h3>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Didukung oleh kolaborasi institusi pendidikan vokasi dan program
              nasional.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-lavender px-3 py-1 text-[0.65rem] font-semibold text-primary">
                Polibatam
              </span>
              <span className="rounded-full bg-blush px-3 py-1 text-[0.65rem] font-semibold text-brand-rose">
                Kampus Merdeka
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-primary/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 IbuSehat. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-lavender hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
