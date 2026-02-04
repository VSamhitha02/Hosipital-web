import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)

    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      )
    }

    // 🔜 Later you can add:
    // await payload.create({ ... })

    return NextResponse.json(
      {
        success: true,
        message: "Message stored successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("CONTACT API ERROR:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    )
  }
}
