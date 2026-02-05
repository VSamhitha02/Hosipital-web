"use server"

import { getPayload } from "payload"
import config from "@payload-config"

export async function submitContact(formData: FormData) {
  try {
    const payload = await getPayload({ config })

    const name = formData.get("name")?.toString()
    const age = formData.get("age")
    const phone = formData.get("phone")?.toString()
    const email = formData.get("email")?.toString()
    const message = formData.get("message")?.toString()

    if (!name || !phone || !email || !message) {
      return { success: false }
    }

    await payload.create({
      collection: "contact-submissions",
      draft: true, 
      data: {
        name,
        age: age ? Number(age) : undefined,
        phone,
        email,
        message,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("CONTACT SUBMIT ERROR:", error)
    return { success: false }
  }
}
