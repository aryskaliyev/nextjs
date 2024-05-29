/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
    "/auth/new-password",
]; 

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/reset",
]; 

/**
 * An array of routes that are accessible only to students
 * These routes require logged in user to be STUDENT roles.
 *  @type {string[]}
 */

export const studentRoutes = [
    "/dashboard",
];

/**
 * An array of routes that are accessible only to mentors
 * These routes require logged in users to be MENTOR roles.
  * @type {string[]}
 */

export const mentorRoutes = [
    "/dashboard",
    "/mentor",
];

/**
 * An array of routes that are accessible only to admins
 * These routes require logged in users to be ADMIN roles.
  * @type {string[]}
 */

export const adminRoutes = [
    "/dashboard",
    "/admin",
];

// /**
//  * The prefix for API authentication routes
//  * Routes that start with this prefix are used for API authentication purposes
//  * @type {string}
//  */
// export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
// export const DEFAULT_LOGIN_REDIRECT = "/settings";
export const DEFAULT_STUDENT_LOGIN_REDIRECT = "/dashboard";
export const DEFAULT_MENTOR_LOGIN_REDIRECT = "/mentor";
export const DEFAULT_ADMIN_LOGIN_REDIRECT = "/admin";
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";