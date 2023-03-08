import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("isLoggedIn");
  const url = req.url;

  // if (!isLoggedIn && url.includes("/")) {
  //   return NextResponse.redirect("/Login");
  // }
  // if (isLoggedIn && url.includes("/Login")) {
  //   return NextResponse.redirect("/");
  // }
}
