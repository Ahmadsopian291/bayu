// // import { useParams, Link } from "react-router-dom";
// // import { products } from "@/data/products";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { ArrowLeft, Check, ShoppingCart, Shield, Zap, RefreshCw } from "lucide-react";
// // import { Navbar } from "@/components/Navbar";
// // import { Footer } from "@/components/Footer";

// // const ProductDetail = () => {
// //   const { productId } = useParams();
// //   const product = products.find((p) => p.id === productId);

// //   if (!product) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-background">
// //         <div className="text-center">
// //           <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
// //           <Button asChild>
// //             <Link to="/">Return Home</Link>
// //           </Button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const whatsappMessage = `Hi! I'm interested in ordering ${product.name}. Can you help me?`;
// //   const whatsappUrl = `https://wa.me/6285795140765?text=${encodeURIComponent(whatsappMessage)}`;

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <Navbar />
      
// //       <div className="pt-24 pb-16 px-4">
// //         <div className="container mx-auto max-w-6xl">
// //           {/* Back Button */}
// //           <Button variant="ghost" asChild className="mb-8">
// //             <Link to="/">
// //               <ArrowLeft className="mr-2 h-4 w-4" />
// //               Back to Products
// //             </Link>
// //           </Button>

// //           {/* Product Header */}
// //           <div className="grid md:grid-cols-2 gap-12 mb-16">
// //             <div className="space-y-6">
// //               <div className="text-7xl">{product.logo}</div>
// //               <div>
// //                 <div className="text-sm text-primary font-semibold mb-2">{product.category}</div>
// //                 <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
// //                 <p className="text-xl text-muted-foreground">{product.description}</p>
// //               </div>

// //               {/* Key Features */}
// //               <div className="space-y-3">
// //                 {product.features.map((feature, index) => (
// //                   <div key={index} className="flex items-center gap-3">
// //                     <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
// //                       <Check className="h-3 w-3 text-primary" />
// //                     </div>
// //                     <span className="text-foreground">{feature}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* What You Get */}
// //             <Card className="p-8 bg-gradient-card border-border/50 h-fit">
// //               <h3 className="text-2xl font-bold mb-6">What You Get</h3>
// //               <div className="space-y-4">
// //                 <div className="flex items-start gap-3">
// //                   <Zap className="h-5 w-5 text-primary mt-1" />
// //                   <div>
// //                     <h4 className="font-semibold mb-1">Full Access</h4>
// //                     <p className="text-sm text-muted-foreground">
// //                       Complete access to all premium features and content
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start gap-3">
// //                   <Shield className="h-5 w-5 text-primary mt-1" />
// //                   <div>
// //                     <h4 className="font-semibold mb-1">Warranty & Support</h4>
// //                     <p className="text-sm text-muted-foreground">
// //                       100% replacement warranty with 24/7 customer support
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start gap-3">
// //                   <ShoppingCart className="h-5 w-5 text-primary mt-1" />
// //                   <div>
// //                     <h4 className="font-semibold mb-1">Instant Delivery</h4>
// //                     <p className="text-sm text-muted-foreground">
// //                       Receive your account within 5-15 minutes via WhatsApp
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start gap-3">
// //                   <RefreshCw className="h-5 w-5 text-primary mt-1" />
// //                   <div>
// //                     <h4 className="font-semibold mb-1">Easy Replacement</h4>
// //                     <p className="text-sm text-muted-foreground">
// //                       Quick replacement if anything goes wrong, no questions asked
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Card>
// //           </div>

// //           {/* Pricing Options */}
// //           <div className="mb-16">
// //             <h2 className="text-4xl font-bold text-center mb-12">
// //               Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Plan</span>
// //             </h2>
            
// //             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// //               {product.pricing.map((tier, index) => (
// //                 <Card
// //                   key={index}
// //                   className={`p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
// //                     index === 1 ? 'ring-2 ring-primary shadow-neon' : ''
// //                   }`}
// //                 >
// //                   {index === 1 && (
// //                     <div className="text-center mb-4">
// //                       <span className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-xs font-semibold text-primary">
// //                         Most Popular
// //                       </span>
// //                     </div>
// //                   )}
                  
