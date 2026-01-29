import Image from 'next/image'
import { getDoctors } from '@/lib/getDoctors'

export default async function DoctorsList() {
  const doctors = await getDoctors()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Our Doctors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
        {doctors.map((doctor: any) => (
          <div
            key={doctor.id}
            className="rounded-xl border shadow-sm overflow-hidden bg-white"
          >
            <Image
              src={doctor.photo.url}
              alt={doctor.name}
              width={400}
              height={400}
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600">
                {doctor.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
