import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tailored intelligent agents that transform how your business operates and engages with customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Agents for Every Business Need</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI agents go beyond simple automation. They think critically, communicate naturally, and take
                meaningful actions to drive business value.
              </p>
              <ul className="space-y-3">
                {[
                  "Customized to your specific business processes",
                  "Seamless integration with your existing systems",
                  "Continuous learning and improvement",
                  "Enterprise-grade security and compliance",
                  "Measurable ROI and business impact",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/ai.png" alt="AI Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI solutions tailored to your industry and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Experience AI",
                description:
                  "Intelligent agents that provide personalized, 24/7 customer support across channels, reducing response times and improving satisfaction.",
                features: [
                  "Omnichannel support agents",
                  "Personalized recommendations",
                  "Sentiment analysis",
                  "Automated issue resolution",
                ],
                image: "/customer.png",
              },
              {
                title: "Operational AI",
                description:
                  "Streamline internal processes with AI agents that automate workflows, manage resources, and provide actionable insights for decision-making.",
                features: [
                  "Process automation",
                  "Resource optimization",
                  "Predictive maintenance",
                  "Inventory management",
                ],
                image: "/opertional.png",
              },
              {
                title: "Strategic AI",
                description:
                  "Advanced analytics and decision support systems that help executives identify opportunities, mitigate risks, and drive strategic initiatives.",
                features: [
                  "Market intelligence",
                  "Competitive analysis",
                  "Risk assessment",
                  "Strategic planning support",
                ],
                image: "/strategy.png",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry solutions */}
      {/* <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground">
              AI agents tailored to the unique challenges and opportunities in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                industry: "Financial Services",
                description:
                  "AI agents for fraud detection, customer service, investment advice, and regulatory compliance.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                industry: "Healthcare",
                description:
                  "Patient care coordination, appointment scheduling, medical record analysis, and clinical decision support.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                industry: "Retail",
                description:
                  "Inventory optimization, personalized shopping experiences, demand forecasting, and supply chain management.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                industry: "Manufacturing",
                description:
                  "Predictive maintenance, quality control, production optimization, and supply chain intelligence.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center p-6 border rounded-lg bg-card">
                <div className="relative h-40 w-full md:w-1/3 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.industry} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">{item.industry}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Link href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    View solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Implementation process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to delivering AI solutions that drive measurable business value.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-800/30 hidden md:block"></div>

            <div className="space-y-12 relative">
              {[
                {
                  step: "Discovery",
                  description:
                    "We work with your team to understand your business processes, challenges, and objectives to identify the right AI solution.",
                },
                {
                  step: "Design",
                  description:
                    "Our AI architects design a custom solution tailored to your specific needs, integrating with your existing systems and workflows.",
                },
                {
                  step: "Development",
                  description:
                    "We build and train your AI agents using our proprietary platform, ensuring they meet your requirements and performance standards.",
                },
                {
                  step: "Deployment",
                  description:
                    "We implement the solution in your environment with minimal disruption, providing training and support for your team.",
                },
                {
                  step: "Optimization",
                  description:
                    "We continuously monitor and improve your AI agents based on performance data and feedback to maximize business value.",
                },
              ].map((process, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-1"}`}>
                    <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold my-4 md:my-0 z-10">
                    {index + 1}
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12 md:order-1" : "md:pr-12 md:text-right"}`}>
                    {/* Empty div for layout */}
                  </div>
                </div>
              ))}
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
              Schedule a consultation with our team to discuss how our AI solutions can address your specific business
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

