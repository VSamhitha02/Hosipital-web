import Image from "next/image"
import { getDoctors } from "@/lib/getDoctors"
import { Button } from "./ui/button"

export default async function DoctorsList() {
  const doctors = await getDoctors()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Our Doctors
      </h2>

      <div className="grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3 gap-3">
        {doctors.map((doctor: any) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            {/* TOP */}
            <div className="flex gap-6">
              {/* Image */}
              <div className="relative w-32 h-40 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={doctor.photo?.url || "/doctor-placeholder.png"}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />

                {/* Experience Badge */}
                {/* {doctor.speciality && (
                  <span className="absolute bottom-2 right-2 bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
                    {doctor.speciality}
                  </span>
                )} */}
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {doctor.name}
                </h3>

                {/* <p className="text-sm text-purple-700 font-medium mt-1">
                  {doctor.speciality}
                </p> */}
                {/* Speciality  */}
                {doctor.Speciality && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                    <span className="text-purple-600"></span>
                    <span>{doctor.speciality}</span>
                  </div>
                )}

                {/* Languages */}
                {doctor.languages && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                    <span className="text-purple-600">🌐</span>
                    <span>{doctor.languages}</span>
                  </div>
                )}

                {/* Qualification */}
                {doctor.qualifications && (
                  <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
                    <span className="text-purple-600 mt-0.5">🎓</span>
                    <span>{doctor.qualifications}</span>
                  </div>
                )}
              </div>
            </div>

            {/* BUTTON */}
            <Button className=" bg-purple-700  hover:bg-purple-800 ">
              Book Appointment
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
