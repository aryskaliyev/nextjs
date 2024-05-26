import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_ADMIN_LOGIN_REDIRECT,
  DEFAULT_MENTOR_LOGIN_REDIRECT,
  DEFAULT_STUDENT_LOGIN_REDIRECT,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

// const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user.role;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      if (userRole === "STUDENT") {
        return NextResponse.redirect(new URL(DEFAULT_STUDENT_LOGIN_REDIRECT, nextUrl));
      }
      if (userRole === "MENTOR") {
        return NextResponse.redirect(new URL(DEFAULT_MENTOR_LOGIN_REDIRECT, nextUrl));
      }
      if (userRole === "ADMIN") {
        return NextResponse.redirect(new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, nextUrl));
      }
      return;
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}