import { auth } from "@/auth"

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname === "/dashboard") {
        const newUrl = new URL("/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    } else if (req.auth && req.nextUrl.pathname === "/login") {
        const newUrl = new URL("/dashboard", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})
