export function StatsBar() {
  const stats = [
    { title: "Modern Facilities", icon: "🏥", label: "Facilities" },
    { title: "Expert Team", icon: "👨‍⚕️", label: "Doctors" },
    { title: "Advanced Care", icon: "🛏️", label: "Beds" },
    { title: "Trusted Care", icon: "😊", label: "Happy Patients" },
  ]

  return (
    <section className="relative z-20 mt-0 lg:-mt-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 shadow-xl px-6 sm:px-8 py-10">

        <div className="grid grid-cols-3 lg:grid-cols-4 items-start">
          {/* TOP 3 */}
          {stats.slice(0, 3).map((item, index) => (
            <div key={item.title} className="relative text-center px-4 sm:px-6">
              <div className="text-4xl mb-2 text-purple-600">{item.icon}</div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold">{item.title}</p>

              {/* Vertical dividers */}
              {(index < 2 || index === 2) && (
                <span
                  className={`
                    absolute right-0 top-6 h-20 w-px bg-black/30
                    ${index === 2 ? "hidden lg:block" : ""}
                  `}
                />
              )}
            </div>
          ))}

          {/* DESKTOP 4th ITEM */}
          <div className="hidden lg:block text-center px-4 sm:px-6">
            <div className="text-4xl mb-2 text-purple-600">{stats[3].icon}</div>
            <p className="text-sm text-gray-600">{stats[3].label}</p>
            <p className="text-lg font-semibold">{stats[3].title}</p>
          </div>
        </div>

        {/* MOBILE / TABLET BOTTOM ITEM */}
        <div className="lg:hidden mt-10 text-center">
          <div className="text-4xl mb-2 text-purple-600">{stats[3].icon}</div>
          <p className="text-sm text-gray-600">{stats[3].label}</p>
          <p className="text-lg font-semibold">{stats[3].title}</p>
        </div>

      </div>
    </section>
  )
}
