import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Resend({
      // If your environment variable is named differently than default
      apiKey: process.env.EMAIL_SERVER_PASSWORD,
      from: "onboarding@resend.dev"
    }),
  ],
  
  pages: {
    signIn: "/login",
    verifyRequest: '/verify-request',
    error: '/verify-error'
  }
})