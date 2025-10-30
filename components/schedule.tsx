import { Card } from "@/components/ui/card";
import { Clock, Trophy, Music, Users, Utensils, Medal, PartyPopper, Sun } from "lucide-react";

export function Schedule() {
  const scheduleItems = [
    {
      time: "9:00",
      title: "LLEGADA EQUIPOS",
      description: "Alta en mesa de control",
      icon: Users,
      color: "primary",
    },
    {
      time: "10:30",
      title: "INICIO SEVEN DEL OESTE",
      description: "Fase de Grupos - Rugby 7s - Futbol Fem. 7s - Hockey 7s",
      icon: Sun,
      color: "secondary",
    },
    {
      time: "15:00",
      title: "INICIO PLAYOFFS",
      description: "Sorteo y Pelea directa por su lugar en las Finales",
      icon: Trophy,
      color: "primary",
    },
    {
      time: "17:00",
      title: "FINALES BRONCE Y PLATA",
      description: "Comienzan a definirse los campeones",
      icon: Trophy,
      color: "secondary",
    },
    {
      time: "18:00",
      title: "FINALES ORO",
      description: "Cierre emocionante por la Dorada",
      icon: Trophy,
      color: "primary",
    },
    {
      time: "19:00",
      title: "CEREMONIA Y AFTER SEVEN",
      description: "Entrega  de reconocimientos con DJ en vivo",
      icon: Medal,
      color: "secondary",
    },
    {
      time: "21:30",
      title: "CIERRE SEVEN DEL OESTE",
      description: "Momento de recuperar energías y prepararse para lo que viene...",
      icon: Clock,
      color: "primary",
    },
    {
      time: "1:00",
      title: "FIESTA AUSTRALIANA",
      description: "Comienzo de la fiesta mas esperada del año!",
      icon: PartyPopper,
      color: "secondary",
    },
  ]

  return (
    <section id="cronograma" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight px-4">
            CRONOGRAMA DEL <span className="text-primary">EVENTO</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Vení a disfrutar de nuestros torneos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

            {/* Schedule items */}
            <div className="space-y-6 sm:space-y-8">
              {scheduleItems.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-4 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <Card
                        className={`p-4 sm:p-6 border-2 hover:shadow-xl transition-all ${
                          item.color === "primary" ? "hover:border-primary" : "hover:border-secondary"
                        }`}
                      >
                        <div className="flex items-start gap-3 md:hidden">
                          <div
                            className={`${
                              item.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                            } p-2.5 rounded-lg flex-shrink-0`}
                          >
                            <Icon
                              className={`w-5 h-5 ${item.color === "primary" ? "text-primary" : "text-secondary"}`}
                            />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-2xl font-black ${
                                  item.color === "primary" ? "text-primary" : "text-secondary"
                                }`}
                              >
                                {item.time}
                              </span>
                            </div>
                            <h3 className="font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>

                        {/* Desktop layout */}
                        <div className="hidden md:block">
                          <div className="flex items-center gap-2 mb-2 justify-end md:justify-start">
                            <span
                              className={`text-3xl font-black ${
                                item.color === "primary" ? "text-primary" : "text-secondary"
                              }`}
                            >
                              {item.time}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </Card>
                    </div>

                    {/* Center icon (desktop only) */}
                    <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16 relative z-10">
                      <div
                        className={`${
                          item.color === "primary" ? "bg-primary" : "bg-secondary"
                        } p-3 rounded-full shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}