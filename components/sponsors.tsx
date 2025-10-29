import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Sponsors() {
  const sponsors = [
    { name: "Sponsor 1", logo: "/ramazzoti.png" },
    { name: "Sponsor 2", logo: "/speedUnlimited.png" },
    { name: "Sponsor 3", logo: "/generic-sponsor-logo-3.png" },
    { name: "Sponsor 4", logo: "/sponsor-logo-4.jpg" },
    { name: "Sponsor 5", logo: "/sponsor-logo-5.png" },
    { name: "Sponsor 6", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 7", logo: "/generic-sponsor-logo-1.png" },
    { name: "Sponsor 8", logo: "/generic-sponsor-logo-2.png" },
    { name: "Sponsor 9", logo: "/generic-sponsor-logo-3.png" },
    { name: "Sponsor 10", logo: "/sponsor-logo-4.jpg" },
    { name: "Sponsor 11", logo: "/sponsor-logo-5.png" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },
    { name: "Sponsor 12", logo: "/sponsor-logo-6.jpg" },

  ]

  return (
    <section id="sponsors" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight px-4">
            NUESTROS <span className="text-primary">SPONSORS</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">Gracias a quienes hacen posible este evento</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 flex items-center justify-center hover:shadow-lg transition-shadow bg-background"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={160}
                height={80}
                className="w-full h-[150px] object-contain grayscale hover:grayscale-0 transition-all"
              />
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 border-2 border-primary/20">
            <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3">¿QUERÉS SER PARTE?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-2xl mx-auto">
              Sumate como sponsor de la Fiesta Australiana y apoyá la tradición del rugby en Mercedes
            </p>
            <a
              href="mailto:sponsors@fiestaustraliana.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-base sm:text-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              sponsors@fiestaustraliana.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}