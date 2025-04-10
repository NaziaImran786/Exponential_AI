import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Exponential AI's agents have transformed our customer service operations. We've seen a 40% reduction in response time and a significant improvement in customer satisfaction scores.",
    author: "Sarah Johnson",
    title: "CTO, Global Financial Services",
    company: "FinTech Innovations",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Financial Services",
  },
  {
    quote:
      "The intelligent agents developed by Exponential AI have streamlined our inventory management process beyond our expectations. The ROI was evident within the first quarter.",
    author: "Michael Chen",
    title: "VP of Operations, Retail Chain",
    company: "Urban Retail Group",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Retail",
  },
  {
    quote:
      "Working with Exponential AI has been a game-changer for our healthcare practice. Their AI agents handle scheduling and follow-ups with incredible accuracy and a human touch.",
    author: "Dr. Emily Rodriguez",
    title: "Medical Director, Healthcare Network",
    company: "MedCare Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Healthcare",
  },
  {
    quote:
      "The team at Exponential AI truly understands how to build AI that thinks and acts in alignment with our business goals. Their solutions have exceeded our expectations.",
    author: "David Park",
    title: "Innovation Lead, Manufacturing",
    company: "Advanced Manufacturing Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Manufacturing",
  },
  {
    quote:
      "We've been able to automate complex workflows that we never thought possible. The AI agents from Exponential AI have the reasoning capabilities to handle nuanced decisions.",
    author: "Jennifer Lee",
    title: "Digital Transformation Director",
    company: "Global Logistics Corp",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Logistics",
  },
  {
    quote:
      "Our customer engagement metrics have improved dramatically since implementing Exponential AI's conversational agents. They understand context and maintain natural conversations.",
    author: "Robert Martinez",
    title: "Customer Experience Lead",
    company: "TechSolutions Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Technology",
  },
  {
    quote:
      "The predictive capabilities of Exponential AI's agents have helped us optimize our supply chain and reduce costs by 25%. The impact on our bottom line has been substantial.",
    author: "Lisa Wong",
    title: "Supply Chain Director",
    company: "Consumer Goods International",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Consumer Goods",
  },
  {
    quote:
      "Exponential AI's team took the time to understand our unique challenges and developed a custom solution that has transformed how we operate. Their expertise is unmatched.",
    author: "James Thompson",
    title: "COO",
    company: "Energy Solutions Group",
    avatar: "/placeholder.svg?height=100&width=100",
    industry: "Energy",
  },
]

// const videoTestimonials = [
//   {
//     title: "How FinTech Innovations Transformed Customer Service",
//     company: "FinTech Innovations",
//     thumbnail: "/placeholder.svg?height=400&width=600",
//     duration: "3:45",
//   },
//   {
//     title: "MedCare Solutions: AI in Healthcare Coordination",
//     company: "MedCare Solutions",
//     thumbnail: "/placeholder.svg?height=400&width=600",
//     duration: "4:12",
//   },
//   {
//     title: "Retail Inventory Management Revolution",
//     company: "Urban Retail Group",
//     thumbnail: "/placeholder.svg?height=400&width=600",
//     duration: "5:30",
//   },
// ]

const caseStudies = [
  {
    title: "40% Reduction in Customer Service Costs",
    company: "Global Financial Services Firm",
    description:
      "How a leading bank implemented AI agents to transform their customer service operations while improving satisfaction scores.",
    image: "/customer.png",
    results: ["40% cost reduction", "30% faster response times", "25% increase in customer satisfaction"],
  },
  {
    title: "Healthcare Patient Coordination Transformation",
    company: "National Healthcare Network",
    description:
      "Implementation of AI agents for appointment scheduling, follow-ups, and medication reminders with 99.8% accuracy.",
    image: "/health.png",
    results: ["35% reduction in no-shows", "99.8% scheduling accuracy", "42% staff time saved"],
  },
  {
    title: "Retail Inventory Optimization",
    company: "Major Retail Chain",
    description:
      "Smart inventory prediction and management that reduced stockouts and improved supply chain efficiency.",
    image: "/retail.png",
    results: ["35% reduction in stockouts", "22% inventory carrying cost reduction", "15% increase in sales"],
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hear from businesses that have transformed their operations with our intelligent AI agents.
            </p>
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative h-64 w-64 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src="/ceo.png"
                    alt="Featured testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Quote className="h-12 w-12 text-purple-200 dark:text-purple-800 mb-4" />
                  <p className="text-2xl italic mb-8">
                    &quot;Implementing Exponential AI&apos;s intelligent agents has been the single most transformative technology
                    decision we&apos;ve made in the past decade. The agents don&apos;t just automate tasks—they think, reason, and
                    make decisions that drive real business value.&quot;
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="text-xl font-semibold">Najam Saeed</div>
                      <div className="text-purple-600 dark:text-purple-400">CEO, ExponentialAI</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Businesses across industries are achieving remarkable results with our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                    {testimonial.industry}
                  </div>
                  <Quote className="h-8 w-8 text-purple-200 dark:text-purple-800 mb-4" />
                  <p className="text-lg mb-6 italic flex-1">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center mt-auto pt-4 border-t">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              Watch our clients share their experiences with Exponential AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                      <svg className="h-8 w-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
                <p className="text-muted-foreground">{video.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Case studies */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground">
              Detailed examples of how our AI solutions have delivered measurable business value.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-full min-h-[300px]">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-8">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{study.company}</div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="text-purple-600 dark:text-purple-400 font-medium flex items-center">
                      Read full case study
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The Impact of Our AI Solutions</h2>
            <p className="text-xl text-muted-foreground">Measurable results across industries and use cases.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">40%</div>
              <div className="text-muted-foreground">Average Cost Reduction</div>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">30%</div>
              <div className="text-muted-foreground">Efficiency Improvement</div>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</div>
              <div className="text-muted-foreground">AI Agents Deployed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join the growing list of businesses achieving remarkable results with our intelligent AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Schedule a Demo
              </button>
              <button className="px-6 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

