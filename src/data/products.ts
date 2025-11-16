export interface PricingTier {
  duration: string;
  price: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  logo: string;
  category: string;
  pricing: PricingTier[];
  features: string[];
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: "netflix",
    name: "Netflix Premium",
    shortDescription: "Stream unlimited movies and TV shows in 4K quality",
    description: "Access Netflix's entire library with Premium subscription. Watch on 4 screens simultaneously, download content, and enjoy Ultra HD quality.",
    logo: "🎬",
    category: "Entertainment",
    pricing: [
      {
        duration: "Weekly",
        price: "$2.99",
        features: ["4K Ultra HD", "4 Screens", "Download Content", "No Ads"],
      },
      {
        duration: "Monthly",
        price: "$8.99",
        features: ["4K Ultra HD", "4 Screens", "Download Content", "No Ads", "Priority Support"],
      },
      {
        duration: "Yearly",
        price: "$79.99",
        features: ["4K Ultra HD", "4 Screens", "Download Content", "No Ads", "Priority Support", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
    popular: true,
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    shortDescription: "Listen to millions of songs ad-free",
    description: "Enjoy unlimited music streaming with Spotify Premium. Download songs, skip unlimited, and listen offline.",
    logo: "🎵",
    category: "Music",
    pricing: [
      {
        duration: "Weekly",
        price: "$1.99",
        features: ["Ad-Free Music", "Unlimited Skips", "Offline Download", "High Quality Audio"],
      },
      {
        duration: "Monthly",
        price: "$5.99",
        features: ["Ad-Free Music", "Unlimited Skips", "Offline Download", "High Quality Audio", "Priority Support"],
      },
      {
        duration: "Yearly",
        price: "$49.99",
        features: ["Ad-Free Music", "Unlimited Skips", "Offline Download", "High Quality Audio", "Priority Support", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
    popular: true,
  },
  {
    id: "canva",
    name: "Canva Pro",
    shortDescription: "Professional design tools for everyone",
    description: "Create stunning designs with Canva Pro. Access premium templates, remove backgrounds, and collaborate with your team.",
    logo: "🎨",
    category: "Design",
    pricing: [
      {
        duration: "Weekly",
        price: "$2.49",
        features: ["Premium Templates", "Background Remover", "Brand Kit", "Unlimited Storage"],
      },
      {
        duration: "Monthly",
        price: "$7.99",
        features: ["Premium Templates", "Background Remover", "Brand Kit", "Unlimited Storage", "Team Collaboration"],
      },
      {
        duration: "Yearly",
        price: "$69.99",
        features: ["Premium Templates", "Background Remover", "Brand Kit", "Unlimited Storage", "Team Collaboration", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    shortDescription: "Advanced AI assistance at your fingertips",
    description: "Get unlimited access to GPT-4, priority access during peak times, and faster response speeds.",
    logo: "🤖",
    category: "AI Tools",
    pricing: [
      {
        duration: "Weekly",
        price: "$3.99",
        features: ["GPT-4 Access", "Priority Access", "Faster Responses", "No Rate Limits"],
      },
      {
        duration: "Monthly",
        price: "$12.99",
        features: ["GPT-4 Access", "Priority Access", "Faster Responses", "No Rate Limits", "Advanced Features"],
      },
      {
        duration: "Yearly",
        price: "$119.99",
        features: ["GPT-4 Access", "Priority Access", "Faster Responses", "No Rate Limits", "Advanced Features", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
    popular: true,
  },
  {
    id: "gemini",
    name: "Google Gemini Advanced",
    shortDescription: "Google's most capable AI model",
    description: "Access Gemini Advanced for complex tasks, longer conversations, and priority access to new features.",
    logo: "✨",
    category: "AI Tools",
    pricing: [
      {
        duration: "Weekly",
        price: "$3.49",
        features: ["Gemini Ultra", "2M Token Context", "Priority Access", "Advanced Features"],
      },
      {
        duration: "Monthly",
        price: "$11.99",
        features: ["Gemini Ultra", "2M Token Context", "Priority Access", "Advanced Features", "Early Access"],
      },
      {
        duration: "Yearly",
        price: "$109.99",
        features: ["Gemini Ultra", "2M Token Context", "Priority Access", "Advanced Features", "Early Access", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
  },
  {
    id: "disney",
    name: "Disney+",
    shortDescription: "Stream Disney, Marvel, Star Wars & more",
    description: "Watch exclusive originals, movies, and series from Disney, Pixar, Marvel, Star Wars, and National Geographic.",
    logo: "🏰",
    category: "Entertainment",
    pricing: [
      {
        duration: "Weekly",
        price: "$1.99",
        features: ["4K Ultra HD", "Multiple Profiles", "Download Content", "No Ads"],
      },
      {
        duration: "Monthly",
        price: "$5.99",
        features: ["4K Ultra HD", "Multiple Profiles", "Download Content", "No Ads", "GroupWatch"],
      },
      {
        duration: "Yearly",
        price: "$49.99",
        features: ["4K Ultra HD", "Multiple Profiles", "Download Content", "No Ads", "GroupWatch", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
  },
  {
    id: "prime",
    name: "Amazon Prime Video",
    shortDescription: "Unlimited streaming of movies and TV shows",
    description: "Watch thousands of movies and TV shows, including Amazon Originals and exclusive content.",
    logo: "📺",
    category: "Entertainment",
    pricing: [
      {
        duration: "Weekly",
        price: "$1.49",
        features: ["HD Streaming", "3 Screens", "Download Content", "Amazon Originals"],
      },
      {
        duration: "Monthly",
        price: "$4.99",
        features: ["HD Streaming", "3 Screens", "Download Content", "Amazon Originals", "X-Ray Features"],
      },
      {
        duration: "Yearly",
        price: "$39.99",
        features: ["HD Streaming", "3 Screens", "Download Content", "Amazon Originals", "X-Ray Features", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
  },
  {
    id: "grammarly",
    name: "Grammarly Premium",
    shortDescription: "AI-powered writing assistant",
    description: "Write better with advanced grammar checking, tone detection, and plagiarism detection.",
    logo: "📝",
    category: "Productivity",
    pricing: [
      {
        duration: "Weekly",
        price: "$2.49",
        features: ["Advanced Grammar", "Tone Detector", "Plagiarism Check", "Word Choice"],
      },
      {
        duration: "Monthly",
        price: "$7.99",
        features: ["Advanced Grammar", "Tone Detector", "Plagiarism Check", "Word Choice", "Style Guide"],
      },
      {
        duration: "Yearly",
        price: "$69.99",
        features: ["Advanced Grammar", "Tone Detector", "Plagiarism Check", "Word Choice", "Style Guide", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
  },
  {
    id: "microsoft365",
    name: "Microsoft 365",
    shortDescription: "Complete productivity suite",
    description: "Access Word, Excel, PowerPoint, Outlook, and 1TB OneDrive storage with Microsoft 365.",
    logo: "💼",
    category: "Productivity",
    pricing: [
      {
        duration: "Weekly",
        price: "$2.99",
        features: ["All Office Apps", "1TB OneDrive", "Premium Features", "Mobile Apps"],
      },
      {
        duration: "Monthly",
        price: "$9.99",
        features: ["All Office Apps", "1TB OneDrive", "Premium Features", "Mobile Apps", "Advanced Security"],
      },
      {
        duration: "Yearly",
        price: "$89.99",
        features: ["All Office Apps", "1TB OneDrive", "Premium Features", "Mobile Apps", "Advanced Security", "2 Months Free"],
      },
    ],
    features: ["Full Account Access", "Instant Delivery", "Lifetime Warranty", "24/7 Support"],
  },
];
