import { Hero } from "@/components/hero"
import { Sponsors } from "@/components/sponsors"
import { EventInfo } from "@/components/event-info"
import { Schedule } from "@/components/schedule"
import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Sponsors />
      <EventInfo />
      <Schedule />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
