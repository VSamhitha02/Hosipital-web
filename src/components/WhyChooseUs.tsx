export default function WhyChooseUs() {
  return (
    <section className="bg-purple-700 text-white py-24">
      <h2 className="text-3xl font-bold text-center mb-16">
        Why Choose Us?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 text-center">
        {[
          "NICU & PICU",
          "Emergency 24x7",
          "In-house Pharmacy",
          "Expert Doctors",
          "Advanced Labs",
          "Central Monitoring",
          "OPDs",
          "Patient Safety",
        ].map((item) => (
          <div key={item}>
            <div className="w-14 h-14 bg-white text-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
