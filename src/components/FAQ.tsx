import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this service safe and legal?",
    answer: "Yes, absolutely! We provide legitimate subscription accounts through authorized reseller programs. All accounts are verified and safe to use. Your privacy and security are our top priorities, and we never share your personal information.",
  },
  {
    question: "Do I get a warranty on my purchase?",
    answer: "Yes! We offer a 100% replacement warranty on all our products. If your account stops working for any reason, we will replace it immediately at no extra cost. We stand behind the quality of our service.",
  },
  {
    question: "How fast will I receive my account?",
    answer: "We pride ourselves on instant delivery! Most accounts are delivered within 5-15 minutes after payment confirmation. In rare cases, it may take up to 1 hour, but we'll keep you updated throughout the process via WhatsApp.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfer, e-wallets (GoPay, OVO, Dana), and international payments via PayPal. All payment options will be provided during the WhatsApp checkout process.",
  },
  {
    question: "Can I share the account with others?",
    answer: "This depends on the specific subscription plan you purchase. Some accounts support multiple users (like Netflix Premium with 4 screens), while others are for single-user access. Check the product details or contact us for clarification.",
  },
  {
    question: "What happens if I forget my account details?",
    answer: "No worries! Contact us anytime via WhatsApp, and we'll resend your account credentials immediately. We keep records of all purchases to ensure you never lose access to your accounts.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a replacement guarantee rather than refunds. If you experience any issues with your account, we'll replace it immediately. However, if the service doesn't meet your expectations within the first 24 hours, we can discuss refund options on a case-by-case basis.",
  },
  {
    question: "How do I renew my subscription?",
    answer: "Simply contact us on WhatsApp before your subscription expires! We'll send you renewal options and pricing. Many customers set up automatic reminders to ensure uninterrupted service.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our service
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
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/6285795140765"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Contact us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
