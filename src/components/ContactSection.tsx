import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center"
          style={{ color: "text-black" }}
        >
          We&apos;re here to support you
        </h2>

        <p
          className="text-center mt-2 mb-10"
          style={{ color: "var(--color-text-muted)" }}
        >
          Fill out this form to help us provide the best care.
        </p>

        <div
          className="p-8 shadow"
          style={{
            backgroundColor: "var(--color-bg-main)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
