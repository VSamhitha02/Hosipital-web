"use client"

import { useState, useRef } from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await axios.post("/api/contact", data)

      if (res.status === 200) {
        setSuccess(true)
        formRef.current?.reset()
      } else {
        setSuccess(false)
      }
    } catch (error) {
      setSuccess(false)
    } finally {
      setOpen(true)
      setLoading(false)
    }
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
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
      </form>

      {/* DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-center bg-white">
          <DialogHeader>
            <DialogTitle className="flex justify-center items-center gap-2">
              {success ? (
                <>
                  <span className="text-green-600">Success</span> ✅
                </>
              ) : (
                <>
                  <span className="text-red-600">Error</span> ❌
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          <p className="mt-4 bg-white">
            {success
              ? "Your message has been sent successfully."
              : "Something went wrong. Please try again later."}
          </p>

          <Button
            className="mt-6 bg-purple-700 w-full"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
