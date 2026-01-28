export default function FindDoctorsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('C:\project2\my-payload-app\public\images\hosipital.jfif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="m-200 relative z-10 max-w-4xl px-6">
        <p className="text-lg mb-2">
          New Destination for
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Advanced Child Care in India
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {["Book Appointment", "Facilities", "Vaccination", "Baby Growth Tracker"].map(
            (item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md p-9"
              >
                <p className="font-semibold">{item}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
