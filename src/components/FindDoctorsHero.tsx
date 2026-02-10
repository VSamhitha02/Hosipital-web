export default function FindDoctorsHero() {
  return (
    <section
      className="
        relative
        py-40
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        overflow-x-hidden
      "
      style={{
        backgroundImage: "url('/images/child1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 text-center">

        
        {/* Text block */}
        <div className="mb-14">
          <p className="text-[var(--color-primary1)] text-3 font-bold mb-3">
            New Destination for
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Advanced Child Care in India
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Book Appointment",
            "Facilities",
            "Vaccination",
            "Baby Growth Tracker",
          ].map((item) => (
            <div
              key={item}
              className="
               bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition
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
