import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className="h-screen flex items-center justify-center ">
    <SignIn path="/sign-in" routing="path" redirectUrl="/create-blog" />
  </div>
}