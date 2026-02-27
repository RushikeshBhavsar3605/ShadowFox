import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const treatments = [
  "Teeth Cleaning",
  "Tooth Filling",
  "Tooth Extraction",
  "Dental Implants",
  "Root Canal",
  "Orthodontic Braces",
  "Clear Aligners",
  "Veneers",
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">
            Sakthi Dental Clinic
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Specialized dental care for women, children & families. Your smile
            is our priority.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Treatments", path: "/treatments" },
              { label: "FAQs", path: "/faqs" },
              { label: "Contact", path: "/contact" },
              { label: "Privacy Policy", path: "/privacy" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
            Treatments
          </h4>
          <div className="flex flex-col gap-2">
            {treatments.map((t) => (
              <span key={t} className="text-sm opacity-70">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
            Contact Info
          </h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-70" />
              <span className="text-sm opacity-80">
                B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 shrink-0 opacity-70" />
              <a
                href="mailto:info@sakthidentalclinic.in"
                className="text-sm opacity-80 hover:opacity-100"
              >
                info@sakthidentalclinic.in
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 shrink-0 opacity-70" />
              <a
                href="tel:+919862890897"
                className="text-sm opacity-80 hover:opacity-100"
              >
                +91 9862890897
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 shrink-0 opacity-70" />
              <span className="text-sm opacity-80 font-medium">
                Sun–Sat: 9 AM – 7 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} Sakthi Dental Clinic. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
