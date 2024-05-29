import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  adminRoutes,
  authRoutes,
  mentorRoutes,
  publicRoutes,
  studentRoutes,
} from "@/routes";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user.role;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isStudentRoute = studentRoutes.includes(nextUrl.pathname);
  const isMentorRoute = mentorRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if (isLoggedIn) {
    switch (userRole) {
      case "STUDENT":
        if (isStudentRoute) {
          return NextResponse.next();
        }
        return NextResponse.rewrite(new URL("/404", nextUrl));
      case "MENTOR":
        if (isMentorRoute) {
          return NextResponse.next();
        }
        return NextResponse.rewrite(new URL("/404", nextUrl));
      case "ADMIN":
        if (isAdminRoute) {
          return NextResponse.next();
        }
        return NextResponse.rewrite(new URL("/404", nextUrl));
      default:
        return NextResponse.rewrite(new URL("/404", nextUrl));
    }
  }

  if (!isLoggedIn) {
    if (nextUrl.pathname === DEFAULT_LOGIN_REDIRECT) {
      return NextResponse.redirect(new URL("/auth/login", nextUrl))
    }
  }
  return NextResponse.rewrite(new URL("/404", nextUrl));
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}