import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-black">AUSTRALIANA</h3>
            <p className="text-white/80 text-sm">
              Más de 10 años uniendo deporte, amistad y diversión en Mercedes, Buenos Aires.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-base sm:text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#info" className="hover:text-primary transition-colors">
                  Información del Evento
                </a>
              </li>
              <li>
                <a href="#registro" className="hover:text-primary transition-colors">
                  Registro
                </a>
              </li>
              <li>
                <a href="mailto:info@australiana.com" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-base sm:text-lg">Seguinos</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-2.5 sm:p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-2.5 sm:p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@australiana.com"
                className="bg-white/10 hover:bg-primary p-2.5 sm:p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>© 2025 Australiana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
