import doctorImage from "@/assets/doctor-anupriya.jpg";

const doctors = [
  { name: "Dr. Anupriya", role: "Founder" },
  { name: "Dr. Ananya Iyer", role: "Prosthodontist" },
  { name: "Dr. Meera Subramanian", role: "Endodontist" },
  { name: "Dr. Arvind Kumar", role: "Dental Surgeon" },
  { name: "Dr. Sneha N", role: "Orthodontist" },
  { name: "Dr. Srinivas Rohit R.", role: "Implantologist" },
  { name: "Dr. Balu", role: "Laser Surgeon" },
  { name: "Dr. Vikram Raj Kishore", role: "Aligners Partner" },
  { name: "Dr. Ajay Kumar", role: "Oral & Maxillofacial Surgeon" },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          About Us
        </h1>
        <p className="opacity-80 max-w-xl mx-auto">
          Get to know the team behind your smile.
        </p>
      </div>
    </section>

    {/* Dr. Anupriya */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={doctorImage}
              alt="Dr. Anupriya"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">
              Your Trusted Partner in Dental Care
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Get to Know Dr. Anupriya
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bringing over 20 years of expertise, Dr. Anupriya stands as a
                leading figure in modern dentistry at Hosur. She began her
                professional journey after graduating in 2000.
              </p>
              <p>
                In 2004, Dr. Anupriya established Sakthi Dental Clinic with a
                clear vision to make high-quality dental care accessible to all.
                Her dedication extends beyond private practice, reflected in her
                service with the Primary Health Center at Chandara Hospital.
              </p>
              <p>
                Whether you're looking for preventive care, cosmetic
                enhancements, or restorative solutions, Dr. Anupriya and her
                team are committed to delivering excellence. Because here, your
                smile isn't just treated — it's celebrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
          Our Vision & Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-serif font-semibold text-xl mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To redefine oral healthcare by delivering personalized,
              compassionate, and advanced dental services. We are committed to
              creating a welcoming environment where patients feel comfortable
              and confident in taking charge of their dental health.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-serif font-semibold text-xl mb-4 text-secondary">
              Our Vision
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To be a leading force in modern dentistry, known for setting new
              standards in patient care, innovation, and community engagement.
              We aspire to deliver exceptional dental outcomes and contribute
              positively to the community.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
          Our Team of Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <div
              key={d.name}
              className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-primary">
                  {d.name.charAt(4)}
                </span>
              </div>
              <h3 className="font-serif font-semibold">{d.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
