import Link from "next/link"

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">Article Not Found</h1>
        <p className="text-xl text-[#718096] mb-8 max-w-2xl mx-auto">
          The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/blog"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    </div>
  )
}

