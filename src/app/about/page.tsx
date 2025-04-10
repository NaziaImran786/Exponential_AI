import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Exponential AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We&apos;re on a mission to transform businesses through intelligent AI agents that think, talk, and act.
            </p>
          </div>
        </div>
      </section>

      {/* Our story section */}
      <section className="py-20">
        <div className="container px-2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Exponential AI was founded in 2023 by a team of AI researchers and business leaders who saw the
                potential for AI to transform enterprise operations.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We started with a simple idea: AI should do more than just answer questions. It should think critically,
                communicate naturally, and take meaningful actions.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we&apos;re a team of 50+ AI specialists, engineers, and business consultants working with enterprises
                across finance, healthcare, retail, and manufacturing to build intelligent agents that drive real
                business value.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about.png"
                alt="Exponential AI team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our values section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our work and our relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Human-Centered AI</h3>
                <p className="text-muted-foreground">
                  We build AI that enhances human capabilities rather than replacing them, focusing on collaboration
                  between humans and machines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ethical Innovation</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to developing AI responsibly, with transparency, fairness, and privacy as core
                  principles in our work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  We believe AI should deliver tangible business results, and we measure our success by the value we
                  create for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team section */}
      {/* <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experts behind Exponential AI&apos;s innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                title: "CEO & Co-Founder",
                bio: "Former AI Research Lead at Google with 15+ years of experience in machine learning and natural language processing.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Rodriguez",
                title: "CTO & Co-Founder",
                bio: "Previously led engineering teams at Amazon and has built AI systems for Fortune 500 companies.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. James Wilson",
                title: "Chief AI Officer",
                bio: "PhD in Computer Science with specialization in reinforcement learning and decision-making systems.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Tanaka",
                title: "Chief Business Officer",
                bio: "20+ years of experience in enterprise software and business transformation consulting.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 text-white/80">
              We&apos;re always looking for talented individuals who are passionate about AI and its potential to transform
              businesses.
            </p>
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

