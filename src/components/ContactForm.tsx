"use client"

import { useState } from "react"
import { submitContact } from "@/actions/submitContact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<"success" | "error">("success")

  async function handleSubmit(formData: FormData) {
    setLoading(true)

    const res = await submitContact(formData)

    if (res.success) {
      setStatus("success")
    } else {
      setStatus("error")
    }

    setLoading(false)
    setOpen(true)
  }

  return (
    <>
      {/* IMPORTANT: action instead of onSubmit */}
      <form action={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Patient Name" required />
          <Input name="age" placeholder="Age" />
          <Input name="phone" placeholder="Phone Number" required />
          <Input name="email" type="email" placeholder="Email" required />
        </div>

        <Textarea name="message" placeholder="Your message..." required />

        <Button
          type="submit"
          className="w-full bg-purple-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {/* SHADCN DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white">
          <DialogHeader className="bg-white">
            <DialogTitle>
              {status === "success"
                ? "Message Sent"
                : "Submission Failed"}
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-gray-600 bg-white">
            {status === "success"
              ? "Your message has been submitted successfully."
              : "Something went wrong. Please try again."}
          </p>
          <DialogFooter>
          <Button
            onClick={() => setOpen(false)}
            className = "bg-purple-700"
            >
              Ok
              </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
