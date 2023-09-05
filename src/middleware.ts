import { authMiddleware } from "@clerk/nextjs";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import {
    NextResponse,
    type NextFetchEvent,
    type NextRequest,
} from "next/server";

const ratelimit = new Ratelimit({
    redis: kv,
    // 5 requests from the same IP in 10 seconds
    limiter: Ratelimit.slidingWindow(5, "10 s"),
});

export default async function middleware(
    request: NextRequest,
    event: NextFetchEvent
): Promise<Response | undefined> {
    authMiddleware({
        ignoredRoutes: [
            "/((?!api|trpc))(_next|.+..+)(.*)",
            "/",
            "/api/auth/_log",
            "/api/auth/error",
        ],
        publicRoutes: ["/api/trpc/example.hello"],
    });
    const ip = request.ip ?? "127.0.0.1";

    const { success, pending, limit, reset, remaining } = await ratelimit.limit(
        `ratelimit_middleware_${ip}`
    );
    event.waitUntil(pending);

    const res = success
        ? NextResponse.next()
        : NextResponse.redirect(new URL("/blocked", request.url));

    res.headers.set("X-RateLimit-Limit", limit.toString());
    res.headers.set("X-RateLimit-Remaining", remaining.toString());
    res.headers.set("X-RateLimit-Reset", reset.toString());
    return res;
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
