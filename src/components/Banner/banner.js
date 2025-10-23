"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        relative overflow-hidden
        flex flex-col min-[1351px]:flex-row
        justify-center items-center
        bg-gradient-to-br from-[#2a3d2c] via-[#354A37] to-[#3d5540]
        text-white rounded-[32px]
        p-8 lg:px-20 lg:py-20 xl:px-28 xl:py-24
        gap-0
        shadow-2xl shadow-emerald-950/40
      "
    >
      {/* Efectos de fondo interactivos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orbes luminosos que siguen al cursor */}
        <div 
          className="absolute h-[500px] w-[500px] rounded-full bg-gradient-radial from-emerald-400/30 via-emerald-500/15 to-transparent blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: `${mousePosition.y * 100}%`,
            left: `${mousePosition.x * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute h-[400px] w-[400px] rounded-full bg-gradient-radial from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl transition-all duration-[1200ms] ease-out"
          style={{
            bottom: `${(1 - mousePosition.y) * 50}%`,
            right: `${(1 - mousePosition.x) * 50}%`,
            transform: 'translate(50%, 50%)',
          }}
        />
        
        {/* Textura sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Vignette sutil para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      </div>

      {/* Contenido */}
      <div
        className="
          relative z-10
          flex flex-col gap-12 lg:gap-16
          w-full min-[1351px]:w-1/2
          text-center max-[1350px]:text-center min-[1351px]:text-left
        "
      >

        {/* Título principal mejorado */}
        <div 
          className={`
            flex flex-col gap-8 lg:gap-10
            transition-all duration-1000 delay-150
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h1 className="flex flex-col gap-2">
            <span className="classico-title text-4xl sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.1] font-light tracking-tight">
              Encuentra tu pieza
            </span>
            <span className="classico-title font-bold text-[48px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] leading-[0.95] tracking-tighter bg-gradient-to-br from-white via-emerald-50 to-emerald-100 bg-clip-text text-transparent">
              artesanal
            </span>
            <span className="classico-title text-4xl sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.1] font-light tracking-tight">
              perfecta
            </span>
          </h1>
          
          {/* Subtítulo mejorado con más storytelling */}
          <div className="flex flex-col gap-3">
            <p className="text-xl sm:text-2xl md:text-[26px] font-light leading-relaxed text-emerald-50">
              Hecho a mano, con alma local
            </p>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/70 max-w-xl mx-auto min-[1351px]:mx-0">
              Cada pieza cuenta una historia única de tradición y dedicación artesanal
            </p>
          </div>
        </div>

        {/* Stats mejorados con animación */}
        <div
          className={`
            flex flex-col sm:flex-row justify-center min-[1351px]:justify-start
            items-center gap-8 lg:gap-12
            transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="group text-center min-[1351px]:text-left transition-transform duration-300 hover:scale-105">
            <span className="block text-4xl md:text-[42px] lg:text-[48px] font-bold bg-gradient-to-br from-white to-emerald-100 bg-clip-text text-transparent">
              25+
            </span>
            <span className="block text-sm md:text-base lg:text-lg font-medium text-white/80 mt-1">
              Diseños exclusivos
            </span>
          </div>

          <div className="hidden sm:block h-12 lg:h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />

          <div className="group text-center min-[1351px]:text-left transition-transform duration-300 hover:scale-105">
            <span className="block text-4xl md:text-[42px] lg:text-[48px] font-bold bg-gradient-to-br from-white to-emerald-100 bg-clip-text text-transparent">
              100%
            </span>
            <span className="block text-sm md:text-base lg:text-lg font-medium text-white/80 mt-1">
              Artesanía auténtica
            </span>
          </div>
        </div>

        {/* CTAs mejorados */}
        <div 
          className={`
            flex flex-col sm:flex-row justify-center min-[1351px]:justify-start gap-4
            transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <Button href="/productos" variant="primary">
            <span className="relative z-10 font-bold text-[17px] leading-[27px] text-black tracking-wide">
              Explorar colección
            </span>
          </Button>
          <Link href="https://www.instagram.com/la_huella_de_puri/" className="group relative cursor-pointer inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/50 hover:bg-white/20 active:scale-[0.98]">
            <span className="relative z-10 tracking-wide">Ver en Instagram</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
          </Link>
        </div>
      </div>

      {/* Imagen con efectos */}
      <div 
        className={`
          hidden min-[1351px]:flex w-full min-[1351px]:w-1/2 
          justify-center min-[1351px]:justify-center
          relative z-10
          transition-all duration-1000 delay-300
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
        `}
      >
        <div className="relative group">
          {/* Glow effect detrás de la imagen */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          
          <Image
            src="/BannerImage.png"
            alt="La Huella De Puri Banner Image"
            width={800}
            height={600}
            priority
            className="max-w-[600px] lg:max-w-[700px] xl:max-w-[780px] h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}