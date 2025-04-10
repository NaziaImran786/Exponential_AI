import { CreateBlogForm } from "@/components/create-blog-form"


export default function CreateBlogPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Create New{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Blog Post
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">Share your insights and knowledge with our community</p>
            <div>
            
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <CreateBlogForm />
          </div>
        </div>
      </section>
    </div>
  )
}
