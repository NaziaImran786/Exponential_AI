import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import {PortableText} from '@portabletext/react'
import PostCreator from '@/components/comments'

// Define the BlogPost interface to match your Sanity schema
interface BlogPost {
  _id: string
  id: number
  title: string
  author: string
  subtitle: string
  date: string
  image: string
  category: string
  description: string
}

// Fetch the post data from Sanity using the ID
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blogPost"]{
    _id
  }`)

  return posts.map((post: { _id: string }) => ({
    id: post._id,
  }))
}

async function getPost(id: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(
      `*[_type == "blogPost" && _id == '${id}'][0]{
        _id,
        id,
        title,
        author,
        subtitle,
        date,
        "image": image.asset->url,
        category,
        description
      }`,  
    )

    return post
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

export default async function BlogPost({ params }: { params: Promise<{ dynamic: string }>}) {
  const { dynamic } = await params

  const post = await getPost(dynamic)

  if (!post) {
    // console.log("Post not found for ID:", dynamic) // Debug log
    notFound()
  }

  // Destructure the post data
  const { title, author, subtitle, image, date, description } = post

  // Parse the description if it's stored as a JSON string
  const desc = description

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Blog Page
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600">
              Articles
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative container mx-auto px-4 max-w-4xl h-[400px] mb-12">
        <Image
          src={image || "/ai.png"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <main className="container mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl px-4 font-bold text-[#2D3748] mb-6">{title}</h1>          

          <div className="flex items-center space-x-4 text-lg mb-8">
            <span className="font-bold px-4 text-[#2D3748]">{author}</span>
            <span className="text-[#718096] px-4">{date}</span>
          </div>

          <hr className="my-8 border-[#E8E7E7]" />

          <div className="text-[#718096] px-6 space-y-6">
            <p>{subtitle}</p>

            {/* Render the description content */}
            {desc && typeof desc === "object" && (
              <div>
                {/* You can format the description object here based on your Sanity schema */}
                <PortableText value={desc}/>
              </div>
            )}
          </div>
        </article>
      </main>

      {/* comments */}
      <div className="container mx-auto max-w-4xl px-2 lg:px-12 py-12">
        <PostCreator blog_id={post.id} />        
      </div>
    </div>
  )
}



