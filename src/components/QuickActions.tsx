export function QuickActions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[].map(
          (item) => (
            <div
              key={item}
              className="bg-white rounded-xl p-6 text-center shadow"
            >
              <p className="font-semibold">{item}</p>
            </div>
          )
        )}
      </div>
    </section>
  )
}
