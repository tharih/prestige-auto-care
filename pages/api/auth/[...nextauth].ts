import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId: string = process.env.GOOGLE_ID as string;
const clientSecret: string = process.env.GOOGLE_SECRET as string;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
