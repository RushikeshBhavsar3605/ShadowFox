const treatmentsList = [
  {
    name: "Teeth Cleaning & Scaling",
    desc: "Advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Scaling removes plaque and tartar buildup to restore gum health.",
  },
  {
    name: "Tooth Filling",
    desc: "We specialize in restoring smiles through expert tooth filling services using high-quality materials and the latest techniques to repair and protect your teeth.",
  },
  {
    name: "Tooth Extraction",
    desc: "When a tooth is beyond repair, we ensure extractions are handled with care and comfort using gentle techniques to minimize discomfort.",
  },
  {
    name: "Artificial Complete Denture",
    desc: "High-quality complete dentures crafted with precision using durable materials, providing a natural look and comfortable fit.",
  },
  {
    name: "Dental Implants",
    desc: "Modern and reliable solution using biocompatible titanium materials, securely placed into the jawbone for a stable foundation.",
  },
  {
    name: "Laser Dentistry",
    desc: "Advanced laser technology for precise, minimally invasive treatments with faster healing, reduced discomfort, and enhanced accuracy.",
  },
  {
    name: "Root Canal Therapy",
    desc: "Careful removal of infected tissue, thorough cleaning, and sealing to relieve pain, eliminate infection, and preserve natural tooth structure.",
  },
  {
    name: "Wisdom Tooth Extraction",
    desc: "Gentle and effective wisdom tooth removal using modern techniques and anesthesia options for a smooth, pain-free experience.",
  },
  {
    name: "Fixed Partial Denture (Bridge)",
    desc: "Expertly crafted dental bridges that restore your smile's appearance while improving chewing function and maintaining oral stability.",
  },
  {
    name: "Teeth Whitening (Bleaching)",
    desc: "Professional whitening services treating both external and internal stains to restore your smile's natural radiance.",
  },
  {
    name: "Veneers",
    desc: "Thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration for a flawless smile.",
  },
  {
    name: "Pediatric Dentistry",
    desc: "Gentle and comprehensive dental care for children in a welcoming environment, building healthy dental habits for a lifetime.",
  },
  {
    name: "Flap Surgery",
    desc: "Skilled procedure lifting gum tissue to remove deep-seated plaque and bacteria, then repositioning for optimal healing.",
  },
  {
    name: "Orthodontic Braces",
    desc: "Metal, ceramic, or lingual braces to achieve improved alignment, better bite function, and a confident smile.",
  },
  {
    name: "Clear Aligners",
    desc: "Transparent, removable trays that gradually shift your teeth into perfect alignment with comfort and flexibility.",
  },
];

const Treatments = () => (
  <div>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Our Treatments
        </h1>
        <p className="opacity-80 max-w-xl mx-auto">
          Comprehensive dental solutions under one roof.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatmentsList.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <span className="text-primary font-serif font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                {t.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Treatments;
