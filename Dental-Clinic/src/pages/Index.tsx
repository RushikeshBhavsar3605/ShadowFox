import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Users,
  Cpu,
  Heart,
  Car,
  Accessibility,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const treatments = [
  {
    name: "Tooth Extraction",
    desc: "Safe and painless removal of impacted or decayed teeth.",
  },
  {
    name: "Orthodontic Braces",
    desc: "Metal, ceramic, or lingual braces for perfect alignment.",
  },
  {
    name: "Teeth Cleaning",
    desc: "Preventive care to remove plaque and protect gums.",
  },
  {
    name: "Tooth Filling",
    desc: "Composite fillings for cavity treatment and restoration.",
  },
  {
    name: "Dental Implants",
    desc: "Reliable titanium implants for a natural-looking smile.",
  },
  {
    name: "Teeth Whitening",
    desc: "Professional bleaching for a brighter, radiant smile.",
  },
];

const testimonials = [
  {
    text: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.",
    author: "Manisha M",
    rating: 5,
  },
  {
    text: "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional.",
    author: "Mr. Arun Kumar",
    rating: 5,
  },
  {
    text: "Their attention to detail is outstanding. My daughter needed braces and the entire process has been so smooth.",
    author: "Mrs. Revathi S.",
    rating: 5,
  },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "All-in-One Care",
    desc: "From general dentistry to specialized treatments, everything under one roof.",
  },
  {
    icon: Users,
    title: "Experienced Doctors",
    desc: "Professionally trained dentists committed to personalized patient care.",
  },
  {
    icon: Heart,
    title: "Patient-Centric",
    desc: "We prioritize comfort, safety, and transparency in every treatment.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Advanced tools and equipment ensure precision and safety.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern dental clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Sakthi Dental Clinic, Hosur
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
              Specialized Dental Care for Women, Children & Families
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Experience compassionate, expert-led dental services tailored to
              your needs — all in a modern and welcoming environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8">
                  Fix an Appointment
                </Button>
              </Link>
              <Link to="/treatments">
                <Button
                  size="lg"
                  className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Our Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium text-sm md:text-base">
            🤝 You are always in safe hands. We are ready to help, anytime.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose Sakthi Dental Clinic?
            </h2>
            <p className="text-muted-foreground">
              A trusted name in Hosur's healthcare community since 2004.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Core Treatments
            </h2>
            <p className="text-muted-foreground">
              Explore our comprehensive dental services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/treatments">
              <Button variant="outline" className="gap-2">
                View Full List of Treatments <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <p className="text-sm font-semibold text-primary">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
            Clinic Facilities
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Car, label: "Hassle-free Parking" },
              { icon: Accessibility, label: "Wheelchair Access" },
              { icon: Clock, label: "Open Daily 9 AM – 9 PM" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-card rounded-lg px-6 py-4 border border-border"
              >
                <f.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Smile with Confidence?
          </h2>
          <p className="opacity-80 mb-8 max-w-lg mx-auto">
            Book your appointment today and experience world-class dental care.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Fix an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
