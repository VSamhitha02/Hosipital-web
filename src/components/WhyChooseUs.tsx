import { Card, CardContent } from "@/components/ui/card"

export default function WhyChooseUs() {
  const items = [
    { title: "NICU & PICU" },
    { title: "Emergency 24 × 7" },
    { title: "In-house Pharmacy" },
    { title: "Expert Doctors" },
    { title: "Advanced Labs" },
    { title: "Central Monitoring" },
    { title: "OPDs" },
    { title: "Patient Safety" },
  ]

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Choose Us?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {items.map((item) => (
          <Card key={item.title} className="bg-white/15 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center text-2xl mb-3">
                ✓
              </div>
              <p className="text-sm md:text-lg font-medium">
                {item.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
