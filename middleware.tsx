import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("isLoggedIn");
  const url = req.nextUrl;

  const cartCookie = req.cookies.get("cart");

  if (!cartCookie && req.nextUrl.pathname.startsWith("/Success")) {
    return NextResponse.rewrite(new URL("/Shop", req.url));
  }

  // if (!isLoggedIn && url.pathname("/")) {
  //   return NextResponse.redirect("/Login");
  // }

  // if (isLoggedIn && req.nextUrl.pathname.startsWith("/Login")) {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }
}
