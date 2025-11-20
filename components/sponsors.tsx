import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"


export function Sponsors() {
  const prioritySponsors = [
    { name: "Sponsor Prioritario 1", logo: "/imperial.svg" },
    { name: "Sponsor Prioritario 1", logo: "/fernetbranca.svg" },
  ]

  const generalSponsors = [
    { name: "Sponsor 6", logo: "/ramazzoti.png" },
    { name: "Sponsor 3", logo: "/carpano.png" },
    { name: "Sponsor 2", logo: "/energiuancho.png" },
    { name: "Sponsor 8", logo: "/ñuke.png" },
    { name: "Sponsor 4", logo: "/blu.png" },
    { name: "Sponsor 5", logo: "/sernova.png" },
    { name: "Sponsor 9", logo: "/deseado.png" },
    { name: "Sponsor 9", logo: "/BOTTA.png" },
    { name: "Sponsor 9", logo: "/speedancho2.png" },
    { name: "Sponsor 9", logo: "/QUIMATE.png" },
    { name: "Sponsor 9", logo: "/outgrow.png" },
    { name: "Sponsor 9", logo: "/bastard.png" },
    { name: "Sponsor 9", logo: "/MERSAGRO.png" },
    { name: "Sponsor 9", logo: "/MARIODELUCA.png" },
    { name: "Sponsor 9", logo: "/hielo.svg" },
    { name: "Sponsor 9", logo: "/solohuevo.png" },
    { name: "Sponsor 9", logo: "/vitagraf.png" },
  ]

  return (
    <section id="sponsors" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight px-4">
            NUESTROS <span className="text-primary">SPONSORS</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">Gracias a quienes hacen posible este evento</p>
        </div>

        <div className="mb-10 sm:mb-12">
          <div className="max-w-6xl mx-auto px-4">

          {/* <h3 className="text-lg sm:text-xl font-bold text-center text-foreground/80 mb-6">SPONSORS PRIORITARIOS</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {prioritySponsors.map((sponsor, index) => (
              <Card
              key={index}
              className="aspect-[16/9] p-4 sm:p-6 lg:p-8 flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-full">

                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    fill
                    // width={240}
                    // height={120}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    priority={index < 3}
                    className="object-contain "
                    />
                  </div>
              </Card>
            ))}
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          {/* <h3 className="text-lg sm:text-xl font-bold text-center text-foreground/80 mb-6">SPONSORS GENERALES</h3> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {generalSponsors.map((sponsor, index) => (
                <Card
                key={index}
                className="aspect-[5/3] p-3 sm:p-4 lg:p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-full">
                    
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      // width={160}
                      // height={80}
                      className="object-contain"
                      sizes=" (min-width:1024px) 20vw,
                      (min-width:768px) 25vw,
                      (min-width:640px) 33vw,
                      50vw"
                      />
                    </div>
                </Card>
              ))}
          </div>
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
              infoaustraliana@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
