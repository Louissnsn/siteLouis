export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Louis Sanson</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Développeur web passionné par les technologies du web et le
              design.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#work"
                  className="hover-underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover-underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover-underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/LouisSnsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/louis-sanson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Louis Sanson. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Fait avec amour à Villeurbanne</p>
        </div>
      </div>
    </footer>
  );
}
