import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

if(!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.SECRET) {
  throw new Error('Missing environment variables for authentication');
}

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
}

const hendlers = NextAuth(authOptions);

export {  };