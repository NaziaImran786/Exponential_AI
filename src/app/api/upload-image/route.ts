/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Log file details
    console.log("File details:", {
      name: file.name,
      type: file.type,
      size: file.size,
    })

    // Create a unique filename
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-").toLowerCase()}`

    // Convert file to array buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Sanity API endpoint for asset uploads
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
    const token = process.env.SANITY_API_TOKEN

    // Log the API details (without token)
    console.log("Sanity API details:", {
      projectId,
      dataset,
      hasToken: !!token,
    })

    // The correct Sanity API endpoint for uploading images
    const uploadUrl = `https://api.sanity.io/v1/assets/images/${projectId}/${dataset}`

    console.log("Using upload URL:", uploadUrl)

    // Make the request to Sanity API
    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "Content-Type": file.type,
        Authorization: `Bearer ${token}`,
      },
      body: buffer,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Sanity API error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })
      return NextResponse.json(
        { error: `Sanity API error: ${response.status} ${response.statusText}` },
        { status: response.status },
      )
    }

    const result = await response.json()
    console.log("Sanity upload result:", result)

    // Return the asset ID
    if (result && result._id) {
      return NextResponse.json({
        assetId: result._id,
        url: result.url,
      })
    } else {
      console.error("Unexpected response format:", result)
      return NextResponse.json({ error: "Unexpected response format from Sanity" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error uploading image:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 })
  }
}
