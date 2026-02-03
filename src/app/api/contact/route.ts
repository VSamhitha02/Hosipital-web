import { getPayload } from "payload"
import config from "@payload-config"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const body = await req.json()

    await payload.create({
      collection: "contact-submissions", // MUST MATCH collection slug
      data: {
        name: body.name,
        age: body.age,
        phone: body.phone,
        email: body.email,
        message: body.message,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("CONTACT API ERROR:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}
