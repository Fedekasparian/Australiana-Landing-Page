"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ticket, CheckCircle2, AlertCircle } from "lucide-react"
import { registerForPresale } from "@/app/actions/register"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    cantidadEntradas: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await registerForPresale(formData)

      if (result.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ nombre: "", apellido: "", telefono: "", email: "", cantidadEntradas: "" })
        }, 5000)
      } else {
        setError(result.error || "Error al registrar. Por favor, intenta nuevamente.")
      }
    } catch (err) {
      console.error("[v0] Error submitting form:", err)
      setError("Error inesperado. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="registro" className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
              <Ticket className="w-3 h-3 sm:w-4 sm:h-4" />
              PREVENTA DISPONIBLE
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight px-4">
              REGISTRATE <span className="text-primary">AHORA</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Completá el formulario para acceder a la preventa y asegurar tu lugar
            </p>
          </div>

          {/* Form card */}
          <Card className="p-6 sm:p-8 border-2 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-sm sm:text-base font-bold">
                      Nombre *
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="h-11 sm:h-12 text-sm sm:text-base"
                      placeholder="Tu nombre"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-sm sm:text-base font-bold">
                      Apellido *
                    </Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      value={formData.apellido}
                      onChange={handleChange}
                      className="h-11 sm:h-12 text-sm sm:text-base"
                      placeholder="Tu apellido"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-sm sm:text-base font-bold">
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    placeholder="+54 9 11 1234-5678"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base font-bold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    placeholder="tu@email.com"
                    disabled={isLoading}
                  />
                </div>

                                <div className="space-y-2">
                  <Label htmlFor="cantidadEntradas" className="text-sm sm:text-base font-bold">
                    Cantidad de entradas *
                  </Label>
                  <Input
                    id="cantidadEntradas"
                    name="cantidadEntradas"
                    type="number"
                    required
                    value={formData.cantidadEntradas}
                    onChange={handleChange}
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    placeholder="1, 2, 3, 4..."
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 sm:p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-destructive">{error}</p>
                  </div>
                )}

                <div className="pt-2 sm:pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg h-12 sm:h-14 rounded-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "REGISTRANDO..." : "CONFIRMAR REGISTRO"}
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Al registrarte, aceptás recibir información sobre el evento y las instrucciones de pago
                </p>
              </form>
            ) : (
              <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-2 sm:mb-4">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">¡Registro Exitoso!</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">
                  Te enviaremos un email con las instrucciones de pago y más información del evento.
                </p>
              </div>
            )}
          </Card>

          {/* Additional info */}
          <div className="mt-6 sm:mt-8 text-center px-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              ¿Problemas con el registro? Escribinos a{" "}
              <a href="mailto:info@australiana.com" className="text-primary font-bold hover:underline">
                info@australiana.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
