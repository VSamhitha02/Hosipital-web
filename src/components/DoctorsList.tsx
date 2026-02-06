import Image from "next/image"
import { getDoctors } from "@/lib/getDoctors"
import { Button } from "./ui/button"

export default async function DoctorsList() {
  const doctors = await getDoctors()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our Doctors
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor: any) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Top */}
            <div className="flex gap-6 mb-6">
              {/* Image */}
              <div className="relative w-32 h-40 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={doctor.photo?.url || "/doctor-placeholder.png"}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-900">
                  {doctor.name}
                </h3>

                {/* Speciality */}
                {doctor.speciality && (
                  <p className="text-sm font-medium text-primary mt-1">
                    {doctor.speciality}
                  </p>
                )}

                {/* Languages */}
                {doctor.languages && (
                  <div className="text-sm text-gray-600 mt-3">
                    🌐 {doctor.languages}
                  </div>
                )}

                {/* Qualification */}
                {doctor.qualifications && (
                  <div className="text-sm text-gray-600 mt-2">
                    🎓 {doctor.qualifications}
                  </div>
                )}
              </div>
            </div>

            {/* Button */}
            <Button className="w-full">
              Book Appointment
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
