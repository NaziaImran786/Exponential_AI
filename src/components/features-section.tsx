import { Brain, MessageSquare, Zap, BarChart, Shield, Globe } from "lucide-react"

const features = [
  {
    title: "Intelligent Reasoning",
    description:
      "Our AI agents can analyze complex data and make informed decisions based on your business rules and objectives.",
    icon: Brain,
  },
  {
    title: "Natural Conversations",
    description:
      "Engage customers with AI that understands context, sentiment, and can maintain natural, human-like conversations.",
    icon: MessageSquare,
  },
  {
    title: "Automated Actions",
    description:
      "Agents that don't just talk but take action - automating workflows, processing transactions, and executing tasks.",
    icon: Zap,
  },
  {
    title: "Business Analytics",
    description:
      "Gain insights from every interaction with built-in analytics that help you understand trends and opportunities.",
    icon: BarChart,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and compliance with industry regulations and standards.",
    icon: Shield,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing systems and workflows through our extensive API and integration capabilities.",
    icon: Globe,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">AI Agents That Transform Business</h2>
          <p className="text-xl text-muted-foreground">
            Our AI solutions are designed to think, talk, and act - providing comprehensive automation and intelligence
            for your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

