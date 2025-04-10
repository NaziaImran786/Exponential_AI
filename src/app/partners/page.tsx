import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Partners
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We collaborate with industry leaders to deliver comprehensive AI solutions that drive business value.
            </p>
          </div>
        </div>
      </section>

      {/* Technology partners */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Technology Partners</h2>
            <p className="text-xl text-muted-foreground">
              We work with leading technology providers to enhance our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 border rounded-lg bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=100&width=200&text=Partner ${index + 1}`}
                  alt={`Technology Partner ${index + 1}`}
                  width={200}
                  height={100}
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic partners */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Strategic Partners</h2>
            <p className="text-xl text-muted-foreground">
              Our strategic partnerships help us deliver comprehensive solutions across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Global Consulting Group",
                description: "A leading management consulting firm that helps us deliver AI transformation at scale.",
                logo: "/placeholder.svg?height=100&width=200&text=GCG",
              },
              {
                name: "Enterprise Solutions Inc.",
                description:
                  "Enterprise software experts who help integrate our AI agents with complex business systems.",
                logo: "/placeholder.svg?height=100&width=200&text=ESI",
              },
              {
                name: "Data Intelligence Partners",
                description: "Data specialists who enhance our AI solutions with advanced analytics and insights.",
                logo: "/placeholder.svg?height=100&width=200&text=DIP",
              },
            ].map((partner, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="h-16 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">{partner.name}</h3>
                  <p className="text-muted-foreground text-center mb-6">{partner.description}</p>
                  <div className="flex justify-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner program */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Partner Program</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Become a partner and help us deliver transformative AI solutions to businesses worldwide. Our partner
                program offers comprehensive support, training, and resources.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Access to our AI platform and technology",
                  "Comprehensive training and certification",
                  "Joint marketing and sales opportunities",
                  "Dedicated partner support team",
                  "Competitive commission structure",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Apply to Become a Partner
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Partner Program" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Partner Types</h2>
            <p className="text-xl text-muted-foreground">
              We offer different partnership models to suit various business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Reseller Partners",
                description: "Sell Exponential AI solutions to your customers and earn competitive commissions.",
                features: [
                  "Sell our complete AI solution portfolio",
                  "Comprehensive sales training",
                  "Marketing resources and support",
                  "Deal registration program",
                ],
              },
              {
                type: "Implementation Partners",
                description: "Help clients implement and optimize Exponential AI solutions for their specific needs.",
                features: [
                  "Technical certification program",
                  "Implementation methodology",
                  "Project support resources",
                  "Joint delivery opportunities",
                ],
              },
              {
                type: "Technology Partners",
                description: "Integrate your technology with our AI platform to create enhanced solutions.",
                features: [
                  "API access and documentation",
                  "Technical integration support",
                  "Joint solution development",
                  "Co-marketing opportunities",
                ],
              },
            ].map((partnerType, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{partnerType.type}</h3>
                  <p className="text-muted-foreground mb-6">{partnerType.description}</p>
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {partnerType.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner success stories */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Partner Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how our partners are delivering value with Exponential AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Consulting Group: AI Transformation at Scale",
                description:
                  "How GCG helped a Fortune 500 company implement Exponential AI agents across their customer service operations.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Enterprise Solutions Inc.: Seamless Integration",
                description:
                  "ESI's approach to integrating Exponential AI with complex legacy systems for a healthcare provider.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((story, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center p-6 border rounded-lg bg-card">
                <div className="relative h-40 w-full md:w-1/3 rounded-lg overflow-hidden">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <Link href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner resources */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Partner Resources</h2>
            <p className="text-xl text-muted-foreground">
              Access tools and resources to help you succeed as an Exponential AI partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Partner Portal",
                description: "Access sales tools, marketing materials, training resources, and deal registration.",
                button: "Log In to Portal",
              },
              {
                title: "Training & Certification",
                description: "Get certified on Exponential AI technology and implementation methodologies.",
                button: "View Courses",
              },
              {
                title: "Marketing Resources",
                description: "Access co-branded materials, campaign templates, and go-to-market strategies.",
                button: "Explore Resources",
              },
            ].map((resource, index) => (
              <Card key={index}>
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{resource.description}</p>
                  <Button variant="outline" className="w-full mt-auto">
                    {resource.button}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our partner program.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I apply to become a partner?",
                answer:
                  "You can apply through our online application form. Our partner team will review your application and contact you to discuss next steps.",
              },
              {
                question: "What are the requirements to become a partner?",
                answer:
                  "Requirements vary by partner type, but generally include industry expertise, technical capabilities, and a commitment to joint success.",
              },
              {
                question: "Is there a cost to join the partner program?",
                answer:
                  "There is no cost to apply or join our partner program. Some certification programs may have associated fees.",
              },
              {
                question: "How long does the application process take?",
                answer:
                  "The application review process typically takes 1-2 weeks, followed by partnership discussions and agreement finalization.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join our partner ecosystem and help deliver transformative AI solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Partner Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

