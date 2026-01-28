export function StatsBar() {
  return (
    <section className="mt-4">
      <div className="max-w-7xl mx-auto rounded-xl bg-gradient-to-r from-gray-200 to-gray-100 shadow-lg">
        <div className="grid grid-cols-4 divide-x">
          {[
            { title: "Modern Facilities", icon: "🏥" },
            { title: "Expert Team", icon: "👨‍⚕️" },
            { title: "Advanced Care", icon: "🛏️" },
            { title: "Trusted Care", icon: "😊" },
          ].map((item) => (
            <div key={item.title} className="py-10 text-center">
              <div className="mb-2 text-3xl text-purple-600">
                {item.icon}
              </div>
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
