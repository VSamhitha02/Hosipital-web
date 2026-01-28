export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Featured Doctors
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Doctor Card */}
        <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
          <div className="h-32 w-32 bg-gray-200 rounded-full mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">
            Dr. John Doe
          </h2>
          <p className="text-gray-500">Pediatric Specialist</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
          <div className="h-32 w-32 bg-gray-200 rounded-full mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">
            Dr. Sarah Smith
          </h2>
          <p className="text-gray-500">Child Cardiologist</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
          <div className="h-32 w-32 bg-gray-200 rounded-full mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">
            Dr. Alex Kumar
          </h2>
          <p className="text-gray-500">Neonatologist</p>
        </div>
      </div>
    </div>
  )
}
