import { getPayload } from "payload"
import config from "@payload-config"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const body = await req.json()

    await payload.create({
      collection: "contact-submissions",
      data: body,
    })

    return NextResponse.json(
      { success: true, message: "Message submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("CONTACT API ERROR:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    )
  }
}
