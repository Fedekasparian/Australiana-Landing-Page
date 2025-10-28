import { Hero } from "@/components/hero"
import { EventInfo } from "@/components/event-info"
import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventInfo />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