// //                   <div className="text-center mb-6">
// //                     <h3 className="text-xl font-semibold mb-2">{tier.duration}</h3>
// //                     <div className="text-4xl font-bold text-primary mb-1">{tier.price}</div>
// //                     <p className="text-sm text-muted-foreground">per {tier.duration.toLowerCase()}</p>
// //                   </div>

// //                   <div className="space-y-3 mb-8">
// //                     {tier.features.map((feature, idx) => (
// //                       <div key={idx} className="flex items-center gap-2 text-sm">
// //                         <Check className="h-4 w-4 text-primary flex-shrink-0" />
// //                         <span>{feature}</span>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   <Button
// //                     variant={index === 1 ? "hero" : "outline"}
// //                     className="w-full"
// //                     asChild
// //                   >
// //                     <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
// //                       Order Now
// //                     </a>
// //                   </Button>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>

// //           {/* CTA Section */}
// //           <Card className="p-12 bg-gradient-card border-border/50 text-center">
// //             <h3 className="text-3xl font-bold mb-4">
// //               Ready to Get Started?
// //             </h3>
// //             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
// //               Order now and get instant access to {product.name}. Our team is ready to help you 24/7.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Button variant="hero" size="lg" asChild>
// //                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
// //                   Order on WhatsApp
// //                 </a>
// //               </Button>
// //               <Button variant="outline" size="lg" asChild>
// //                 <Link to="/#faq">
// //                   View FAQ
// //                 </Link>
// //               </Button>
// //             </div>
// //           </Card>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ProductDetail;


// import { useParams, Link } from "react-router-dom";
// import { products } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ArrowLeft, Check, ShoppingCart, Shield, Zap, RefreshCw } from "lucide-react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
//           <Button asChild>
//             <Link to="/">Return Home</Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//  const handleOrder = (serviceType: string, duration: string, price: number) => {
//     const message = `Halo, saya ingin order ${product.name} - ${serviceType} (${duration}) - Harga: ${price}`;
//     const url = `https://wa.me/6282318179248?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };


//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <div className="pt-24 pb-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           {/* Back Button */}
//           <Button variant="ghost" asChild className="mb-8">
//             <Link to="/">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>
//           </Button>

//           {/* Product Header */}
//           <div className="grid md:grid-cols-2 gap-12 mb-16">
//             <div className="space-y-6">
//               <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-20 w-auto object-contain"
//                 />

//               <div>
//                 {/* <div className="text-sm text-primary font-semibold mb-2">
//                   {product.category}
//                 </div> */}
//                 <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
//                 <p className="text-xl text-muted-foreground">{product.description}</p>
//               </div>

//               {/* Key Features */}
//               {/* <div className="space-y-3">
//                 {product.features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
//                       <Check className="h-3 w-3 text-primary" />
//                     </div>
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div> */}
//             </div>

//             {/* What You Get */}
//             <Card className="p-8 bg-gradient-card border-border/50 h-fit">
//               <h3 className="text-2xl font-bold mb-6">What You Get</h3>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <Zap className="h-5 w-5 text-primary mt-1" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Full Access</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Complete access to all premium features and content
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <Shield className="h-5 w-5 text-primary mt-1" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Warranty & Support</h4>
//                     <p className="text-sm text-muted-foreground">
//                       100% replacement warranty with 24/7 customer support
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <ShoppingCart className="h-5 w-5 text-primary mt-1" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Instant Delivery</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Receive your account within 5-15 minutes via WhatsApp
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <RefreshCw className="h-5 w-5 text-primary mt-1" />
//                   <div>
//                     <h4 className="font-semibold mb-1">Easy Replacement</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Quick replacement if anything goes wrong, no questions asked
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Pricing OPTIONS (new system) */}
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Choose Your{" "}
//               <span className="bg-gradient-primary bg-clip-text text-transparent">
//                 Plan
//               </span>
//             </h2>

//             <div className="space-y-16">
//               <div className="space-y-16">
//   {product.services.map((service, idx) => (
//     <div key={idx}>
//       {/* Service Type Title: Sharing / Private / Family */}
//       <h3 className="text-3xl font-bold text-center mb-8">
//         {service.type}
//       </h3>

