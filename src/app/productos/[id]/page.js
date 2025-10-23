import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const currency = (n) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(n);

export default async function ProductoPage({ params }) {
  const { id } = await params;

  const { data: product, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  const hasStock = product.available === true || (typeof product.stock === "number" && product.stock > 0);
  const lowStock = typeof product.stock === "number" && product.stock > 0 && product.stock <= 3;
  const showLimitedBadge = typeof product.stock === "number" && product.stock > 0 && product.stock <= 5;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb minimalista */}
      <nav className="mx-auto max-w-7xl px-6 pt-8 sm:px-10 lg:px-16">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition hover:text-gray-900">Inicio</Link>
          <span className="text-gray-300">/</span>
          <Link href="/productos" className="transition hover:text-gray-900">Productos</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Imagen del producto - Estilo Apple */}
          <div className="relative">
            <div className="sticky top-30">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl">
                <Image
                  src={product.image_url || product.image || "/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Badges flotantes */}
                {product.badges && product.badges.length > 0 && (
                  <div className="absolute left-6 top-6 flex flex-col gap-2">
                    {product.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg backdrop-blur-xl"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#354A37]"></span>
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Información del producto */}
          <div className="flex flex-col gap-8">
            
            {/* Título y precio */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              
              {/* Stock indicator premium */}
              <div className="flex items-center gap-3">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  hasStock 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  <span className={`h-2 w-2 animate-pulse rounded-full ${
                    hasStock ? 'bg-emerald-500' : 'bg-red-500'
                  }`}></span>
                  {hasStock ? (
                    lowStock ? `¡Solo quedan ${product.stock}!` : 'Disponible'
                  ) : 'Agotado'}
                </div>
                
                {showLimitedBadge && (
                  <span className="text-sm font-medium text-red-600">
                    🔥 ¡Últimas unidades!
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-gray-900">
                  {currency(product.price)}
                </span>
                <span className="text-sm text-gray-500">IVA incluido</span>
              </div>
            </div>

            {/* Descripción */}
            <div className="space-y-4 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Descripción
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {product.description || "Producto de alta calidad diseñado para superar tus expectativas."}
              </p>
            </div>

            {/* Características destacadas */}
            <div className="space-y-4 rounded-3xl bg-gradient-to-br from-[#354A37]/5 to-[#354A37]/10 p-8">
              <h3 className="text-lg font-semibold text-gray-900">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#354A37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Materiales de primera calidad certificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#354A37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Garantía de satisfacción del 100%</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#354A37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soporte técnico dedicado</span>
                </li>
              </ul>
            </div>

            {/* CTAs principales */}
            <div className="sticky bottom-0 z-10 space-y-4 rounded-3xl bg-white/80 p-6 backdrop-blur-xl shadow-2xl shadow-black/10 sm:static sm:bg-transparent sm:p-0 sm:shadow-none">
              <Link
                href={!hasStock ? '#' : `https://wa.me/34666999333?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!hasStock}
                tabIndex={!hasStock ? -1 : undefined}
                className={`group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#354A37] px-8 py-5 text-lg font-semibold text-white shadow-lg shadow-[#354A37]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#2e4030] hover:shadow-xl hover:shadow-[#354A37]/40 active:scale-[0.98] ${
                  !hasStock
                    ? 'cursor-not-allowed bg-gray-300 shadow-none pointer-events-none'
                    : 'cursor-pointer'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative flex items-center justify-center gap-3">
                  {product.stock === 0 ? (
                    'Agotado'
                  ) : (
                    <>
                      Comprar ahora
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </Link>

              <Link
                href="/productos"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ver más productos
              </Link>

              {/* Urgencia psicológica */}
              {typeof product.stock === "number" && product.stock > 0 && product.stock <= 5 && (
                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                  <p className="text-sm font-semibold text-amber-900">
                    ⚡ {Math.floor(Math.random() * 15) + 8} personas están viendo este producto ahora
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}