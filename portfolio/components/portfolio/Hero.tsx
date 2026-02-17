import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export function Hero() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rushikesh-bhavsar-swe/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/RushikeshBhavsar3605",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/rushikesh-bhavsar/",
      icon: <LeetCodeIcon className="w-5 h-5" />,
      label: "LeetCode",
    },
    {
      href: "mailto:rvbhavsar36@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ];

  return (
    <section className="min-h-[85vh] flex flex-col justify-center section-padding">
      <div className="container-tight">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8 mb-8">
          {/* Left: Content */}
          <div className="flex-1">
            {/* Status Badge */}
            <div
              className="mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Open to Backend / Full Stack roles
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-5 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Rushikesh Bhavsar
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-3 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Backend / Distributed Systems
            </p>

            {/* One-liner */}
            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Backend engineer focused on distributed systems, microservices
              architecture, and production-grade infrastructure with a focus on
              scalability, reliability, and measurable performance.
            </p>
          </div>

          {/* Right: Profile Photo */}
          <div
            className="shrink-0 animate-fade-in self-center md:self-start"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border bg-secondary shadow-lg">
              <img
                src="/profile-avatar.png"
                alt="Rushikesh Bhavsar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center gap-2 mb-8 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-md"
          >
            View Work
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-border animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <div>
            <p className="text-2xl font-semibold text-foreground">Top 4.86%</p>
            <p className="text-sm text-muted-foreground">LeetCode Contests</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">1881</p>
            <p className="text-sm text-muted-foreground">LeetCode Rating</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">4</p>
            <p className="text-sm text-muted-foreground">Production Projects</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground">Go, TS</p>
            <p className="text-sm text-muted-foreground">Primary Languages</p>
          </div>
        </div>
      </div>
    </section>
  );
}
