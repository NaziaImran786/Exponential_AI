/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { createClient } from "@sanity/client"
import { revalidatePath } from "next/cache"

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2023-05-03",
  useCdn: false,
})

// Map of placeholder IDs to their descriptions
const PLACEHOLDER_MAP = {
  placeholder1: "Abstract placeholder image",
  placeholder2: "AI placeholder image",
  placeholder3: "Technology placeholder image",
  placeholder4: "Business placeholder image",
}

export async function createBlogPost(data: any) {
  try {
    // Log the data being sent to Sanity
    console.log("Creating blog post with data:", {
      ...data,
      description: data.description ? "Description content exists" : "No description content",
      hasImage: !!data.image,
    })

    // Create the blog post document
    const blogData: any = {
      _type: "blogPost",
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      author: data.author,
      category: data.category,
      description: data.description || [],
    }

    // Handle placeholder images differently
    if (data.image && data.image.startsWith("placeholder")) {
      // For placeholders, we'll store the placeholder ID in a custom field
      // This way we can identify it as a placeholder in the blog page
      blogData.placeholderImage = data.image
      blogData.placeholderDescription =
        PLACEHOLDER_MAP[data.image as keyof typeof PLACEHOLDER_MAP] || "Placeholder image"
    }
    // We're not handling real image uploads since they're not working

    const result = await client.create(blogData)

    // Revalidate the blog page to show the new post
    revalidatePath("/blog")

    return { success: true, data: result }
  } catch (error) {
    console.error("Error creating blog post:", error)
    if (error instanceof Error) {
      throw new Error(`Failed to create blog post: ${error.message}`)
    }
    throw new Error("Failed to create blog post: Unknown error")
  }
}
