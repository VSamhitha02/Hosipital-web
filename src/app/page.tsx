import ContactSection from "@/components/ContactSection"
import DoctorsList from "@/components/DoctorsList"
import FindDoctorsHero from "@/components/FindDoctorsHero"
import { StatsBar } from "@/components/StatsBar"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO SECTION (Background image starts here) */}
      <div className="mt-30"><FindDoctorsHero /></div>

      {/* QUICK ACTION BUTTONS */}
      {/* <QuickActions /> */}

      {/* STATS BAR */}
      <StatsBar />

      {/* FIND DOCTORS LIST */}
      <DoctorsList />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

       {/* FORM COMES RIGHT AFTER */}
      <ContactSection />
    </main>
  )
}
