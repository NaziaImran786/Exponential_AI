import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Exponential AI's agents have transformed our customer service operations. We've seen a 40% reduction in response time and a significant improvement in customer satisfaction scores.",
    author: "Sarah Johnson",
    title: "CTO, Global Financial Services",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The intelligent agents developed by Exponential AI have streamlined our inventory management process beyond our expectations. The ROI was evident within the first quarter.",
    author: "Michael Chen",
    title: "VP of Operations, Retail Chain",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Exponential AI has been a game-changer for our healthcare practice. Their AI agents handle scheduling and follow-ups with incredible accuracy and a human touch.",
    author: "Dr. Emily Rodriguez",
    title: "Medical Director, Healthcare Network",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at Exponential AI truly understands how to build AI that thinks and acts in alignment with our business goals. Their solutions have exceeded our expectations.",
    author: "David Park",
    title: "Innovation Lead, Manufacturing",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Hear from businesses that have transformed their operations with our intelligent AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-purple-200 dark:text-purple-800 mb-4" />
                <p className="text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

