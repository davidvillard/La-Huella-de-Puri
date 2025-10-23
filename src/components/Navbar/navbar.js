"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-22 sm:h-28 md:h-28 lg:h-32">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Image
                                src="/LogoHeader.svg"
                                alt="La Huella De Puri Logo"
                                width={94}
                                height={94}
                                priority
                                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[94px] lg:h-[94px] transition-transform group-hover:scale-105"
                            />
                        </div>
                        <h2 className="classico-title text-xl lg:text-2xl font-normal text-[#354A37] hidden sm:block">
                            La Huella De Puri
                        </h2>
                    </Link>

                    <div className="hidden xl:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="relative group font-semibold text-lg text-[#354A37] hover:text-[#2a3c2b] transition-all duration-300"
                        >
                            Sobre Nosotros
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#354A37] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/productos"
                            className="relative group font-semibold text-lg text-[#354A37] hover:text-[#2a3c2b] transition-all duration-300"
                        >
                            Nuestros productos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#354A37] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/contacto"
                            className="relative group font-semibold text-lg text-[#354A37] hover:text-[#2a3c2b] transition-all duration-300"
                        >
                            Contacto
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#354A37] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Botón móvil/tablet */}
                    <button
                        className="xl:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Abrir menú"
                        aria-expanded={open}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className={`block h-0.5 w-6 bg-[#354A37] transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`block h-0.5 w-6 bg-[#354A37] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 w-6 bg-[#354A37] transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Dropdown móvil/tablet sencillo */}
            <div
                className={`xl:hidden absolute inset-x-0 top-full bg-white/95 border-b border-gray-100 shadow-sm transition-all duration-200 ${open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
                    <Link
                        href="/"
                        className="py-3 text-[18px] font-semibold text-[#354A37] hover:text-[#2a3c2b] transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        href="/productos"
                        className="py-3 text-[18px] font-semibold text-[#354A37] hover:text-[#2a3c2b] transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Nuestros productos
                    </Link>
                    <Link
                        href="/contacto"
                        className="py-3 text-[18px] font-semibold text-[#354A37] hover:text-[#2a3c2b] transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}