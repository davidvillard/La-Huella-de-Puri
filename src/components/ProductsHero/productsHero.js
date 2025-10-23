"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ProductsHero({ total = 0 }) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Ambiente dinámico que responde al mouse - Efecto "mágico" de Apple */}
      <div 
        className="pointer-events-none absolute inset-0 transition-all duration-700 ease-out"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        {/* Orbes interactivos que siguen sutilmente al cursor */}
        <div 
          className="absolute h-[800px] w-[800px] rounded-full bg-gradient-radial from-emerald-300/25 via-emerald-200/15 to-transparent blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: `${20 + mousePosition.y * 10}%`,
            left: `${10 + mousePosition.x * 15}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute h-[700px] w-[700px] rounded-full bg-gradient-radial from-blue-300/20 via-cyan-200/10 to-transparent blur-3xl transition-all duration-[1200ms] ease-out"
          style={{
            top: `${60 + mousePosition.y * -8}%`,
            right: `${5 + mousePosition.x * -12}%`,
            transform: 'translate(50%, -50%)',
          }}
        />
        <div 
          className="absolute h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-300/15 via-pink-200/8 to-transparent blur-3xl transition-all duration-[1500ms] ease-out"
          style={{
            bottom: `${-10 + mousePosition.y * 5}%`,
            left: `${50 + mousePosition.x * -10}%`,
            transform: 'translate(-50%, 50%)',
          }}
        />
        
        {/* Malla de puntos ultrasutil para profundidad */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Contenido principal con espaciado generoso */}
      <div className="relative px-6 pt-2 pb-16 px sm:px-10 sm:pt-6 lg:pt-6">
        <div className="mx-auto max-w-5xl">
          
          {/* Pre-headline con propuesta de valor clara - Psicología: Exclusividad */}
          <div className={`mb-8 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group relative inline-flex items-center gap-2.5 rounded-full border border-emerald-500/15 bg-white/80 px-5 py-2 text-sm font-medium text-emerald-950 shadow-sm shadow-emerald-900/5 backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-900/10">
              {/* Indicador de "Novedad" - Psicología: FOMO y urgencia */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-1000" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              </span>
              <span className="text-xs font-semibold tracking-wide">
                {total > 0 ? `${total} creaciones artesanales` : "Nueva colección artesanal"}
              </span>
              <svg className="h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Headline principal - Psicología: Beneficio emocional antes que producto */}
          <div className="space-y-2">
            <h1 
              className={`text-center transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <span className="block bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] bg-clip-text pb-2 text-[clamp(48px,9vw,92px)] font-semibold leading-[0.95] tracking-[-0.04em] text-transparent">
                Artesanía que
              </span>
              <span className="block bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 bg-clip-text text-[clamp(48px,9vw,92px)] font-semibold leading-[0.95] tracking-[-0.04em] text-transparent">
                trasciende el tiempo
              </span>
            </h1>
          </div>

          {/* Subtítulo enfocado en la historia y valor - Psicología: Narrativa emocional */}
          <p 
            className={`mx-auto mt-8 max-w-2xl text-center text-[clamp(18px,2.5vw,22px)] leading-[1.5] tracking-[-0.01em] text-gray-600 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Cuero curtido naturalmente. Cerámica moldeada con paciencia. Arte que perdura.
          </p>

          {/* Social proof sutil - Psicología: Validación social
          <div 
            className={`mx-auto mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-emerald-600" />
                ))}
              </div>
              <span className="text-xs font-medium">+2.4k familias</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 fill-emerald-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-xs font-medium">4.9 valoración</span>
            </div>
          </div> */}

          {/* CTAs con jerarquía clara - Psicología: Acción principal obvia */}
          <div 
            className={`mt-12 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* CTA Primario - Action oriented, no "explorar" sino "descubrir" */}
            <Link
              href="#catalogo"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-emerald-600 to-emerald-700 px-9 py-4 text-[15px] font-semibold text-white shadow-lg shadow-emerald-900/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-900/35 active:scale-[0.98]"
            >
              <span className="relative z-10 tracking-wide">Descubre la colección</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Shimmer effect sutil al hover */}
              <div className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
            </Link>
            
            {/* CTA Secundario - Conecta con la comunidad */}
            <Link
              href="https://instagram.com/la_huella_de_puri"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200/80 bg-white/90 px-9 py-4 text-[15px] font-semibold text-gray-900 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-gray-300 hover:bg-white hover:shadow-lg active:scale-[0.98]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="tracking-wide">Síguenos en Instagram</span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Micro-copy de confianza - Psicología: Reducir fricción */}
          <p 
            className={`mx-auto mt-8 max-w-md text-center text-xs text-gray-400 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Envío seguro garantizado
            </span>
            <span className="mx-2">·</span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Satisfacción y profesionalidad
            </span>
          </p>

          {/* Scroll indicator animado - Solo visual, no invasivo */}
          <div 
            className={`mt-20 flex justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="group flex cursor-pointer flex-col items-center gap-3 transition-all duration-500 hover:gap-4">
              <span className="text-[11px] font-medium uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
                Desliza para ver más
              </span>
              <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-300 p-1.5 transition-colors duration-300 group-hover:border-gray-400">
                <div className="h-1.5 w-1.5 animate-scroll-down rounded-full bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
          }
          80% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 0;
          }
        }
        
        .animate-scroll-down {
          animation: scroll-down 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}