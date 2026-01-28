import DoctorsList from "@/components/DoctorsList"
import FindDoctorsHero from "@/components/FindDoctorsHero"
import { QuickActions } from "@/components/QuickActions"
import { StatsBar } from "@/components/StatsBar"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="hero-bg">
        <div className="hero-bg-content">
      {/* HERO SECTION (Background image starts here) */}
      <FindDoctorsHero />

      {/* QUICK ACTION BUTTONS */}
      <QuickActions />

      {/* STATS BAR */}
      <StatsBar />

      {/* FIND DOCTORS LIST */}
      <DoctorsList />
</div>
</section>
      {/* WHY CHOOSE US */}
      <WhyChooseUs />
    </main>
  )
}
