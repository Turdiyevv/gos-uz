import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LandingPage from "@/pages/landing"

export default function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}
