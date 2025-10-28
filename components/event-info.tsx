import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Music, Trophy } from "lucide-react"

export function EventInfo() {
  return (
    <section id="info" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight px-4">
            INFO DEL <span className="text-primary">EVENTO</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Un día completo de deporte, diversión y fiesta que no te podés perder
          </p>
        </div>

        {/* Key info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          <Card className="p-5 sm:p-6 border-2 hover:border-primary transition-colors">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1">Fecha</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Sábado 15 de Marzo, 2025</p>
              </div>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 border-2 hover:border-secondary transition-colors">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-secondary/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1">Horarios</h3>
                <p className="text-sm sm:text-base text-muted-foreground">14:00 - 02:00 hs</p>
              </div>
            </div>
          </Card>

          <Card className="p-5 sm:p-6 border-2 hover:border-primary transition-colors sm:col-span-2 lg:col-span-1">
            <a
              href="https://maps.app.goo.gl/tYbEfrdMnekLbSqE8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 sm:gap-4 group"
            >
              <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                  Ubicación
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground group-hover:underline">
                  Club Atlético Mercedes, Mercedes BA
                </p>
              </div>
            </a>
          </Card>
        </div>

        {/* Event sections */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Afternoon event */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <div className="bg-secondary p-5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">TARDE DEPORTIVA</h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-medium">14:00 - 20:00 hs</p>
            </div>
            <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">Torneos Deportivos</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Partidos de rugby y fútbol femenino con clubes de toda la zona
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">Actividades</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Food trucks, juegos, música en vivo y mucho más
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">Ambiente Familiar</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Espacio abierto para toda la familia y amigos
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Night event */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <div className="bg-primary p-5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <Music className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">FIESTA NOCTURNA</h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-medium">21:00 - 02:00 hs</p>
            </div>
            <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">DJ en Vivo</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Los mejores DJs de la zona con música para bailar toda la noche
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">Barra Premium</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Amplia variedad de bebidas y tragos especiales
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">Pista de Baile</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Espacio amplio con iluminación y sonido profesional
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional info */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
          <Card className="inline-block p-4 sm:p-6 bg-muted max-w-3xl">
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Entrada con preventa anticipada. Cupos limitados.
              Mayores de 18 años con DNI.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
