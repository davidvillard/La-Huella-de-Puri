'use client';

import { useSearchParams } from 'next/navigation';
import Image from "next/image";

export default function LoginPage() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-5">
            <div className="w-full max-w-md">
                {/* Card container */}
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/LogoHeader.svg"
                            alt="La Huella De Puri Logo"
                            width={94}
                            height={94}
                            priority
                            className="w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-105"
                        />
                    </div>

                    {/* Título */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3 tracking-tight">
                        Bienvenido/a
                    </h1>

                    <p className="text-center text-gray-600 text-sm sm:text-base mb-8">
                        Accede a <span className="font-semibold text-[#354A37]">La Huella De Puri</span> con tu contraseña
                    </p>

                    {/* Formulario */}
                    <form action="/api/login" method="POST" className="space-y-5">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Introduce tu contraseña"
                                required
                                autoFocus
                                className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl outline-none transition-all focus:border-[#354A37] focus:ring-4 focus:ring-[#354A37]/10 bg-white placeholder:text-gray-400 text-gray-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 cursor-pointer text-base font-semibold text-white bg-[#354A37] rounded-xl transition-all hover:bg-[#2a3b2c] hover:shadow-lg active:scale-[0.98]"
                        >
                            Acceder al sitio
                        </button>

                        {error && (
                            <div className="flex items-center gap-2 px-4 py-3.5 bg-red-50 border-l-4 border-red-500 rounded-lg text-red-700 text-sm font-medium">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                </svg>
                                <span>Contraseña incorrecta. Inténtalo de nuevo.</span>
                            </div>
                        )}
                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                            Contenido protegido
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}