import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

// const jobOpenings = [
//   {
//     title: "Senior AI Engineer",
//     department: "Engineering",
//     location: "San Francisco, CA",
//     type: "Full-time",
//     description: "Design and develop advanced AI agents that can think, talk, and act for enterprise applications.",
//     requirements: [
//       "5+ years of experience in AI/ML development",
//       "Strong background in NLP and reinforcement learning",
//       "Experience with large language models",
//       "Proficiency in Python and relevant ML frameworks",
//     ],
//   },
//   {
//     title: "AI Solutions Architect",
//     department: "Product",
//     location: "Remote",
//     type: "Full-time",
//     description: "Design comprehensive AI solutions for enterprise clients across various industries.",
//     requirements: [
//       "7+ years of experience in solution architecture",
//       "Strong understanding of enterprise systems",
//       "Experience implementing AI solutions at scale",
//       "Excellent client communication skills",
//     ],
//   },
//   {
//     title: "Machine Learning Researcher",
//     department: "Research",
//     location: "Boston, MA",
//     type: "Full-time",
//     description: "Advance the state-of-the-art in AI agent capabilities through innovative research.",
//     requirements: [
//       "PhD in Computer Science, AI, or related field",
//       "Publication record in top AI conferences",
//       "Experience with cutting-edge ML techniques",
//       "Strong mathematical and statistical background",
//     ],
//   },
//   {
//     title: "AI Implementation Specialist",
//     department: "Client Success",
//     location: "Chicago, IL",
//     type: "Full-time",
//     description: "Help clients successfully implement and optimize our AI solutions for their specific needs.",
//     requirements: [
//       "3+ years of experience in technical implementation",
//       "Strong project management skills",
//       "Experience with enterprise software deployment",
//       "Excellent problem-solving abilities",
//     ],
//   },
//   {
//     title: "AI Ethics Researcher",
//     department: "Research",
//     location: "Remote",
//     type: "Full-time",
//     description: "Develop frameworks and guidelines to ensure our AI agents operate ethically and responsibly.",
//     requirements: [
//       "Background in AI ethics, philosophy, or related field",
//       "Understanding of bias, fairness, and transparency in AI",
//       "Experience developing ethical guidelines for technology",
//       "Strong analytical and communication skills",
//     ],
//   },
//   {
//     title: "Enterprise AI Sales Executive",
//     department: "Sales",
//     location: "New York, NY",
//     type: "Full-time",
//     description: "Drive sales of our AI solutions to enterprise clients in the financial services sector.",
//     requirements: [
//       "5+ years of enterprise software sales experience",
//       "Track record of closing large enterprise deals",
//       "Understanding of AI technology and value proposition",
//       "Experience in financial services industry preferred",
//     ],
//   },
// ]

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container mx-auto px-2">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Join the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Exponential AI
              </span>{" "}
              Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us build the future of intelligent AI agents for enterprises around the world.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/career.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Join Exponential AI?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Exponential AI, we&apos;re building intelligent agents that think, talk, and act to transform how
                businesses operate. Join us and work on cutting-edge AI technology with real-world impact.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Cutting-Edge Technology",
                    description: "Work with the latest AI models and techniques to solve complex business problems.",
                  },
                  {
                    title: "Real-World Impact",
                    description: "See your work make a tangible difference for enterprises across industries.",
                  },
                  {
                    title: "Collaborative Culture",
                    description: "Join a team of passionate experts who support and challenge each other.",
                  },
                  {
                    title: "Growth Opportunities",
                    description: "Develop your skills and advance your career in a rapidly growing field.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 mt-1">
                      <Check className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide our work and our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We push the boundaries of what's possible with AI, constantly exploring new approaches and techniques.",
                icon: "🚀",
              },
              {
                title: "Responsibility",
                description:
                  "We develop AI ethically and responsibly, with a focus on fairness, transparency, and human-centered design.",
                icon: "🛡️",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the tangible value we create for businesses and their customers.",
                icon: "📈",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best solutions come from diverse teams working together toward common goals.",
                icon: "🤝",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from code quality to client interactions.",
                icon: "✨",
              },
              {
                title: "Growth",
                description:
                  "We're committed to continuous learning and development, both as individuals and as an organization.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground">
              We take care of our team so they can focus on building amazing AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Competitive Compensation",
                description: "Salary, equity, and bonuses that recognize your value and contribution.",
                icon: "💰",
              },
              {
                title: "Comprehensive Healthcare",
                description: "Medical, dental, and vision coverage for you and your dependents.",
                icon: "🏥",
              },
              {
                title: "Flexible Work",
                description: "Remote-friendly culture with flexible hours to support work-life balance.",
                icon: "🏠",
              },
              {
                title: "Unlimited PTO",
                description: "Take the time you need to rest, recharge, and return at your best.",
                icon: "✈️",
              },
              {
                title: "Learning Budget",
                description: "Annual budget for conferences, courses, and professional development.",
                icon: "📚",
              },
              {
                title: "Wellness Programs",
                description: "Mental health support, fitness stipends, and wellness initiatives.",
                icon: "🧘",
              },
              {
                title: "Team Events",
                description: "Regular team-building activities, retreats, and social events.",
                icon: "🎉",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      {/* <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Join our team and help build the future of enterprise AI.</p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="text-muted-foreground">{job.department}</div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2 mt-1" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Hear from the people who make Exponential AI an amazing place to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working at Exponential AI has been the most rewarding experience of my career. The problems we solve are challenging and impactful, and the team is incredibly supportive.",
                name: "Alex Chen",
                role: "Senior AI Engineer",
                image: "/placeholder.svg?height=200&width=200",
                years: "2 years at Exponential AI",
              },
              {
                quote:
                  "I love that we're building AI that actually helps businesses solve real problems. The culture of innovation here means we're always pushing the boundaries of what's possible.",
                name: "Maya Patel",
                role: "AI Research Scientist",
                image: "/placeholder.svg?height=200&width=200",
                years: "3 years at Exponential AI",
              },
              {
                quote:
                  "The collaborative environment at Exponential AI is unlike anywhere I've worked before. Everyone is passionate about our mission and committed to building ethical, responsible AI.",
                name: "David Kim",
                role: "Product Manager",
                image: "/placeholder.svg?height=200&width=200",
                years: "1.5 years at Exponential AI",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900/30">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-center italic mb-6">&quot;{testimonial.quote}&quot;</p>
                  <div className="text-center">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-purple-600 dark:text-purple-400">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.years}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application process */}
      {/* <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-xl text-muted-foreground">What to expect when you apply to join our team.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative"> */}
              {/* Process timeline line */}
              {/* <div className="absolute left-8 top-0 bottom-0 w-1 bg-purple-200 dark:bg-purple-800/30 hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "Application Review",
                    description:
                      "Our recruiting team reviews your application and resume to assess your qualifications and experience.",
                    time: "1-2 weeks",
                  },
                  {
                    step: "Initial Interview",
                    description:
                      "A 30-minute call with a recruiter to discuss your background, experience, and interest in the role.",
                    time: "30 minutes",
                  },
                  {
                    step: "Technical Assessment",
                    description:
                      "Depending on the role, you may complete a technical challenge or assessment to demonstrate your skills.",
                    time: "1-3 hours",
                  },
                  {
                    step: "Team Interviews",
                    description:
                      "A series of interviews with team members and potential colleagues to assess technical skills and cultural fit.",
                    time: "2-3 hours",
                  },
                  {
                    step: "Final Interview",
                    description:
                      "A conversation with a senior leader to discuss your career goals and how you can contribute to our mission.",
                    time: "45-60 minutes",
                  },
                  {
                    step: "Offer",
                    description:
                      "If selected, you'll receive an offer with details on compensation, benefits, and start date.",
                    time: "1 week",
                  },
                ].map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white font-bold mr-6 z-10 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
                      <p className="text-muted-foreground mb-2">{process.description}</p>
                      <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        Typical duration: {process.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-2">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 text-white/80">
              Explore our open positions and take the next step in your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

