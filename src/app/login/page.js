'use client';

import { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                // Éxito: redirige a la página de inicio
                router.push('/');
            } else {
                // Error: muestra el mensaje
                setError('Contraseña incorrecta. Inténtalo de nuevo.');
            }
        } catch (err) {
            setError('Ha ocurrido un error. Por favor, inténtalo más tarde.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
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
                        className="w-20 h-20 sm:w-24 sm:h-24"
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
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        disabled={isSubmitting}
                        className="w-full cursor-pointer py-4 text-base font-semibold text-white bg-[#354A37] rounded-xl transition-all hover:bg-[#2a3b2c] active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Verificando...' : 'Acceder al sitio'}
                    </button>

                    {error && (
                        <div className="flex items-center gap-2 px-4 py-3.5 bg-red-50 border-l-4 border-red-500 rounded-lg text-red-700 text-sm font-medium">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-5">
            <Suspense>
                <LoginForm />
            </Suspense>
        </div>
    );
}