//       <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {service.durations.map((duration, i) => (
//           <Card
//             key={i}
//             className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
//           >
//             <div className="text-center mb-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 {duration.label}
//               </h3>

//               <div className="text-4xl font-bold text-primary mb-1">
//                 Rp {duration.price.toLocaleString("id-ID")}
//               </div>

//               <p className="text-sm text-muted-foreground">
//                 {service.type}
//               </p>
//             </div>

//             {/* If you want features per duration, add here, otherwise skip */}
//             {/* <div className="space-y-3 mb-8">
//               <div className="flex items-center gap-2 text-sm">
//                 <Check className="h-4 w-4 text-primary" />
//                 <span>Premium Access</span>
//               </div>
//             </div> */}

//             <Button variant="hero" className="w-full" asChild>
//               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
//                 Order Now
//               </a>
//             </Button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   ))}
// </div>

//             </div>
//           </div>

//           {/* CTA */}
//           <Card className="p-12 bg-gradient-card border-border/50 text-center">
//             <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
//             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Order now and get instant access to {product.name}. Our team is
//               ready to help you 24/7.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button variant="hero" size="lg" asChild>
//                 <a href={whatsappUrl} target="_blank">
//                   Order on WhatsApp
//                 </a>
//               </Button>

//               <Button variant="outline" size="lg" asChild>
//                 <Link to="/#faq">View FAQ</Link>
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetail;


import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, ShoppingCart, Shield, Zap, RefreshCw } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produk Tidak Ditemukan</h1>
          <Button asChild>
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  // WA ORDER
  const handleOrder = (serviceType: string, duration: string, price: number) => {
  const hargaText = price && price > 0 
    ? ` - Harga: Rp ${price.toLocaleString("id-ID")}`
    : "";

  const message = `Halo, saya ingin memesan ${product.name} - ${serviceType} (${duration})${hargaText}`;

  const url = `https://wa.me/6282318179248?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Produk
            </Link>
          </Button>

          {/* Product Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-auto object-contain"
              />

              <div>
                <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-muted-foreground">{product.description}</p>
              </div>
            </div>

            {/* What You Get */}
            <Card className="p-8 bg-gradient-card border-border/50 h-fit">
              <h3 className="text-2xl font-bold mb-6">Apa yang Anda Dapatkan</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Akses Penuh</h4>
                    <p className="text-sm text-muted-foreground">
                      Akses lengkap ke semua fitur dan konten premium
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Garansi & Dukungan</h4>
                    <p className="text-sm text-muted-foreground">
                      Garansi penggantian 100% dan dukungan 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShoppingCart className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Pengiriman Instan</h4>
                    <p className="text-sm text-muted-foreground">
                      Akun dikirim dalam 5–15 menit melalui WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Penggantian Mudah</h4>
                    <p className="text-sm text-muted-foreground">
                      Penggantian cepat jika terjadi masalah, tanpa pertanyaan
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Pricing OPTIONS */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Pilih{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Paket Anda
              </span>
            </h2>

            <div className="space-y-16">
              {product.services.map((service, idx) => (
                <div key={idx}>
                  {/* Service type */}
                  <h3 className="text-3xl font-bold text-center mb-8">
                    {service.type}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {service.durations.map((duration, i) => (
                      <Card
                        key={i}
                        className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {duration.label}
                          </h3>

                          <div className="text-4xl font-bold text-primary mb-1">
                            Rp {duration.price.toLocaleString("id-ID")}
                          </div>

                          <p className="text-sm text-muted-foreground">
                            {service.type}
                          </p>
                        </div>

                        <Button
                          variant="hero"
                          className="w-full"
                          onClick={() =>
                            handleOrder(service.type, duration.label, duration.price)
                          }
                        >
                          Pesan Sekarang
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-12 bg-gradient-card border-border/50 text-center">
            <h3 className="text-3xl font-bold mb-4">Siap Memulai?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pesan sekarang dan dapatkan akses instan ke {product.name}. Tim kami siap membantu Anda 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => handleOrder("Pertanyaan Umum", "N/A", 0)}
              >
                Pesan via WhatsApp
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/#faq">Lihat FAQ</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;

