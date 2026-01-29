export default function WhyChooseUs() {
  const items = [
    { title: "NICU & PICU"},
    { title: "Emergency 24 × 7"},
    { title: "In-house Pharmacy"},
    { title: "Expert Doctors"},
    { title: "Advanced Labs"},
    { title: "Central Monitoring"},
    { title: "OPDs"},
    { title: "Patient Safety"},
  ]

  return (
    <section className="bg-purple-700 text-white py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Why Choose Us?
      </h2>

      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          px-4
        "
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="
              bg-purple-600/40
              rounded-xl
              p-4
              flex flex-col
              items-center
              text-center
            "
          >
            {/* Icon */}
            <div
              className="
                w-12 h-12
                md:w-16 md:h-16
                bg-white
                text-purple-700
                rounded-full
                flex items-center justify-center
                text-xl md:text-2xl
                mb-3
              "
            >
              
            </div>

            {/* Text */}
            <p className="text-sm md:text-lg font-medium leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
