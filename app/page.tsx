import { Hero } from "@/components/hero"
import { EventInfo } from "@/components/event-info"
import { RegistrarForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"
import { Schedule } from "@/components/schedule"
import { Sponsors } from "@/components/sponsors"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventInfo />
      <Schedule />
      <RegistrarForm />
      <Sponsors />
      <Footer />
    </main>
  )
}
