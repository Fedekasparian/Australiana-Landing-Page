"use server"

import { createClient } from "@/lib/supabase/server"

export interface RegistrationData {
  nombre: string
  apellido: string
  telefono: string
  email: string
}

export interface RegistrationResult {
  success: boolean
  error?: string
}

export async function registerForPresale(data: RegistrationData): Promise<RegistrationResult> {
  try {
    const supabase = await createClient()

    // Insert the registration data into the preventa_1 table
    const { error } = await supabase.from("preventa_1").insert({
      nombre: data.nombre,
      apellido: data.apellido,
      telefono: data.telefono,
      email: data.email,
    })

    if (error) {
      console.error("[v0] Error inserting registration:", error)
      return {
        success: false,
        error: "Error al registrar. Por favor, intenta nuevamente.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Unexpected error during registration:", error)
    return {
      success: false,
      error: "Error inesperado. Por favor, intenta nuevamente.",
    }
  }
}
