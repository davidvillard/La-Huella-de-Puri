import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  const formData = await request.formData();
  const password = formData.get('password');

  if (password === process.env.SITE_PASSWORD) {
    // La contraseña es correcta. Establece la cookie.
    cookies().set({
      name: 'site_auth',
      value: 'true',
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    });
    // Devuelve una respuesta de éxito.
    return NextResponse.json({ success: true });
  } else {
    // La contraseña es incorrecta. Devuelve un error.
    return NextResponse.json({ success: false }, { status: 401 });
  }
}