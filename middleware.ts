export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/skills/:path*", "/log/:path*", "/progress/:path*", "/settings/:path*"],
};
