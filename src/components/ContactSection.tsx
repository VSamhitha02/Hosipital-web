import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-700">
          We're here to support you
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Fill out this form to help us provide the best care.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
