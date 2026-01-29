export default function FindDoctorsHero() {
  return (
    <section
      className="
        relative
        min-h-[70vh]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/images/child1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-6 text-center">
        
        {/* Text block */}
        <div className="mb-14">
          <p className="text-lg text-gray-700 mb-3">
            New Destination for
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Advanced Child Care in India
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Book Appointment",
            "Facilities",
            "Vaccination",
            "Baby Growth Tracker",
          ].map((item) => (
            <div
              key={item}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                px-8
                py-10
                hover:shadow-xl
                transition
              "
            >
              <p className="font-semibold text-gray-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
