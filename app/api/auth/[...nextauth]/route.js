import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from '@models/user';
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  // Configure the authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Define callbacks for authentication actions
  callbacks: {
    // Callback for session handling
    async session({session})  {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      session.user.isAdmin = sessionUser.isAdmin;
      return session;
    },
    // Callback for sign-in
    async signIn({ profile }) {
      try {
        // Connect to the database
        await connectToDB();
  
        // Check if a user already exists with the provided email
        const userExists = await User.findOne({ email: profile.email });
  
        // If not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s/g, "").toLowerCase(),
            image: profile.picture,
            isAdmin: false,
          });
        }
        return true;
      } catch (error) {
        // Log any errors and return false to indicate a failed sign-in
        console.log(error);
        return false;
      }
    }
  }
});

// Export the handler for both GET and POST HTTP methods
export { handler as GET, handler as POST };
