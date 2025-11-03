"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ticket, CheckCircle2, Upload, X, CreditCard, Hourglass } from "lucide-react"
import { registrarReserva1, registrarUsuario } from "../app/actions/register"
import { registrarReserva } from "../app/actions/register"
import { supabase } from "../lib/supabase"
import { cargarPago } from "../app/actions/register"
import CountdownTimer from "./ui/timer"



export function setIdForm(id:number){
  setIdForm(id)
}

export function RegistrarForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    mail: "",
    cantidad: 1,
    archivo: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [respuesta, setRespuesta] = useState("")
  const [idForm, setIdForm] = useState<number | null>(null)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [comprpobanteEnviado, setComprobanteEnviado] = useState(false)



  // Llama la funcion para insertar la reserva y ademas si es exitoso habilita la seccion de pago
  const handleGoToPay = async (e: React.FormEvent) => {
    e.preventDefault()

      const response = await registrarReserva({
      nombre: formData.nombre,
      apellido: formData.apellido,
      dni: formData.dni,
      telefono: formData.telefono,
      email: formData.mail,
      cantidad: formData.cantidad,
      creada_en: new Date(), //fecha actual
      expira_en: new Date(Date.now() + 10*60*1000), //fecha actual + 10 minutos
      urlArchivo: "",
      confirmada: false,  
      } )

      // Si response es exitoso, muestra la seccion de pago, sino muestra mensjae de error
      if (response.error){
        alert("Error al registrar la reserva: " + response.error)
      }else {
        setShowPaymentInfo(true)
        const reservaId = response.data;
        setIdForm(reservaId);
        //console.log("ID de la reserva creada:", reservaId)
      }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault()
    setComprobanteEnviado(true)
    // const response = await cargarPago({
      //   idForm: idForm!,
      //   urlArchivo: formData.archivo,
      //   })
      //Llamo a funcion en app/actions/register.ts para insertar en la bae de datoss
      
    try{
      //Reset del formulario
      handleConfirmacionPago();

        /*setTimeout(() => {
          setSubmitted(false)
          setFormData({ nombre: "", apellido: "", telefono: "", mail: "", cantidad: 1, archivo: ""   })
          setFile(null)
          setShowPaymentInfo(false)
        }, 5000)*/
    

    }catch (error:any) {
      alert("Error al registrar el usuario: " + error.message + ". \n Refresque la pagina e intente nuevamente.")
      setSubmitted(false)
    }
  }

  // Manejador de cambios de los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {



    const value =e.target.value
    e.target.type === "number" ? Number.parseInt(e.target.value) : e.target.value
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
    }

  // Manejador de archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Cambiando archivo")
    const selectedFile = e.target.files?.[0]
    console.log("Archivo seleccionado:", selectedFile)
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("El archivo es demasiado grande. Máximo 5MB.")
        return
      }
      setFile(selectedFile)
      }
    }

  // Eliminar archivo
  const removeFile = () => {
    console.log("Removiendo archivo")
    setFile(null)
    console.log(file)
  }

  const handleConfirmacionPago = async () => {
    try{

      if (!file) {
        alert ("Por favor, subí el comprobante de pago.")
        return false;
      }else{

        // Helpers seguros
        const removeAccents = (s: string | undefined | null) =>
          (s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        const sanitizeSegment = (s: string | undefined | null) =>
          removeAccents(s)
            .trim()
            .replace(/\s+/g, '_')           // espacios -> _
            .replace(/[^A-Za-z0-9._-]/g, '')// solo caracteres seguros
            .replace(/_+/g, '_')            // compacta __
            .replace(/^_+|_+$/g, '');       // trim _

        const buildFilePath = (folder: string, nombre: string, apellido: string, dni:string) => {
          const base = `${idForm}_${sanitizeSegment(nombre)}_${sanitizeSegment(apellido)}_${sanitizeSegment(dni)}`;
          const ext  = (file.name.split('.').pop() || 'pdf').toLowerCase();
          return `${folder}/${base}.${ext}`; // sin “/” inicial
        };

        // Uso:
        const nombre = formData.nombre;
        const apellido = formData.apellido;
        const dni = formData.dni;
        const filePath = buildFilePath('preventa1', nombre, apellido, dni);

        /*const removeAccents = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');  //Saca acentos del texto
        const cleanText = (s: string) =>(s ?? '').trim().replace(/\s{2,}/g, ' '); //Saca espacios repetidos
        const nombre = removeAccents(formData.nombre)
        const apellido = removeAccents(formData.apellido)
        const nombreLimpio = cleanText(nombre)
        const apeLimpio = cleanText(apellido)


        alert(formData.apellido)
        const filePath = `preventa1/${idForm}_${nombreLimpio}_${apeLimpio}`;
        */
        
        //console.log("filePath:", filePath)
        const { error: uploadError } = await supabase.storage
        .from('comprobantes')
        .upload(filePath, file)
        
        if (uploadError) {
          alert("Error al subir el archivo. \nPor favor refresque la paginea e intente nuevamente")
          setComprobanteEnviado(false)
          return false;
        }
        
        
        //Obtener url publica del archivo subido
        const { data: {publicUrl} } = supabase.storage
        .from('comprobantes')
        .getPublicUrl(filePath)
        
        //console.log("publicUrl:", publicUrl)
        
        // Actualizar la reserva en la base de datos
        const {error: updateError} = await supabase
        .from('reservas')
        .update({confirmada: true, urlArchivo: publicUrl})
        .eq('id', idForm);
        
        if (updateError) {
          alert("Error al actualizar la reserva: " + updateError.message)
          return false;
        }
        
        setSubmitted(true)
        document.getElementById("registro")?.scrollIntoView()
        return true;
      }
      
    }catch (error:any) {
      setComprobanteEnviado(false)
      return error;
    }


  }

  return (
    <section id="registro" className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
              <Ticket className="w-3 h-3 sm:w-4 sm:h-4" />
              
            
            {/* ------------------------------------------------------------------------------------- */}
              {/* PREVENTA 1 DISPONIBLE */}
              PROXIMAMENTE
            {/* ------------------------------------------------------------------------------------- */}
            
            
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight px-4">
              
              
            {/* ------------------------------------------------------------------------------------- */}
              COMPRA TU <span className="text-primary">ENTRADA</span>
              {/* PREVENTA 1 <span className="text-primary">AGOTADA</span> */}
            {/* ------------------------------------------------------------------------------------- */}
            
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              
              
            {/* ------------------------------------------------------------------------------------- */}
              Completá el formulario con tus para acceder a la preventa y asegurar tu lugar
            {/* No te cuelgues y no te quedes fuera de la proxima preventa el proximo lunes 10/11*/}
            {/* ------------------------------------------------------------------------------------- */}
            
            </p>
          </div>

          {/* Form card */}
          <div className="p-6 sm:p-8 border-2 shadow-xl  rounded-lg">
            {!submitted ? (
              <form onSubmit={showPaymentInfo ? handleSubmit : handleGoToPay} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Nombre componente*/}
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
                      disabled={showPaymentInfo}
                    />
                  </div>

                  {/* Apellido componente */}
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
                      disabled={showPaymentInfo}
                    />
                  </div>

                </div>

                {/* // DNI componente */}
                <div className="space-y-2">
                  <Label htmlFor="dni" className="text-sm sm:text-base font-bold">
                    DNI *
                  </Label>
                  <Input
                    id="dni"
                    name="dni"
                    type="text"
                    min="0"
                    //pattern="\d{8}"
                    minLength={8}
                    maxLength={8}
                    required
                    value={formData.dni}
                    onChange={handleChange}
                    onInvalid={(e) =>
                       e.currentTarget.setCustomValidity("Ingrese 8 dígitos sin puntos ni guiones")
                      }
                    onInput={(e) => e.currentTarget.setCustomValidity("")} // limpia el msg al tipear
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    placeholder="Ingresá tu DNI sin puntos ni guiones"
                    disabled={showPaymentInfo}
                  />
                </div>
                {/* // Teléfono componente */}
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
                    placeholder="2324699541"
                    disabled={showPaymentInfo}
                  />
                </div>
                {/* Email componente */}
                <div className="space-y-2">
                  <Label htmlFor="mail" className="text-sm sm:text-base font-bold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="mail"
                    type="email"
                    required
                    value={formData.mail}
                    onChange={handleChange}
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    placeholder="tu@email.com"
                    disabled={showPaymentInfo}
                  />
                </div>
                 {/* Cantidad de entradas componente */}
                <div className="space-y-2">
                  <Label htmlFor="cantidad" className="text-sm sm:text-base font-bold">
                    Cantidad de Entradas *
                  </Label>
                  <Input
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    min="0"
                    max="4"
                    required
                    value={formData.cantidad}
                    onChange={handleChange}
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    placeholder="1, 2, 3 o 4"
                    disabled={showPaymentInfo}
                  />
                  <p className="text-xs text-muted-foreground">Máximo 4 entradas por persona</p>
                </div>

                {/* Sección de información de pago y carga de archivo */}
                {showPaymentInfo && (
                  
                  <div className="space-y-5 sm:space-y-6 pt-4 border-t-2 border-primary/20">
                    <CountdownTimer/>

                    {/* Informacion de pago */}
                    <div className="bg-primary/10 p-4 sm:p-6 rounded-lg space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">Información de Pago</h3>
                      </div>

                      <div className="space-y-3 text-sm sm:text-base">
                        <div className="bg-background p-3 sm:p-4 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">ALIAS</p>
                          <p className="font-bold text-foreground">
                            
                            {/* ------------------------------------------------------------------------------------- */}
                            mp.mercedesrugbyclub
                            {/* PONE ACA EL ALIAS NUEVO */}
                            {/* ------------------------------------------------------------------------------------- */}
                            </p>
                        </div>

                        <div className="bg-background p-3 sm:p-4 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">CVU</p>

                          {/* ------------------------------------------------------------------------------------- */}
                          <p className="font-bold text-foreground">0000003100086027427844</p>
                          {/* <p className="font-bold text-foreground">PONE ACA CVU NUEVO</p> */}

                          {/* ------------------------------------------------------------------------------------- */}
                        </div>

                        <div className="bg-background p-3 sm:p-4 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Nombre</p>
                          <p className="font-bold text-foreground">MERCEDES RUGBY CLUB</p>
                        </div>

                        <div className="bg-background p-3 sm:p-4 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">MONTO A TRANSFERIR</p>
                          <p className="font-bold text-primary text-lg sm:text-xl">
                            ${(formData.cantidad * 7000).toLocaleString("es-AR")}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formData.cantidad} {formData.cantidad === 1 ? "entrada" : "entradas"} ×
                            $7.000
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground text-center pt-2">
                        Realizá la transferencia y subí el comprobante a continuación
                      </p>
                    </div>


                    {/* Carga del comprobante */}
                    <div className="space-y-2">
                      <Label htmlFor="archivo" className="text-sm sm:text-base font-bold">
                        Comprobante de Pago *
                      </Label>
                      <div className="space-y-3">
                        {!file ? (
                          <div className="relative">
                            <Input
                              id="archivo"
                              name="archivo"
                              type="file"
                              onChange={handleFileChange}
                              className="hidden"
                              max={5 * 1024 * 1024}
                              accept="image/*,.pdf"
                              required  // <- sólo requerido si no hay file seleccionado
                            />
                            <Label
                              htmlFor="archivo"
                              className="flex items-center justify-center gap-2 h-24 sm:h-28 border-2 border-dashed border-primary/50 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
                              
                            >
                              <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                              <span className="text-sm sm:text-base text-foreground font-medium">
                                Subir comprobante (máx. 5MB)
                              </span>
                            </Label>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs sm:text-sm font-medium text-foreground truncate">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={removeFile}
                              className="flex-shrink-0"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground">Formatos aceptados: imágenes, PDF</p>
                      </div>
                    </div>
                  </div>
                )}

                 {/* Boton ir a pagar */}
                <div className="pt-2 sm:pt-4">
                  {!showPaymentInfo ? (
                    <Button
                      type="submit"
                      onSubmit={handleGoToPay}
                      disabled
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg h-12 sm:h-14 rounded-full"
                    >

                      {/* ------------------------------------------------------------------------------------- */}
                      {/* IR A PAGAR */}
                      PROXIMA PREVENTA: HOY 19HS
                      {/* PROXIMA PREVENTA: 10/11 */}
                      {/* PROXIMA PREVENTA: 24/11 */}
                      {/* PROXIMAMENTE */}
                      {/* ------------------------------------------------------------------------------------- */}


                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg h-12 sm:h-14 rounded-full"
                      disabled = {!file || file.size > 5 * 1024 * 1024 || comprpobanteEnviado}
                      
                    >
                      CONFIRMAR COMPRA
                    </Button>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Luego de verificar el pago te llegará un mail con la confirmación del mismo.
                </p>

              </form>
            ) : (
              <div className="text-center py-8 sm:py-12 space-y-3 sm:space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-2 sm:mb-4">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">¡Registro Exitoso!</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">
                  Recibimos tu comprobante. Te enviaremos un email luego de la confirmación del mismo.
                </p>
              </div>
            )}
          </div>

          {/* Informacion importante */}
          <div className="mt-6 sm:mt-8 text-center px-4">
            
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Entrada con preventa anticipada. Cupos limitados.
              Mayores de 18 años con DNI.
            </p>
          </div>
        </Card>

        {/* Problemas con el registro */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
          <Card className="inline-block p-4 sm:p-6 bg-muted max-w-6xl">
            <p className="text-xs sm:text-sm text-muted-foreground">
              ¿Problemas con el registro? Escribinos a{" "}
              <a href="mailto:info@australiana.com" className="text-primary font-bold hover:underline">
                info@australiana.com
              </a>
              {" "}o{" "}
              <a
                href="https://www.instagram.com/fiestaaustraliana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
                aria-label="Instagram"
              >
                @fiestaaustraliana
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
