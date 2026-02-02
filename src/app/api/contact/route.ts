import { NextResponse } from "next/server"
import { getPayload } from "payload"
import config from "@/payload.config"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const payload = await getPayload({ config })

    await payload.create({
      collection: "contact-submissions",
      data: body,
    })

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    )
  }
}
