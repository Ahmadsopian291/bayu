// export interface PricingTier {
//   duration: string;
//   price: string;
//   features: string[];
// }

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   shortDescription: string;
//   logo: string;
//   category: string;
//   pricing: PricingTier[];
//   features: string[];
//   popular?: boolean;
// }

// export const products: Product[] = [
//   {
//     id: "netflix",
//     name: "Netflix Premium",
//     shortDescription: "Stream unlimited movies and TV shows in 4K quality",
//     description: "Access Netflix's entire library with Premium subscription. Watch on 4 screens simultaneously, download content, and enjoy Ultra HD quality.",
//     logo: "🎬",
//     category: "Entertainment",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$2.99",
//         features: ["4K Ultra HD", "4 Screens", "Download Content", "No Ads"],
//       },
//       {
//         duration: "Monthly",
//         price: "$8.99",
//         features: ["4K Ultra HD", "4 Screens", "Download Content", "No Ads", "Priority Support"],
//       },
//       {
//         duration: "Yearly",
//         price: "$79.99",
//         features: ["4K Ultra HD", "4 Screens", "Download Content", "No Ads", "Priority Support", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//     popular: true,
//   },
//   {
//     id: "spotify",
//     name: "Spotify Premium",
//     shortDescription: "Listen to millions of songs ad-free",
//     description: "Enjoy unlimited music streaming with Spotify Premium. Download songs, skip unlimited, and listen offline.",
//     logo: "🎵",
//     category: "Music",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$1.99",
//         features: ["Ad-Free Music", "Unlimited Skips", "Offline Download", "High Quality Audio"],
//       },
//       {
//         duration: "Monthly",
//         price: "$5.99",
//         features: ["Ad-Free Music", "Unlimited Skips", "Offline Download", "High Quality Audio", "Priority Support"],
//       },
//       {
//         duration: "Yearly",
//         price: "$49.99",
//         features: ["Ad-Free Music", "Unlimited Skips", "Offline Download", "High Quality Audio", "Priority Support", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//     popular: true,
//   },
//   {
//     id: "canva",
//     name: "Canva Pro",
//     shortDescription: "Professional design tools for everyone",
//     description: "Create stunning designs with Canva Pro. Access premium templates, remove backgrounds, and collaborate with your team.",
//     logo: "🎨",
//     category: "Design",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$2.49",
//         features: ["Premium Templates", "Background Remover", "Brand Kit", "Unlimited Storage"],
//       },
//       {
//         duration: "Monthly",
//         price: "$7.99",
//         features: ["Premium Templates", "Background Remover", "Brand Kit", "Unlimited Storage", "Team Collaboration"],
//       },
//       {
//         duration: "Yearly",
//         price: "$69.99",
//         features: ["Premium Templates", "Background Remover", "Brand Kit", "Unlimited Storage", "Team Collaboration", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//   },
//   {
//     id: "chatgpt",
//     name: "ChatGPT Plus",
//     shortDescription: "Advanced AI assistance at your fingertips",
//     description: "Get unlimited access to GPT-4, priority access during peak times, and faster response speeds.",
//     logo: "🤖",
//     category: "AI Tools",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$3.99",
//         features: ["GPT-4 Access", "Priority Access", "Faster Responses", "No Rate Limits"],
//       },
//       {
//         duration: "Monthly",
//         price: "$12.99",
//         features: ["GPT-4 Access", "Priority Access", "Faster Responses", "No Rate Limits", "Advanced Features"],
//       },
//       {
//         duration: "Yearly",
//         price: "$119.99",
//         features: ["GPT-4 Access", "Priority Access", "Faster Responses", "No Rate Limits", "Advanced Features", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//     popular: true,
//   },
//   {
//     id: "gemini",
//     name: "Google Gemini Advanced",
//     shortDescription: "Google's most capable AI model",
//     description: "Access Gemini Advanced for complex tasks, longer conversations, and priority access to new features.",
//     logo: "✨",
//     category: "AI Tools",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$3.49",
//         features: ["Gemini Ultra", "2M Token Context", "Priority Access", "Advanced Features"],
//       },
//       {
//         duration: "Monthly",
//         price: "$11.99",
//         features: ["Gemini Ultra", "2M Token Context", "Priority Access", "Advanced Features", "Early Access"],
//       },
//       {
//         duration: "Yearly",
//         price: "$109.99",
//         features: ["Gemini Ultra", "2M Token Context", "Priority Access", "Advanced Features", "Early Access", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//   },
//   {
//     id: "disney",
//     name: "Disney+",
//     shortDescription: "Stream Disney, Marvel, Star Wars & more",
//     description: "Watch exclusive originals, movies, and series from Disney, Pixar, Marvel, Star Wars, and National Geographic.",
//     logo: "🏰",
//     category: "Entertainment",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$1.99",
//         features: ["4K Ultra HD", "Multiple Profiles", "Download Content", "No Ads"],
//       },
//       {
//         duration: "Monthly",
//         price: "$5.99",
//         features: ["4K Ultra HD", "Multiple Profiles", "Download Content", "No Ads", "GroupWatch"],
//       },
//       {
//         duration: "Yearly",
//         price: "$49.99",
//         features: ["4K Ultra HD", "Multiple Profiles", "Download Content", "No Ads", "GroupWatch", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//   },
//   {
//     id: "prime",
//     name: "Amazon Prime Video",
//     shortDescription: "Unlimited streaming of movies and TV shows",
//     description: "Watch thousands of movies and TV shows, including Amazon Originals and exclusive content.",
//     logo: "📺",
//     category: "Entertainment",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$1.49",
//         features: ["HD Streaming", "3 Screens", "Download Content", "Amazon Originals"],
//       },
//       {
//         duration: "Monthly",
//         price: "$4.99",
//         features: ["HD Streaming", "3 Screens", "Download Content", "Amazon Originals", "X-Ray Features"],
//       },
//       {
//         duration: "Yearly",
//         price: "$39.99",
//         features: ["HD Streaming", "3 Screens", "Download Content", "Amazon Originals", "X-Ray Features", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//   },
//   {
//     id: "grammarly",
//     name: "Grammarly Premium",
//     shortDescription: "AI-powered writing assistant",
//     description: "Write better with advanced grammar checking, tone detection, and plagiarism detection.",
//     logo: "📝",
//     category: "Productivity",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$2.49",
//         features: ["Advanced Grammar", "Tone Detector", "Plagiarism Check", "Word Choice"],
//       },
//       {
//         duration: "Monthly",
//         price: "$7.99",
//         features: ["Advanced Grammar", "Tone Detector", "Plagiarism Check", "Word Choice", "Style Guide"],
//       },
//       {
//         duration: "Yearly",
//         price: "$69.99",
//         features: ["Advanced Grammar", "Tone Detector", "Plagiarism Check", "Word Choice", "Style Guide", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//   },
//   {
//     id: "microsoft365",
//     name: "Microsoft 365",
//     shortDescription: "Complete productivity suite",
//     description: "Access Word, Excel, PowerPoint, Outlook, and 1TB OneDrive storage with Microsoft 365.",
//     logo: "💼",
//     category: "Productivity",
//     pricing: [
//       {
//         duration: "Weekly",
//         price: "$2.99",
//         features: ["All Office Apps", "1TB OneDrive", "Premium Features", "Mobile Apps"],
//       },
//       {
//         duration: "Monthly",
//         price: "$9.99",
//         features: ["All Office Apps", "1TB OneDrive", "Premium Features", "Mobile Apps", "Advanced Security"],
//       },
//       {
//         duration: "Yearly",
//         price: "$89.99",
//         features: ["All Office Apps", "1TB OneDrive", "Premium Features", "Mobile Apps", "Advanced Security", "2 Months Free"],
//       },
//     ],
//     features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
//   },
// ];

