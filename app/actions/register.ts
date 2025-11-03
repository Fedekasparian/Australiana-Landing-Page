'use server';

import { setIdForm } from "@/components/registration-form";
import { supabase } from "@/lib/supabase";
import { time, timeStamp } from "console";
import { url } from "inspector";


export async function registrarUsuario(data: {
    nombre: string;
    apellido: string;
    telefono: string;
    mail: string;
    cantidadEntradas: number;
    archivo: File;
}) {


    const {error} = await supabase.from('reservas').insert({
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        mail: data.mail,
        cantidad_entradas: data.cantidadEntradas,
        }
    );
    if (error) {
        console.log("Error al registrar usuario:", error.message);
    }
    else {
        console.log("Usuario registrado con éxito");
    }
}

export async function registrarReserva(data: {
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    email: string;
    cantidad: number;
    creada_en: Date;
    expira_en: Date;
    urlArchivo: string;
    confirmada: boolean;}) {
    try{

      const {data: insertData, error} = await supabase.from('reservas').insert({
        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        telefono: data.telefono,
        email: data.email,
        cantidad: data.cantidad,
        creada_en: new Date(Date.now()), //fecha actual
        expira_en: new Date(Date.now() + 10*60*1000), //fecha actual + 10 minutos
        urlArchivo: "",
        confirmada: false,
      }
    ).select('id')
    if (error) {
      console.log("Error al registrar reserva:", error.message)
      return {error: error.message};
    }
      
    console.log("Reserva registrada con éxito")
    console.log("ID de la reserva creada:", insertData[0].id)
    return {data:insertData[0].id}; //Deuvelvo el id de la reserva creada  

    }catch(err: any){
      return {error: err.message}
    }
  }

export async function registrarReserva1(formData: {
    nombre: string;
    apellido: string;
    dni: number;
    telefono: string;
    mail: string;
    cantidad: number;
}) {
  try {
    const {data, error} = await supabase.rpc('EP_verificarYReservar',{
        p_nombre: formData.nombre,
        p_apellido: formData.apellido,
        p_dni: formData.dni,
        p_telefono: formData.telefono,
        p_email: formData.mail,
        p_cantidad: formData.cantidad,
      })

    //console.log("✅ Resultado de la función:", data)
    //console.log("❌ Error de la función:", error)

    if (data === "RESERVADO") {
      alert("✅ Reserva confirmada, continuá con el pago.")
    } else if (data === "AGOTADO") {
      alert("❌ Entradas agotadas.")
    } else {
      alert("⚠️ " + data)
    }
    return data
  } catch (error: any) {
    return error
  }
}

export async function cargarPago(formData:{
    idForm: number;  
    urlArchivo: string;
    }) {
    const {data, error} = await supabase
    .from('reservas')
    .update({confirmada: true, urlArchivo: formData.urlArchivo})
    .eq('id', formData.idForm);
    if (error) {
        console.log("Error al cargar pago:", error.message);
    }else {
        console.log("Pago cargado con éxito");
    }}