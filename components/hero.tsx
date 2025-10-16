"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToInfo = () => {
    document.getElementById("info")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-block">
            <div className="bg-primary text-primary-foreground px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider">
              +10 AÑOS DE TRADICIÓN
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-none">
            AUSTRALIANA
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary px-4">
              RUGBY • FÚTBOL FEMENINO • FIESTA
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium">
              Mercedes, Buenos Aires
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-6 sm:pt-8 px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto"
              onClick={scrollToInfo}
            >
              VER INFO DEL EVENTO
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-transparent w-full sm:w-auto"
              onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
            >
              REGISTRARME AHORA
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToInfo}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-primary rounded-full blur-3xl opacity-30 animate-pulse" />
      <div
        className="absolute bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-primary rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
