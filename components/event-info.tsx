import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Music, Trophy } from "lucide-react"

export function EventInfo() {
  return (
    <section id="info" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
            INFO DEL <span className="text-primary">EVENTO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un día completo de deporte, diversión y fiesta que no te podés perder
          </p>
        </div>

        {/* Key info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 border-2 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Fecha</h3>
                <p className="text-muted-foreground">Sábado 15 de Marzo, 2025</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-secondary transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Horarios</h3>
                <p className="text-muted-foreground">14:00 - 02:00 hs</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                <p className="text-muted-foreground">Club Mercedes, Mercedes BA</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Event sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Afternoon event */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <div className="bg-secondary p-6">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-black text-white">TARDE DEPORTIVA</h3>
              </div>
              <p className="text-white/90 font-medium">14:00 - 20:00 hs</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Torneos Deportivos</h4>
                  <p className="text-muted-foreground text-sm">
                    Partidos de rugby y fútbol femenino con clubes de toda la zona
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Actividades</h4>
                  <p className="text-muted-foreground text-sm">Food trucks, juegos, música en vivo y mucho más</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Ambiente Familiar</h4>
                  <p className="text-muted-foreground text-sm">Espacio abierto para toda la familia y amigos</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Night event */}
          <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
            <div className="bg-primary p-6">
              <div className="flex items-center gap-3 mb-2">
                <Music className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-black text-white">FIESTA NOCTURNA</h3>
              </div>
              <p className="text-white/90 font-medium">21:00 - 02:00 hs</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">DJ en Vivo</h4>
                  <p className="text-muted-foreground text-sm">
                    Los mejores DJs de la zona con música para bailar toda la noche
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Barra Premium</h4>
                  <p className="text-muted-foreground text-sm">Amplia variedad de bebidas y tragos especiales</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Pista de Baile</h4>
                  <p className="text-muted-foreground text-sm">Espacio amplio con iluminación y sonido profesional</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-muted">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Entrada con preventa anticipada. Cupos limitados.
              Mayores de 18 años con DNI.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
