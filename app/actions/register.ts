"use server"

import { createClient } from "@/lib/supabase/server"
import { put } from "@vercel/blob"

export interface RegistrationResult {
  success: boolean
  error?: string
}

export async function registerForPresale(formData: FormData): Promise<RegistrationResult> {
  try {
    const nombre = formData.get("nombre") as string
    const apellido = formData.get("apellido") as string
    const telefono = formData.get("telefono") as string
    const email = formData.get("email") as string
    const file = formData.get("file") as File | null

    let archivoUrl: string | null = null

    if (file && file.size > 0) {
      try {
        const blob = await put(file.name, file, {
          access: "public",
        })
        archivoUrl = blob.url
      } catch (uploadError) {
        console.error("[v0] Error uploading file to Blob:", uploadError)
        return {
          success: false,
          error: "Error al subir el archivo. Por favor, intenta nuevamente.",
        }
      }
    }

    const supabase = await createClient()

    const { error } = await supabase.from("preventa_1").insert({
      nombre,
      apellido,
      telefono,
      email,
      archivo_url: archivoUrl,
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
