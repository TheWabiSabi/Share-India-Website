import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Get the pathname
  const { pathname } = request.nextUrl;

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Cache-Control based on content type
  if (pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/)) {
    // Images: cache for 1 year
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (pathname.match(/\.(woff|woff2|ttf|otf)$/)) {
    // Fonts: cache for 1 year
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (pathname.match(/\.(js|css)$/)) {
    // JS/CSS: cache for 1 week (Next.js hashes these)
    response.headers.set(
      'Cache-Control',
      'public, max-age=604800, immutable'
    );
  } else if (pathname.startsWith('/_next/')) {
    // Next.js static assets: cache for 1 year
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (pathname === '/' || pathname.match(/\.(html)$/)) {
    // HTML pages: revalidate frequently
    response.headers.set(
      'Cache-Control',
      'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/image (image optimization)
     */
    '/((?!api|_next/image).*)',
  ],
};