export interface PricingOption {
  type: "standard" | "private" | "sharing" | "family";  // tipe layanan
  label: string;  // misal "Bulanan", "Private", "Family Plan"
  plans: {
    duration: string;     // misal "1 Bulan", "3 Bulan", "1 Tahun"
    price: number;        // harga
    features: string[];   // fitur paket
  }[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  services: {
    type: string;
    durations: {
      label: string;
      price: number;
    }[];
  }[];
}

// export const products: Product[] = [
//   {
//     id: "netflix",
//     name: "Netflix Premium",
//     shortDescription: "Streaming film dan series tanpa batas",
//     description: "Netflix Premium akses 4 layar, 4K...",
//     logo: "/images/logos/netflix.png",
//     category: "Entertainment",
//     pricingOptions: [
//       {
//         type: "standard",
//         label: "Bulanan",
//         plans: [
//           { duration: "1 Bulan", price: 89000, features: ["4K", "4 Devices"] }
//         ],
//       },
//     ],
//     features: ["Akses penuh", "Pengiriman instan", "Support 24/7"],
//     popular: true,
//   },
//   {
//     id: "spotify",
//     name: "Spotify Premium",
//     shortDescription: "Musik tanpa iklan",
//     description: "Dengarkan musik offline, audio kualitas tinggi, tanpa iklan.",
//     logo: "/images/spotify.png",
//     category: "Music",
//     pricingOptions: [
//       {
//         type: "private",
//         label: "Private",
//         plans: [
//           { duration: "1 Bulan", price: 59900, features: ["Tanpa iklan", "Offline"] },
//           { duration: "3 Bulan", price: 170000, features: ["3 bulan Private", "Support"] },
//         ],
//       },
//       {
//         type: "sharing",
//         label: "Sharing",
//         plans: [
//           { duration: "1 Bulan", price: 30000, features: ["1 akun sharing", "Akses musik penuh"] },
//         ],
//       },
//     ],
//     features: ["Akses penuh", "Garansi", "Support 24/7"],
//   },
//   {
//     id: "disney",
//     name: "Disney+ Hotstar",
//     shortDescription: "Film Disney, Marvel, Star Wars & lainnya",
//     description: "Nikmati konten eksklusif Disney, Marvel, Pixar, dan lainnya.",
//     logo: "/images/disney.png",
//     category: "Entertainment",
//     pricingOptions: [
//       {
//         type: "family",
//         label: "Family Plan",
//         plans: [
//           { duration: "1 Bulan", price: 99900, features: ["4 Profil", "4K"] },
//           { duration: "3 Bulan", price: 280000, features: ["4 Profil", "Hemat"] },
//           { duration: "12 Bulan", price: 1000000, features: ["Diskon", "4 Profil"] },
//         ],
//       },
//       {
//         type: "private",
//         label: "Private",
//         plans: [
//           { duration: "1 Bulan", price: 70000, features: ["Akun privat", "Akses penuh"] },
//         ],
//       },
//       {
//         type: "sharing",
//         label: "Sharing",
//         plans: [
//           { duration: "1 Bulan", price: 35000, features: ["1 akun share", "Akses penuh"] },
//         ],
//       },
//     ],
//     features: ["Akses penuh", "Pengiriman instan", "Support 24/7"],
//   },
// ];

// export const products = [
//   {
//     id: "Netflix",
//     name: "Netflix Premium",
//     slug: "netflix-premium",
//     description:
//       "Netflix menyediakan akses tak terbatas ke ribuan film, serial TV, dokumenter, dan konten orisinal berkualitas. Nikmati streaming tanpa iklan di berbagai perangkat.",
//     image: "/images/netflix.png",
//     services: [
//       {
//         type: "Bulanan",
//         durations: [
//           { label: "1 Bulan", price: 35000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "Spotify",
//     name: "Spotify Premium",
//     slug: "spotify-premium",
//     description:
//       "Spotify Premium memungkinkan Anda menikmati musik tanpa iklan, kualitas audio lebih tinggi, dan fitur unduhan untuk mendengarkan secara offline.",
//     image: "/images/logos/spotify.png",
//     services: [
//       {
//         type: "Sharing",
//         durations: [
//           { label: "1 Bulan", price: 15000 },
//         ],
//       },
//       {
//         type: "Private",
//         durations: [
//           { label: "1 Bulan", price: 30000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "DisneyPlus",
//     name: "Disney+ Hotstar",
//     slug: "disney-plus",
//     description:
//       "Nikmati film Disney, Pixar, Marvel, Star Wars, dan National Geographic dengan kualitas tinggi. Cocok untuk keluarga dengan berbagai pilihan paket.",
//     image: "/images/logos/disney.png",
//     services: [
//       {
//         type: "Family Plan",
//         durations: [
//           { label: "1 Bulan", price: 35000 },
//           { label: "3 Bulan", price: 90000 },
//         ],
//       },
//       {
//         type: "Sharing",
//         durations: [
//           { label: "1 Bulan", price: 20000 },
//         ],
//       },
//       {
//         type: "Private",
//         durations: [
//           { label: "1 Bulan", price: 45000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "YouTubePremium",
//     name: "YouTube Premium",
//     slug: "youtube-premium",
//     description:
//       "Tonton YouTube tanpa iklan, putar di background, dan akses YouTube Music. Nyaman untuk penggunaan sehari-hari.",
//     image: "/images/logos/youtube.png",
//     services: [
//       {
//         type: "Sharing",
//         durations: [
//           { label: "1 Bulan", price: 15000 },
//         ],
//       },
//       {
//         type: "Private",
//         durations: [
//           { label: "1 Bulan", price: 45000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "Scribd",
//     name: "Scribd Premium",
//     slug: "scribd-premium",
//     description:
//       "Akses jutaan buku, audiobook, dokumen, dan sheet musik dalam satu aplikasi. Model baca sepuasnya tanpa batas.",
//     image: "/images/scribd.png",
//     services: [
//       {
//         type: "Sharing",
//         durations: [{ label: "1 Bulan", price: 14000 }],
//       },
//       {
//         type: "Private",
//         durations: [{ label: "1 Bulan", price: 28000 }],
//       },
//     ],
//   },

//   {
//     id: "CanvaPro",
//     name: "Canva Pro",
//     slug: "canva-pro",
//     description:
//       "Dapatkan akses penuh ke semua fitur premium Canva, termasuk template eksklusif, brand kit, dan background remover.",
//     image: "/images/logos/canva.png",
//     services: [
//       {
//         type: "Sharing",
//         durations: [
//           { label: "1 Bulan", price: 15000 },
//         ],
//       },
//       {
//         type: "Private",
//         durations: [
//           { label: "1 Bulan", price: 45000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "CapCutPro",
//     name: "CapCut Pro",
//     slug: "capcut-pro",
//     description:
//       "Edit video profesional tanpa watermark, filter premium, dan rendering cepat. Cocok untuk content creator.",
//     image: "/images/logos/capcut.png",
//     services: [
//       {
//         type: "Private",
//         durations: [
//           { label: "1 Bulan", price: 20000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "Microsoft365",
//     name: "Microsoft 365",
//     slug: "microsoft-365",
//     description:
//       "Akses aplikasi Office premium: Word, Excel, PowerPoint, OneDrive 1TB, dan lainnya dalam satu paket.",
//     image: "/images/logos/microsoft.png",
//     services: [
//       {
//         type: "Private",
//         durations: [
//           { label: "1 Bulan", price: 30000 },
//         ],
//       },
//     ],
//   },

//   {
//     id: "HBO",
//     name: "HBO GO",
//     slug: "hbo-go",
//     description:
//       "Tonton film dan serial eksklusif HBO, termasuk House of the Dragon, The Last of Us, dan lainnya.",
//     image: "/images/logos/hbo.png",
//     services: [
//       {
//         type: "Sharing",
//         durations: [{ label: "1 Bulan", price: 17000 }],
//       },
//       {
//         type: "Private",
//         durations: [{ label: "1 Bulan", price: 35000 }],
//       },
//     ],
//   },

//   {
//     id: "PrimeVideo",
//     name: "Amazon Prime Video",
//     slug: "prime-video",
//     description:
//       "Streaming film dan serial eksklusif dari Amazon Originals dengan kualitas tinggi.",
//     image: "/images/logos/prime.png",
//     services: [
//       {
//         type: "Private",
//         durations: [{ label: "1 Bulan", price: 30000 }],
//       },
//     ],
//   },

//   {
//     id: "IQIYI",
//     name: "iQIYI Premium",
//     slug: "iqiyi-premium",
//     description:
//       "Layanan streaming Asia dengan drama eksklusif, film, variety show, dan anime.",
//     image: "/images/logos/iqiyi.png",
//     services: [
//       {
//         type: "Private",
//         durations: [{ label: "1 Bulan", price: 20000 }],
//       },
//     ],
//   },

//   {
//     id: "Viu",
//     name: "Viu Premium",
//     slug: "viu-premium",
//     description:
//       "Streaming drama Korea, Asia, dan anime terbaru tanpa iklan.",
//     image: "/images/logos/viu.png",
//     services: [
//       {
//         type: "Private",
//         durations: [{ label: "1 Bulan", price: 15000 }],
//       },
//     ],
//   },
// ];

export const products: Product[] = [
  // ==============================
  // NETFLIX
  // ==============================
  {
    id: "netflix",
    name: "Netflix Premium",
    slug: "netflix-premium",
    description: "Netflix adalah layanan streaming yang menawarkan berbagai acara TV, film, anime, dokumenter pemenang penghargaan, dan lainnya di ribuan perangkat yang terhubung internet.",
    image: "/images/netflix.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 26000 },
          { label: "3 Month", price: 64000 } 
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 40000 },
          { label: "3 Month", price: 108000 } 
        ],
      },
    ],
  },

  // ==============================
  // Disney+ Hotstar
  // ==============================
  {
    id: "Disney+ Hoststar",
    name: "Disney+ Hoststar",
    slug: "Disney+-Hoststar",
    description: "Disney+ adalah rumah streaming untuk Disney, Pixar, Marvel, Star Wars, National Geographic, dan lainnya dengan konten orisinal eksklusif serta klasik yang tak lekang oleh waktu.",
    image: "/images/disney.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 33000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 83000 },
        ],
      },
    ],
  },

  // ==============================
  // VIDIO  PREMIUM
  // ==============================
  {
    id: "Vidio Platinum",
    name: "Vidio Platinum",
    slug: "vidio-premium",
    description: "Streaming TV, film, serial, & olahraga favoritmu. Tayangan eksklusif lokal & internasional. Temukan pengalaman menonton yang #LebihDariHiburan di Vidio.",
    image: "/images/vidio.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 23000 },
         
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 34000 },
          
        ],
      },
    ],
  },

  // ==============================
  // VIU
  // ==============================
  {
    id: "Viu",
    name: "Viu No Limit",
    slug: "viu-premium",
    description: "Nonton streaming drama, film, Viu Originals dan variety show Korea, Thailand, Indonesia, dan Asia terbaru lainnya dengan subtitle Indonesia dan kualitas HD.",
    image: "/images/viu.png",
    services: [
      {
        type: "Bulanan",
        durations: [
          { label: "1 Month", price: 16000 },
          { label: "3 Month", price: 18000 },
          { label: "6 Month", price: 23000 },
          { label: "1 Year", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // IQIYI VIP
  // ==============================
  {
    id: "Iqiyi Vip",
    name: "Iqiyi Vip",
    slug: "iqiyi-vip",
    description: "Tonton drama China, drama Korea, drama Thailand, variety show, film, dan anime terbaru secara gratis dengan berbagai pilihan subtitle dan dubbing langsung di iQIYI",
    image: "/images/iqiyi.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Month", price: 15000 },
          { label: "3 Month", price: 23000 },
          { label: "1 Year", price: 28000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Month", price: 33000 },
        ],
      },
    ],
  },

  // ==============================
  // WE TV VIP
  // ==============================
  {
    id: "We TV Vip",
    name: "We TV Vip",
    slug: "we-tv-vip",
    description: "WeTV merupakan aplikasi layanan streaming video yang menghadirkan beragam dari konten drama, film, anime, dan variety show terbaik dari berbagai negara di Asia",
    image: "/images/wetv.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 16000 },
          { label: "3 Bulan", price: 28000 },
          { label: "1 Tahun Via Google ", price: 43000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 38000 },
        ],
      },
    ],
  },

  // ==============================
  // HBO MAX ULTIMATE
  // ==============================
  {
    id: "HBO Max Ultimate",
    name: "HBO Max Ultimate",
    slug: "hbo-max-ultimate",
    description: "Stream serial yang paling dibicarakan dan film blockbuster yang menampilkan dunia HBO, DC Universe, Harry Potter, Discovery dan banyak lagi di HBO Max.",
    image: "/images/hbo.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 31000 },
        ],
      },
    ],
  },

  // ==============================
  // YOU TUBE PREMIUM
  // ==============================
  {
    id: "You Tube Premium",
    name: "YouTube + Music Premium",
    slug: "you-tube-premium",
    description: "Dengan YouTube Premium, nikmati akses tanpa iklan, unduhan, dan pemutaran latar di YouTube dan YouTube Music.",
    image: "/images/ytb.png",
    services: [
      {
        type: "Family Plan",
        durations: [
          { label: "1 Bulan", price: 13000 },
          { label: "2 Bulan", price: 16000 },
        ],
      },
      {
        type: "Individu Plan",
        durations: [
          { label: "1 Bulan", price: 20000 },
          { label: "3 Bulan", price: 38000 },
          { label: "6 Bulan", price: 53000 },
        ],
      },
    ],
  },

  // ==============================
  // AMOZON PRIME VIDEO
  // ==============================
  {
    id: "Amazone Prime Video",
    name: "Amazone Prime Video",
    slug: "amazone-prime-video",
    description: "Nikmati akses tak terbatas ke ribuan film, serial TV, dan tayangan eksklusif Amazon Originals dalam kualitas HD dan 4K. Streaming kapan saja dan di mana saja dengan akun premium Amazon Prime Video.",
    image: "/images/amazone.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 16000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // Vision+
  // ==============================
  {
    id: "Vision+ Sports",
    name: "Vision+ Sports",
    slug: "vision-plus-sports",
    description: "Tonton pertandingan olahraga dunia seperti MotoGP, Bundesliga, Formula E, dan lainnya secara langsung di Vision+ Sports. Nikmati streaming gratis dengan kualitas HD dan berbagai pilihan channel olahraga terbaik, langsung dari genggamanmu!",
    image: "/images/vision.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 23000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 32000 },
        ],
      },
    ],
  },

  // ==============================
  // RCTI+
  // ==============================
  {
    id: "RCTI+ Premium",
    name: "RCTI+ Premium",
    slug: "rcti-plus-premium",
    description: "Streaming acara TV favorit, sinetron, film, berita, hingga pertandingan olahraga langsung dari RCTI, MNCTV, GTV, dan iNews. Nikmati konten eksklusif, original series, dan siaran ulang kapan saja, di mana saja, gratis di RCTI+",
    image: "/images/rcti.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 31000 },
        ],
      },
    ],
  },

  // ==============================
  // LOKLOK
  // ==============================
  {
    id: "Loklok Premium",
    name: "Loklok Premium",
    slug: "loklok-premium",
    description: "Tonton film, drama Korea, China, anime, dan variety show terbaru secara gratis di Loklok. Nikmati tampilan antarmuka yang mudah digunakan, update episode cepat, serta pilihan subtitle dan dubbing dalam berbagai bahasa",
    image: "/images/loklok.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan Basic (No Tv)", price: 26000 },
          { label: "1 Bulan Standard (Tv + Reelshot)", price: 33000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan Basic (No Tv)", price: 51000 },
        ],
      },
    ],
  },

  // ==============================
  // Youku VIP
  // ==============================
  {
    id: "Youku Vip",
    name: "Youku Vip",
    slug: "youku-vip",
    description: "Tonton drama China, variety show, film, dan anime populer langsung di Youku. Nikmati tayangan eksklusif dan original dengan kualitas tinggi, update cepat, serta pilihan subtitle berbagai bahasa. Semua hiburan favoritmu tersedia gratis dan mudah diakses!",
    image: "/images/youku.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 17000 },
          { label: "3 Bulan", price: 28000 },
          { label: "1 Tahun", price: 38000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 48000 },
        ],
      },
    ],
  },

  // ==============================
  // Bstasion VIP
  // ==============================
  {
    id: "Bstasion Vip",
    name: "Bstasion Vip",
    slug: "bstasion-vip",
    description: "Nikmati tayangan anime populer, drama Korea, China, variety show, dan film terbaru secara legal di Bstation. Dapatkan pengalaman menonton berkualitas tinggi dengan subtitle berbagai bahasa, update episode cepat, dan komunitas penggemar yang aktif. Semua hiburan favoritmu tersedia gratis dan mudah diakses!",
    image: "/images/bstation.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 17000 },
          { label: "3 Bulan", price: 23000 },
          { label: "1 Tahun", price: 38000 },
        ],
      },
    ],
  },

  // ==============================
  // Spotify Premium
  // ==============================
  {
    id: "spotify",
    name: "Spotify Premium",
    slug: "spotify-premium",
    description: "Streaming jutaan lagu, album, dan podcast dari seluruh dunia secara gratis di Spotify. Temukan musik sesuai suasana hati, buat playlist sendiri, dan nikmati audio berkualitas tinggi kapan saja, di mana saja.",
    image: "/images/spotify.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 18000 },
        ],
      },
    ],
  },

  // ==============================
  // Apple Music Premium
  // ==============================
  {
    id: "Apple Music Premium",
    name: "Apple Music Premium",
    slug: "apple-music-premium",
    description: "Streaming lebih dari 100 juta lagu, album, dan playlist eksklusif dari artis dunia hanya di Apple Music. Nikmati audio berkualitas tinggi, bebas iklan, dan fitur lirik real-time. Dengarkan secara online atau offline, kapan saja dan di mana saja.",
    image: "/images/applemusic.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 15000 },
          { label: "2 Bulan", price: 22000 },
          { label: "3 Bulan", price: 29000 },
        ],
      },
    ],
  },

  // ==============================
  // Remini Pro
  // ==============================
  {
    id: "Remini Pro",
    name: "Remini Pro",
    slug: "remini-pro",
    description: "Remini adalah aplikasi pengedit foto berbasis AI yang mampu mengubah gambar lama, buram, atau rusak menjadi foto HD yang tajam dan jelas. Dengan satu sentuhan, kamu bisa memperbaiki detail wajah, warna, dan latar belakang, serta menghasilkan foto profesional dari selfie biasa. Cocok untuk menghidupkan kembali kenangan lama dan membuat konten visual berkualitas tinggi",
    image: "/images/remini.png",
    services: [
      {
        type: "Android",
        durations: [
          { label: "1 Bulan Sharing", price: 20000 },
        ],
      },
      {
        type: "Ios",
        durations: [
          { label: "1 Bulan Sharing", price: 20000 },
        ],
      },
    ],
  },

  // ==============================
  // Canva Pro
  // ==============================
  {
    id: "canva",
    name: "Canva Pro",
    slug: "canva-pro",
    description: "Canva Pro menawarkan fitur lengkap untuk membuat desain grafis, presentasi, poster, konten media sosial, dan lainnya secara cepat dan praktis. Nikmati akses ke jutaan template premium, elemen desain eksklusif, penghapusan latar belakang otomatis, serta penyimpanan cloud dan kolaborasi tim. Cocok untuk kreator, pelajar, bisnis, dan siapa pun yang ingin hasil desain maksimal tanpa ribet.",
    image: "/images/canva.png",
    services: [
      {
        type: "Canva Pro",
        durations: [
          { label: "1 Bulan", price: 14000 },
          { label: "3 Bulan", price: 17000 },
          { label: "6 Bulan", price: 23000 },
          { label: "1 Tahun", price: 26000 },
        ],
      },
    ],
  },

  // ==============================
  // Canva Education
  // ==============================
  {
    id: "Canva Education",
    name: "Canva Education",
    slug: "canva-education",
    description: "Canva Pro menawarkan fitur lengkap untuk membuat desain grafis, presentasi, poster, konten media sosial, dan lainnya secara cepat dan praktis. Nikmati akses ke jutaan template premium, elemen desain eksklusif, penghapusan latar belakang otomatis, serta penyimpanan cloud dan kolaborasi tim. Cocok untuk kreator, pelajar, bisnis, dan siapa pun yang ingin hasil desain maksimal tanpa ribet.",
    image: "/images/canva.png",
    services: [
      {
        type: "Canva Education",
        durations: [
          { label: "1 Bulan", price: 22000 },
        ],
      },
    ],
  },

  // ==============================
  // Lightroom Premium
  // ==============================
  {
    id: "Lightroom Premium",
    name: "Lightroom Premium",
    slug: "lightroom-premium",
    description: "Adobe Lightroom adalah aplikasi editing foto berbasis AI yang memungkinkan kamu menyempurnakan gambar dengan cepat dan presisi. Atur pencahayaan, warna, dan detail hanya dalam beberapa sentuhan. Cocok untuk fotografer, kreator konten, atau siapa pun yang ingin hasil foto berkualitas tinggi langsung dari smartphone atau desktop",
    image: "/images/ligrom.png",
    services: [
      {
        type: "Preset",
        durations: [
          { label: "500+ Preset", price: 15000 },
          { label: "1000+ Preset", price: 18000 },
        ],
      },
      {
        type: "Premium",
        durations: [
          { label: "Sharing 1 Tahun", price: 23000 },
          
        ],
      },
    ],
  },

  // ==============================
  // alight motion Premium
  // ==============================
  {
    id: "Alight Motion",
    name: "Alight Motion",
    slug: "alight-motion-premium",
    description: "Alight Motion adalah aplikasi editing video dan animasi yang powerful untuk smartphone. Buat efek visual, motion graphics, transisi, dan animasi berkualitas tinggi dengan fitur layer, keyframe, dan preset yang lengkap. Cocok untuk kreator konten, editor, dan siapa pun yang ingin hasil video sinematik langsung dari HP.",
    image: "/images/alig.png",
    services: [
      {
        type: "Tahunan",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
    ],
  },

  // ==============================
  // VSCO X
  // ==============================
  {
    id: "VSCO X",
    name: "VSCO X",
    slug: "vsco-x",
    description: "VSCO adalah aplikasi kamera dan editing foto yang populer di kalangan kreator visual. Tersedia berbagai filter estetik, alat editing profesional, dan fitur komunitas untuk berbagi karya. Cocok untuk kamu yang ingin hasil foto bergaya artistik dan konsisten, langsung dari smartphone.",
    image: "/images/vsco.png",
    services: [
      {
        type: "Tahunan",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
    ],
  },

  // ==============================
  // Picart Gold
  // ==============================
  {
    id: "Picart Gold",
    name: "Picart Gold",
    slug: "picart-gold",
    description: "Picsart Gold adalah versi premium dari aplikasi editing populer Picsart, yang menawarkan akses ke ribuan stiker, font, efek, dan template eksklusif. Nikmati fitur penghapus background otomatis, alat AI canggih, dan tanpa iklan. Cocok untuk kreator konten yang ingin hasil visual lebih profesional dan estetik langsung dari smartphone.",
    image: "/images/picart.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 15000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
    ],
  },

  // ==============================
  // unfold 
  // ==============================
  {
    id: "Unfold",
    name: "Unfold Premium",
    slug: "unfold-premium",
    description: "Unfold adalah aplikasi desain visual yang memudahkan kamu membuat story Instagram, TikTok, dan media sosial lainnya dengan template elegan dan minimalis. Tersedia ratusan layout, font premium, dan alat editing kreatif untuk hasil konten yang stylish dan konsisten. Cocok untuk kreator, brand, dan siapa pun yang ingin tampil menonjol di media sosial.",
    image: "/images/unfold.png",
    services: [
      {
        type: "Android",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
      {
        type: "Ios",
        durations: [
          { label: "1 Tahun", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // Wattpad Premium 
  // ==============================
  {
    id: "Wattpad",
    name: "Wattpad Premium",
    slug: "wattpad-premium",
    description: "Wattpad adalah platform sosial untuk membaca dan menulis cerita orisinal dari berbagai genre seperti romansa, fantasi, horor, hingga fan fiction. Bergabunglah dengan jutaan pembaca dan penulis di seluruh dunia, temukan kisah-kisah menarik, dan bagikan ceritamu sendiri. Semua bisa diakses gratis, langsung dari smartphone atau web",
    image: "/images/wattpad.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 16000 },
          { label: "6 Bulan", price: 26000 },
        ],
      },
      
    ],
  },

  // ==============================
  // Get Contact 
  // ==============================
  {
    id: "Get Contact",
    name: "Get Contact Premium",
    slug: "get-contact-premium",
    description: "Wattpad adalah platform sosial untuk membaca dan menulis cerita orisinal dari berbagai genre seperti romansa, fantasi, horor, hingga fan fiction. Bergabunglah dengan jutaan pembaca dan penulis di seluruh dunia, temukan kisah-kisah menarik, dan bagikan ceritamu sendiri. Semua bisa diakses gratis, langsung dari smartphone atau web",
    image: "/images/get.png",
    services: [
      {
        type: "Bulanan",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
      
    ],
  },

  // ==============================
  // Grammarly Premium
  // ==============================
  {
    id: "Grammarly",
    name: "Grammarly Premium",
    slug: "grammarly-premium",
    description: "Grammarly adalah asisten menulis berbasis AI yang membantu kamu memperbaiki tata bahasa, ejaan, tanda baca, dan gaya penulisan secara real-time. Cocok untuk email profesional, tugas kuliah, konten media sosial, atau dokumen penting lainnya. Nikmati fitur premium seperti pengecekan nada, saran kosakata, dan deteksi plagiarisme untuk hasil tulisan yang lebih jelas, efektif, dan meyakinkan.",
    image: "/images/grammarly.png",
    services: [
      {
        type: "Bulanan",
        durations: [
          { label: "1 Bulan", price: 20000 },
        ],
      },
      
    ],
  },

  // ==============================
  // Zoom Pro
  // ==============================
  {
    id: "Zoom Pro",
    name: "Zoom Pro",
    slug: "zoom-pro",
    description: "Zoom Pro adalah versi premium dari Zoom yang dirancang untuk kebutuhan profesional, bisnis, dan tim kecil. Nikmati durasi meeting hingga 30 jam, kapasitas hingga 100 peserta, serta fitur tambahan seperti AI Companion, penjadwalan otomatis, rekaman cloud, dan kolaborasi dokumen tanpa batas",
    image: "/images/zoom.png",
    services: [
      {
        type: "Harian",
        durations: [
          { label: "1 Hari 100 Participant", price: 16000 },
          { label: "7 Hari 100 Participant", price: 28000 },
          { label: "14 Hari 100 Participant", price: 33000 },
        ],
      },
      {
        type: "Bulanan",
        durations: [
          { label: "1 Bulan 100 Participant", price: 50000 },
        ],
      },
    ],
  },

  
  // ==============================
  // Inshot Premium
  // ==============================
  {
    id: "Inshot Pro",
    name: "Inshot Pro",
    slug: "inshot-pro",
    description: "InShot adalah aplikasi editing video dan foto all-in-one yang mudah digunakan langsung dari smartphone. Kamu bisa memotong, menggabungkan, menambahkan musik, teks, stiker, serta membuat efek transisi keren untuk konten media sosial. Selain itu, InShot juga mendukung pengaturan rasio layar, filter estetik, dan ekspor berkualitas tinggi. Cocok untuk kreator konten, vlogger, maupun pengguna sehari-hari yang ingin hasil visual lebih menarik dan profesional.",
    image: "/images/inshot.png",
    services: [
      {
        type: "Lifetime",
        durations: [
          { label: "Lifetimet", price: 28000 },
          
        ],
      },
    ],
  },

  // ==============================
  // Microsoft 365
  // ==============================
  {
    id: "Microsoft 365",
    name: "Microsoft 365",
    slug: "microsoft-365",
    description: "Microsoft 365 menghadirkan paket lengkap aplikasi produktivitas seperti Word, Excel, PowerPoint, dan Outlook yang terintegrasi dengan layanan cloud OneDrive serta kolaborasi real-time melalui Teams dan SharePoint. Dengan akses dokumen dari mana saja dan keamanan data tingkat tinggi, Microsoft 365 membantu individu, bisnis, maupun institusi pendidikan bekerja lebih efisien, aman, dan fleksibel.",
    image: "/images/mic.png",
    services: [
      {
        type: "Invite",
        durations: [
          { label: "1 Bulan", price: 14000 },
          
        ],
      },
      {
        type: "Admin + Invite 5 User",
        durations: [
          { label: "1 Bulan", price: 23000 },
          
        ],
      },
    ],
  },

  // ==============================
  // Mathway Premium
  // ==============================
  {
    id: "Mathway Premium",
    name: "Mathway Premium",
    slug: "mathway-premium",
    description: "Mathway adalah aplikasi kalkulator cerdas yang membantu menyelesaikan berbagai soal matematika mulai dari aljabar, trigonometri, kalkulus, hingga statistik. Cukup masukkan soal atau ambil foto persamaan, Mathway akan memberikan jawaban instan beserta langkah penyelesaiannya. Dengan akses mudah dari smartphone maupun web, Mathway cocok untuk pelajar, mahasiswa, maupun siapa saja yang ingin memahami matematika lebih cepat dan praktis.",
    image: "/images/math.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Tahun", price: 26000 },
          
        ],
      },
    ],
  },

  // ==============================
  // Capcut Pro
  // ==============================
  {
    id: "Capcut Pro",
    name: "Capcut Pro",
    slug: "capcut-pro",
    description: "CapCut adalah aplikasi editing video all-in-one yang memudahkan kamu membuat konten berkualitas tinggi langsung dari smartphone. Dengan fitur lengkap seperti pemotongan video, transisi, filter estetik, efek visual, teks animasi, hingga musik bebas hak cipta, CapCut cocok untuk kreator konten, vlogger, maupun pengguna media sosial. Dukungan AI editing, template siap pakai, dan ekspor berkualitas tinggi menjadikan CapCut pilihan utama untuk menghasilkan video kreatif dengan cepat dan praktis.",
    image: "/images/capcut.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "7 Hari", price: 15000 },
          { label: "1 Bulan", price: 25000 },
          
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 63000 },
          
        ],
      },
    ],
  },

  
  // ==============================
  // Claud AI Pro
  // ==============================
  {
    id: "Claude AI Pro",
    name: "Claude AI Pro",
    slug: "claude-ai-pro",
    description: "Claude AI adalah asisten AI generasi baru yang menonjol karena fokus pada keamanan, akurasi, dan kemampuan reasoning. Cocok untuk pelajar, profesional, maupun tim yang ingin berkolaborasi dengan dukungan AI yang lebih aman dan cerdas.",
    image: "/images/claude.png",
    services: [
      {
        type: "Private Full Garansi",
        durations: [
  
          { label: "1 Bulan", price: 88000 },
          
        ],
      },
      {
        type: "Private No Garansi",
        durations: [
          { label: "1 Bulan", price: 188000 },
          
        ],
      },
    ],
  },

   // ==============================
  // ChatGPT Pro
  // ==============================
  {
    id: "chatgpt",
    name: "ChatGPT Pro",
    slug: "chatgpt-pro",
    description: "ChatGPT adalah model kecerdasan buatan yang dikembangkan oleh OpenAI untuk membantu dalam percakapan, penulisan, pemecahan masalah, dan ide kreatif. Dengan kemampuan memahami bahasa alami, ChatGPT bisa digunakan untuk menjawab pertanyaan, membuat teks, memberikan penjelasan, hingga mendukung pekerjaan sehari-hari seperti menulis email, membuat konten, atau belajar materi baru.",
    image: "/images/gpt.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 33000 },
          
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 208000 },
          
        ],
      },
    ],
  },

  // ==============================
  // Meitu
  // ==============================
  {
    id: "Meitu",
    name: "Meitu Pro",
    slug: "meitu-pro",
    description: "Meitu adalah aplikasi editing foto populer dari Tiongkok yang dikenal dengan fitur beautification canggih. Dengan sekali sentuhan, kamu bisa mempercantik wajah, menghaluskan kulit, menambahkan makeup virtual, hingga membuat efek artistik. Selain itu, Meitu juga menyediakan filter estetik, kolase, dan alat editing profesional untuk hasil foto yang lebih kreatif.",
    image: "/images/meitu.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 28000 },
          
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 53000 },
          
        ],
      },
    ],
  },

  // ==============================
  // PERPLEXITY AI
  // ==============================
  {
    id: "Perplexity AI",
    name: "Perplexity AI Pro",
    slug: "perplexity-ai-pro",
    description: "Perplexity adalah platform pencarian berbasis AI yang menggabungkan kemampuan search engine dengan kecerdasan buatan untuk memberikan jawaban yang akurat, ringkas, dan disertai sumber terpercaya. Tidak hanya menampilkan daftar tautan, Perplexity menyajikan informasi dalam bentuk penjelasan langsung, lengkap dengan referensi, sehingga pengguna bisa memahami topik lebih cepat",
    image: "/images/PERPLEXITY.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 37000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // HUMATA AI
  // ==============================
  {
    id: "Humata AI",
    name: "Humata AI Pro",
    slug: "humata-ai-pro",
    description: "Humata AI adalah asisten dokumen berbasis kecerdasan buatan yang dirancang untuk membaca, menganalisis, dan menjawab pertanyaan dari file PDF secara instan.",
    image: "/images/HUMATA.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 28000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // SCITE AI
  // ==============================
  {
    id: "Scite AI",
    name: "Scite AI Pro",
    slug: "scite-ai-pro",
    description: "Scite AI adalah platform berbasis kecerdasan buatan yang membantu peneliti, mahasiswa, dan profesional menemukan serta memahami literatur ilmiah dengan lebih cepat. Tidak hanya menampilkan daftar artikel, Scite memberikan konteks bagaimana sebuah publikasi dikutip oleh penelitian lain—apakah mendukung, menentang, atau sekadar menyebutkan.",
    image: "/images/SCITE.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 28000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // GAMMA AI
  // ==============================
  {
    id: "Gamma AI",
    name: "Gamma AI Pro",
    slug: "gamma-ai-pro",
    description: "Gamma AI adalah platform berbasis kecerdasan buatan untuk membuat presentasi, dokumen, dan website dengan cepat dan menarik.",
    image: "/images/gama.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 28000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // QUILLBOT
  // ==============================
  {
    id: "Quillbot",
    name: "Quillbot Pro",
    slug: "quillbot-pro",
    description: "QuillBot adalah alat bantu menulis yang menggunakan kecerdasan buatan untuk parafrase, meringkas, dan memeriksa tata bahasa secara instan. Cocok untuk pelajar, penulis, maupun profesional yang ingin meningkatkan kualitas tulisan mereka.",
    image: "/images/quil.png",
    services: [
      {
        type: "Sharing",
        durations: [
  
          { label: "1 Bulan", price: 19000 },
          
        ],
      },
      {
        type: "Private",
        durations: [
  
          { label: "1 Bulan", price: 43000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // DEEPL PRO
  // ==============================
  {
    id: "Deepl Pro",
    name: "Deepl Pro",
    slug: "deepl-pro",
    description: "DeepL adalah platform penerjemahan berbasis kecerdasan buatan yang dikenal dengan kualitas terjemahan yang lebih alami dan kontekstual dibanding banyak layanan lain. Mendukung berbagai bahasa utama dunia, DeepL membantu pengguna menerjemahkan teks, dokumen, hingga percakapan secara instan.",
    image: "/images/deepl.png",
    services: [
      
      
      {
        type: "Private",
        durations: [
  
          { label: "1 Bulan", price: 20000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // GEMINI AI 
  // ==============================
  {
    id: "Gemini AI",
    name: "Gemini AI Pro",
    slug: "gemini-ai-pro",
    description: "DeepL adalah platform penerjemahan berbasis kecerdasan buatan yang dikenal dengan kualitas terjemahan yang lebih alami dan kontekstual dibanding banyak layanan lain. Mendukung berbagai bahasa utama dunia, DeepL membantu pengguna menerjemahkan teks, dokumen, hingga percakapan secara instan.",
    image: "/images/gemini.png",
    services: [
      
      
      {
        type: "Private",
        durations: [
  
          { label: "1 Bulan", price: 28000 },
          
        ],
      },
      
    ],
  },

  // ==============================
  // CAMSCANNER  
  // ==============================
  {
    id: "CAMSCANNER",
    name: "CamScanner Pro",
    slug: "camscanner-pro",
    description: "CamScanner adalah aplikasi mobile yang mengubah ponsel menjadi scanner portabel. Dengan sekali foto, pengguna bisa mengubah dokumen kertas, kwitansi, kartu nama, atau catatan menjadi file digital berkualitas tinggi.",
    image: "/images/cam.png",
    services: [
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 26000 },
        ],
      },
    ],
  },

  // ==============================
  // ILOVEPDF   
  // ==============================
  {
    id: "ILOVEPDF",
    name: "ILOVEPDF Premium",
    slug: "ilovepdf-premium",
    description: "iLovePDF adalah platform online yang menyediakan berbagai fitur untuk mengelola file PDF dengan mudah dan cepat. Pengguna bisa menggabungkan, memisahkan, mengompres, mengonversi ke Word/Excel/PowerPoint, menambahkan tanda tangan, hingga melindungi dokumen dengan password.",
    image: "/images/ILOVEPDF.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Tahun", price: 23000 },
        ],
      },
    ],
  },

  // ==============================
  // ILOVEPDF   
  // ==============================
  {
    id: "ILOVEPDF",
    name: "ILOVEPDF Premium",
    slug: "ilovepdf-premium",
    description: "iLovePDF adalah platform online yang menyediakan berbagai fitur untuk mengelola file PDF dengan mudah dan cepat. Pengguna bisa menggabungkan, memisahkan, mengompres, mengonversi ke Word/Excel/PowerPoint, menambahkan tanda tangan, hingga melindungi dokumen dengan password.",
    image: "/images/ILOVEPDF.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 14000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // Scribd   
  // ==============================
  {
    id: "Scribd",
    name: "Scribd Premium",
    slug: "scribd-premium",
    description: "Scribd adalah layanan berbasis langganan yang menyediakan akses ke jutaan buku, audiobook, majalah, dokumen, dan sheet musik dalam satu aplikasi. Dengan model “all-you-can-read”, pengguna bisa membaca atau mendengarkan konten favorit kapan saja, baik di web maupun aplikasi mobile.",
    image: "/images/scribd.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 14000 },
        ],
      },
      {
        type: "Private",
        durations: [
          { label: "1 Bulan", price: 28000 },
        ],
      },
    ],
  },

  // ==============================
  // BEAUTYPLUS    
  // ==============================
  {
    id: "BEAUTYPLUS ",
    name: "BeautyPlus Premium",
    slug: "beautyplus-premium",
    description: "BeautyPlus adalah aplikasi kamera dan editing foto yang dirancang khusus untuk mempercantik selfie. Dengan teknologi beautification, pengguna bisa menghaluskan kulit, memutihkan gigi, memperbesar mata, menambahkan makeup virtual, serta menggunakan filter estetik untuk hasil foto yang lebih menarik.",
    image: "/images/beauty.png",
    services: [
      {
        type: "Sharing",
        durations: [
          { label: "1 Bulan", price: 28000 },
        ],
      },
    ],
  },

  
];