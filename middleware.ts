import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/browse"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
