"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "success" | "error"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json()
    // console.log("STATUS:", res.status)
    //   if (!res.ok) throw new Error()

    //   setStatus("success")
    //   e.currentTarget.reset()
    // } catch {
    //   setStatus("error")
    // } finally {
    //   setLoading(false)
    // }
     if (!res.ok) {
  throw new Error("Request failed")
}

setStatus("success")
}
   catch {
       setStatus("error")
     } finally {
       setLoading(false)
    }
}
  
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="name" placeholder="Patient Name" required />
        <Input name="age" placeholder="Age" required />
        <Input name="phone" placeholder="Phone Number" required />
        <Input name="email" type="email" placeholder="Email" required />
      </div>

      <Textarea
        name="message"
        placeholder="Type your message..."
        required
      />

      <Button
        type="submit"
        className="w-full bg-purple-700"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>

      {/* Success / Error message */}
      {status === "success" && (
        <p className="text-green-600 text-center font-medium">
          ✅ Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-center font-medium">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
