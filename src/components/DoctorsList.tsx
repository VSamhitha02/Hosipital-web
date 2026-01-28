export default function DoctorsList() {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Pediatric Specialist",
    },
    {
      name: "Dr. Sarah Smith",
      specialization: "Child Cardiologist",
    },
    {
      name: "Dr. Alex Kumar",
      specialization: "Neonatologist",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Doctors
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 h-full"
          >
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6"></div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              {doc.name}
            </h3>

            {/* Specialization */}
            <p className="text-sm text-gray-500 text-center mt-1">
              {doc.specialization}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
