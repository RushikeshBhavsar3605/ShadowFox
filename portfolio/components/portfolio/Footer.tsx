export function Footer() {
  return (
    <footer className="py-8 md:py-10 border-t border-border">
      <div className="container-tight">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Rushikesh Bhavsar. All rights reserved.
          </p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
