/**
 * An array of routes that are used for authentication
 * These routes do not require authentication
 * @type {string[]}
 */
// Public Routes
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */
// Public Routes

export const authRoutes = [
  "/auth/register",
  "/auth/login",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purpose
 * @type {string}
 */
// Public Routes

export const apiRoutesPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
// default
export const DEFAULT_LOGIN_REDIRECT = "/settings";
