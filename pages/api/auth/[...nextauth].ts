import { Callbacks } from "jquery";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId: string = process.env.GOOGLE_ID as string;
const clientSecret: string = process.env.GOOGLE_SECRET as string;
async function refreshAccessToken(token: any) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        clientId,
        clientSecret,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();
    console.log("refreshedTokens:", refreshedTokens);

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, account, user }: any) {
      console.log("🚀 ~ file: [...nextauth].ts:18 ~ jwt ~ token:", token);
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_in * 1000,
          user,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        console.log("Existing access token is valid");
        return token;
      }

      console.log("refresh token has expired. refreshing....");
      return await refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = token.user;
        session.user.accessToken = token.accessToken;
        session.user.refreshedToken = token.refreshedToken;
        session.error = token.error;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
