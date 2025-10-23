import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.get('site_auth')?.value === 'true';

  // Logs para depuración
  console.log('--- Middleware ejecutado ---');
  console.log('Ruta solicitada:', pathname);
  console.log('¿Está autenticado?:', isAuthenticated);

  // Permite el acceso a la página de login y a la API de login
  if (pathname.startsWith('/login') || pathname.startsWith('/api/login')) {
    console.log('Acceso permitido a /login o /api/login.');
    return NextResponse.next();
  }

  // Si no está autenticado, redirige a la página de login
  if (!isAuthenticated) {
    console.log('Usuario NO autenticado. Redirigiendo a /login...');
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si está autenticado, permite continuar
  console.log('Usuario autenticado. Permitiendo acceso.');
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Empareja todas las rutas de solicitud excepto las que comienzan con:
     * - _next/static (archivos estáticos)
     * - _next/image (archivos de optimización de imágenes)
     * - favicon.ico (archivo de favicon)
     * - .svg (archivos de imagen svg)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.svg).*)',
  ],
};