import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah layanan ini aman dan legal?",
    answer:
      "Ya, tentu saja! Kami menyediakan akun langganan resmi melalui program reseller yang sah. Semua akun diverifikasi dan aman digunakan. Privasi serta keamanan Anda adalah prioritas kami, dan kami tidak pernah membagikan informasi pribadi Anda.",
  },
  {
    question: "Apakah saya mendapatkan garansi?",
    answer:
      "Ya! Kami memberikan garansi penggantian 100% untuk semua produk. Jika akun Anda bermasalah atau tidak bisa digunakan, kami akan menggantinya segera tanpa biaya tambahan.",
  },
  {
    question: "Seberapa cepat saya menerima akun?",
    answer:
      "Kami mengutamakan pengiriman instan! Mayoritas akun dikirimkan dalam 5–15 menit setelah pembayaran dikonfirmasi. Dalam situasi tertentu bisa memakan waktu hingga 1 jam, namun kami akan memberi update melalui WhatsApp.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima berbagai metode pembayaran seperti transfer bank, e-wallet (GoPay, OVO, Dana), serta pembayaran internasional melalui PayPal. Semua pilihan akan diberikan saat checkout via WhatsApp.",
  },
  {
    question: "Apakah akun bisa dipakai bersama orang lain?",
    answer:
      "Tergantung paket langganan yang Anda beli. Beberapa layanan mendukung multi-user (seperti Netflix Premium 4 layar), sementara lainnya hanya untuk satu pengguna. Silakan cek detail produk atau hubungi kami untuk informasi lebih lanjut.",
  },
  {
    question: "Bagaimana jika saya lupa detail akun?",
    answer:
      "Tenang saja! Hubungi kami kapan saja melalui WhatsApp dan kami akan mengirim ulang detail akun Anda. Kami menyimpan catatan pembelian untuk memastikan Anda tidak kehilangan akses.",
  },
  {
    question: "Apakah tersedia refund?",
    answer:
      "Kami menyediakan garansi penggantian, bukan refund. Jika ada kendala dengan akun Anda, kami akan menggantinya segera. Namun jika layanan tidak sesuai harapan dalam 24 jam pertama, kami bisa membahas opsi refund secara kasus per kasus.",
  },
  {
    question: "Bagaimana cara memperpanjang langganan?",
    answer:
      "Cukup hubungi kami di WhatsApp sebelum masa langganan berakhir. Kami akan mengirimkan opsi perpanjangan dan harganya. Banyak pelanggan juga memasang pengingat otomatis agar tidak terputus.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pertanyaan yang Sering <span className="bg-gradient-primary bg-clip-text text-transparent">Diajukan</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Semua yang perlu Anda ketahui tentang layanan kami
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Masih punya pertanyaan?</p>
          <a
            href="https://wa.me/6282115360819"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Hubungi kami via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
