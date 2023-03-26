import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateToken } from "./lib/auth";

const methodsAllowed = ["POST", "GET", "PUT"];
export const config = {
  matcher: ["/api/archive", "/api/seated", "/api/reservations"],
};

export default async function middleware(req: NextRequest) {
  // Only allow POST requests
  if (!methodsAllowed.includes(req.method)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Method not allowed" }),
      { status: 405 }
    );
  }
  let xToken = req.headers.get("x-token");
  // Check if the token is present
  if (!xToken) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401 }
    );
  }

  // validate the token
  if ((validateToken(xToken))) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401 }
    );
  }

  return NextResponse.next();
}
