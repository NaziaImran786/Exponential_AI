import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Financial Services AI Assistant",
    description: "How a leading bank reduced customer service costs by 40% while improving satisfaction scores.",
    image: "/bank.png",
    category: "Banking",
    href: "https://www.thebanker.com/content/886b880f-fc01-458d-81a5-4ad4c27815da",
  },
  {
    title: "Healthcare Patient Coordinator",
    description:
      "An AI agent that manages patient appointments, follow-ups, and medication reminders with 99.8% accuracy.",
    image: "/health.png",
    category: "Healthcare",
    href: "https://www.xenonstack.com/blog/agentic-ai-healthcare-system",
  },
  {
    title: "Retail Inventory Management",
    description: "Smart inventory prediction and management that reduced stockouts by 35% for a national retail chain.",
    image: "/retail.png",
    category: "Retail",
    href: "https://digitaldefynd.com/IQ/agentic-ai-in-retail/",
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Real-World AI Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            See how our intelligent agents are transforming businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {study.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Link href={study.href} className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}

