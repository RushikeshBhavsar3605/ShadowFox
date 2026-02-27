import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can medication completely relieve tooth pain?",
    a: "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.",
  },
  {
    q: "Does teeth scaling cause enamel damage, sensitivity, or gaps?",
    a: "No. Scaling safely removes plaque and tartar. It doesn't damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal.",
  },
  {
    q: "Can fluorosis stains be removed through scaling?",
    a: "Scaling can remove surface stains but not fluorosis, which is an internal stain. Fluorosis may require treatments like bleaching, veneers, or crowns.",
  },
  {
    q: "Can painful teeth be treated with fillings?",
    a: "Not always. If the cavity has reached the pulp, root canal treatment or extraction might be necessary. Fillings are effective only for outer layer damage.",
  },
  {
    q: "Is a cap or crown necessary after root canal treatment?",
    a: "Yes. A crown is recommended after RCT to protect the treated tooth, prevent fractures, and add durability, especially during chewing.",
  },
  {
    q: "Can milk teeth need root canal treatment?",
    a: "Yes. If a milk tooth has a deep cavity and is likely to remain for some time, an RCT can preserve it and prevent infection or early loss.",
  },
  {
    q: "How can I maintain good oral hygiene?",
    a: "Brush twice daily, rinse after meals, floss regularly, and schedule routine check-ups with your dentist.",
  },
  {
    q: "What is the best age to get braces?",
    a: "Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. Some cases may benefit from earlier intervention.",
  },
  {
    q: "Do all wisdom teeth need to be removed?",
    a: "No. Only if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.",
  },
  {
    q: "Is it important to replace missing teeth after extraction?",
    a: "Yes. Replacing extracted teeth maintains proper bite alignment and prevents adjacent teeth from shifting.",
  },
  {
    q: "What are the benefits of dental implants?",
    a: "Dental implants restore appearance and functionality of missing teeth, providing a stable, natural-looking solution.",
  },
  {
    q: "Which toothbrush and toothpaste should I use?",
    a: "Use a soft or medium-bristled toothbrush with a small head and a non-abrasive fluoride toothpaste. Replace every three months.",
  },
  {
    q: "What causes tooth sensitivity?",
    a: "Sensitivity can result from enamel wear, tooth decay, exposed roots, or hairline cracks in the teeth.",
  },
  {
    q: "How often should I see a dentist?",
    a: "Every six months is recommended for routine check-ups, professional cleaning, and preventive care.",
  },
];

const FAQs = () => (
  <div>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="opacity-80 max-w-xl mx-auto">
          Find answers to common dental care questions.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default FAQs;
