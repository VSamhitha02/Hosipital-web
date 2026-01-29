export function StatsBar() {
  return (
    <section className="relative z-20 -mt-24 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 shadow-xl p-8">

        {/* DESKTOP (4 columns) */}
        <div className="hidden lg:grid  grid-cols-4 divide-x">
          {[
            { title: "Modern Facilities", icon: "🏥", label: "Facilities" },
            { title: "Expert Team", icon: "👨‍⚕️", label: "Doctors" },
            { title: "Advanced Care", icon: "🛏️", label: "Beds" },
            { title: "Trusted Care", icon: "😊", label: "Happy Patients" },
          ].map((item) => (
            <div key={item.title} className="py-10 text-center">
              <div className="text-4xl mb-2 text-purple-600">{item.icon}</div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        {/* MOBILE + TABLET */}
        <div className="lg:hidden">
          {/* TOP 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
            {[
              { title: "Modern Facilities", icon: "🏥", label: "Facilities" },
              { title: "Expert Team", icon: "👨‍⚕️", label: "Doctors" },
              { title: "Advanced Care", icon: "🛏️", label: "Beds" },
            ].map((item) => (
              <div
                key={item.title}
                className="py-8 text-center"
              >
                <div className="text-4xl mb-2 text-purple-600">{item.icon}</div>
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            ))}
          </div>

          {/* BOTTOM CENTER */}
          <div className="mt-8 text-center">
            <div className="text-4xl mb-2 text-purple-600">😊</div>
            <p className="text-sm text-gray-600">Happy Patients</p>
            <p className="text-lg font-semibold">Trusted Care</p>
          </div>
        </div>

      </div>
    </section>
  )
}
