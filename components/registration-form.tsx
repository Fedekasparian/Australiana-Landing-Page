"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ticket, CheckCircle2 } from "lucide-react"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nombre: "", apellido: "", telefono: "", email: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="registro" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
              <Ticket className="w-4 h-4" />
              PREVENTA DISPONIBLE
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
              REGISTRATE <span className="text-primary">AHORA</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Completá el formulario para acceder a la preventa y asegurar tu lugar
            </p>
          </div>

          {/* Form card */}
          <Card className="p-8 border-2 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-base font-bold">
                      Nombre *
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="h-12 text-base"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-base font-bold">
                      Apellido *
                    </Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      value={formData.apellido}
                      onChange={handleChange}
                      className="h-12 text-base"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-base font-bold">
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="h-12 text-base"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-bold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 rounded-full"
                  >
                    CONFIRMAR REGISTRO
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Al registrarte, aceptás recibir información sobre el evento y las instrucciones de pago
                </p>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">¡Registro Exitoso!</h3>
                <p className="text-muted-foreground">
                  Te enviaremos un email con las instrucciones de pago y más información del evento.
                </p>
              </div>
            )}
          </Card>

          {/* Additional info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
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
