import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log("You are at: ", path)
    const isPublicPath = path === '/login' || path === '/signup';

    const token = request.cookies.get('token')?.value || '';

    if (isPublicPath && token) {
        // return NextResponse.redirect('/') //or use below
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}


export const config = {
    matcher: [
        '/profile',
        '/profile/:path*',
        '/login',
        '/signup',
    ],
}