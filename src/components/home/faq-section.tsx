import { Mail } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apa itu IbuSehat?",
    answer:
      "IbuSehat adalah aplikasi pendamping pemulihan ibu pasca melahirkan. Di dalamnya ada program workout bertahap, rekomendasi nutrisi, panduan skincare aman untuk ibu menyusui, pemantauan harian, dan asisten AI yang siap menjawab pertanyaan kapan saja.",
  },
  {
    question: "Kapan saya boleh mulai workout setelah melahirkan?",
    answer:
      "Gerakan ringan seperti latihan napas dan dasar panggul umumnya bisa dimulai lebih awal setelah persalinan normal, sedangkan ibu pasca operasi caesar biasanya perlu menunggu lebih lama. Program IbuSehat menyesuaikan tahapan latihan dengan usia nifas, namun selalu konsultasikan terlebih dahulu dengan dokter atau bidan Anda.",
  },
  {
    question: "Apakah rekomendasi skincare aman untuk ibu menyusui?",
    answer:
      "Panduan skincare di IbuSehat membantu Anda mengenali kandungan yang sebaiknya dihindari selama menyusui dan memilih alternatif yang lebih aman. Jika memiliki kondisi kulit tertentu, diskusikan dengan dokter sebelum mencoba produk baru.",
  },
  {
    question: "Apakah Asisten AI bisa menggantikan dokter atau bidan?",
    answer:
      "Tidak. Asisten AI membantu menjawab pertanyaan umum seputar nifas, laktasi, dan perawatan bayi, tetapi bukan pengganti pemeriksaan tenaga kesehatan. Jika Anda mengalami tanda bahaya seperti perdarahan hebat, demam tinggi, atau nyeri yang tidak biasa, segera kunjungi fasilitas kesehatan terdekat.",
  },
  {
    question: "Apakah saya bisa membagikan progres ke dokter atau bidan?",
    answer:
      "Bisa. IbuSehat menyusun laporan progres mingguan berisi aktivitas, pola tidur, dan catatan pemulihan Anda, sehingga mudah ditunjukkan saat konsultasi.",
  },
  {
    question: "Di perangkat apa saja IbuSehat bisa digunakan?",
    answer:
      "IbuSehat tersedia untuk Android dan iOS. Pindai QR code di bagian Unduh Aplikasi untuk langsung menuju halaman unduhan.",
  },
]

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-mist px-6 pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest text-brand-rose uppercase">
            Pertanyaan Umum
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Yang Sering <span className="text-primary">Ditanyakan Ibu</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Jawaban singkat untuk pertanyaan yang paling sering kami terima
            seputar IbuSehat dan masa pemulihan.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-brand-rose">
              <Mail className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Masih ada pertanyaan?</p>
              <a
                href="mailto:halo@ibusehat.id"
                className="text-xs font-medium text-primary hover:underline"
              >
                halo@ibusehat.id
              </a>
            </div>
          </div>
        </div>

        <Accordion
          defaultValue={[0]}
          className="rounded-3xl border border-primary/10 bg-white px-6 py-2 sm:px-8"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={i} className="border-primary/10">
              <AccordionTrigger className="py-5 text-[0.95rem] font-semibold hover:text-primary hover:no-underline focus-visible:ring-offset-2">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export { FaqSection }
