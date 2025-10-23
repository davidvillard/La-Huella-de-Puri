import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const formData = await request.formData();
  const password = formData.get('password');

  // Compara la contraseña enviada con la variable de entorno
  if (password === process.env.SITE_PASSWORD) {
    // Si es correcta, establece una cookie y redirige a la página principal
    const response = NextResponse.redirect(new URL('/', request.url));
    cookies().set({
      name: 'site_auth',
      value: 'true',
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    });
    return response;
  } else {
    // Si es incorrecta, redirige de vuelta al login con un error
    const loginUrl = new URL('/login?error=true', request.url);
    return NextResponse.redirect(loginUrl);
  }
}