import { Clock, DollarSign, Shield, Headphones, RefreshCw, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Clock,
    title: "Pengiriman Instan",
    description: "Dapatkan detail akun Anda dalam hitungan menit setelah pemesanan. Tanpa menunggu lama.",
  },
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description: "Langganan premium dengan harga terbaik. Hemat hingga 80% dibanding harga resmi.",
  },
  {
    icon: Shield,
    title: "Aman & Terjamin",
    description: "Semua akun diverifikasi dan aman digunakan. Privasi Anda adalah prioritas kami.",
  },
  {
    icon: Headphones,
    title: "Dukungan Pelanggan 24/7",
    description: "Tim kami siap membantu Anda kapan saja jika ada pertanyaan atau kendala.",
  },
  {
    icon: RefreshCw,
    title: "Garansi Penggantian 100%",
    description: "Jika akun Anda bermasalah, kami akan menggantinya secara langsung tanpa biaya tambahan.",
  },
  {
    icon: CheckCircle,
    title: "Kualitas Terjamin",
    description: "Setiap akun diuji terlebih dahulu sebelum dikirim agar Anda mendapatkan pengalaman terbaik.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Kenapa Memilih <span className="bg-gradient-primary bg-clip-text text-transparent">Kami?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan layanan terbaik di pasaran dengan kualitas dan keandalan yang tidak tertandingi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
