import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname }: any = req.nextUrl;

  // if (pathname.includes("/api/auth") || token) {
  //   return NextResponse.next();
  // }

  // if (!token && pathname !== "/Login") {
  //   return NextResponse.redirect("/Login");
  // }
  // if (token && pathname === "/") {
  //   return NextResponse.redirect("/");
  // }
}
