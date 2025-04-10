import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { Card, CardContent } from "@/components/ui/card"
import {  ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  _id: string
  title: string
  author: string
  date: string
  subtitle: string
  category: string
  image: string
  descriptiion: object
}

export default async function BlogPage() {

  const res: BlogPost[] = await client.fetch(`*[_type == "blogPost"]| order(date desc){
  _id,
  id,
  title,
  subtitle,
  author,  
  date,  
  "image": image.asset->url,
  category,
  description
}`)


const feature_post_data = res[0]; // The first post after sorting by date desc is the most recent
console.log("Featured post data:", feature_post_data);


// Filter out the featured post and slice to get 6 other posts
const blogPosts = res
  .filter((item) => item._id !== feature_post_data._id) // Remove featured post
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (newest first)
  .slice(0, 6); // Get the first 6 blog posts after removing the featured one

console.log("Filtered and sliced blog posts:", blogPosts);
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Exponential AI{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, case studies, and thought leadership on AI innovation and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16">
        <div className="container px-2 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src= {feature_post_data.image || "/ai.png" }
                alt="Featured blog post"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                AI Strategy • {feature_post_data.date}
              </div>
              <h2 className="text-3xl font-bold mb-4">{feature_post_data.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{feature_post_data.subtitle}</p>
              <div className="flex items-center mb-6">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image src={feature_post_data.image || "/ai.png"} alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{feature_post_data.author}</div>
                  <div className="text-sm text-muted-foreground">CEO & Co-Founder</div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link href={`/blog/${feature_post_data._id}`}>Read Full Article</Link>
              </Button>

              <Button
                size="lg"
                className="ml-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link href="/create-blog">+ Create New Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog posts grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/ai.png"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.subtitle}</p>
                  <div className="flex items-center mb-4">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={post.image || "/ai.png"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">{post.author}</div>
                  </div>
                  <Link
                    href={`/blog/${post._id}`}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 text-white/80">
              Stay updated with the latest insights, case studies, and news on AI innovation and business
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="px-4 py-3 rounded-lg flex-1 text-black" />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


