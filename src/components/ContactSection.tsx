import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">
          We're here to support you
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Fill out this form to help us provide the best care.
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 shadow">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
