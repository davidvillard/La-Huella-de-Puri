"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const currency = (n) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(n);

function StockPill({ stock, available = false }) {
  // Si explicitly marcado como no disponible
  if (!available && (!stock || stock <= 0)) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium bg-red-50 text-red-600">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current"></span>
        Agotado
      </span>
    );
  }

  // Disponible con contador conocido
  if (typeof stock === "number" && stock > 0) {
    const tone =
      stock <= 3 ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700";
    const label = stock <= 3 ? `¡Quedan ${stock}!` : `En stock (${stock})`;
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${tone}`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current"></span>
        {label}
      </span>
    );
  }

  // Disponible, pero sin contador numérico
  if (available) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current"></span>
        Disponible
      </span>
    );
  }

  return null;
}

export default function ProductsComplete({ products: productsProp = null }) {
  const products = useMemo(() => productsProp, [productsProp]);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const addToCart = (p) => {
    setCart((c) => [...c, p]);
    setToast({ message: `${p.name} añadido al carrito`, ts: Date.now() });
  };

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <section className="flex flex-col gap-8">
      {/* Grid de productos */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-2xl"
          >
            {/* Imagen */}
            <div className="relative">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={product.image ?? product.image_url}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Badges */}
              <div className="pointer-events-none absolute inset-x-3 top-3 flex flex-wrap gap-2">
                {product.badges?.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold leading-tight text-gray-900">
                  {product.name}
                </h3>
                <StockPill stock={product.stock} available={product.available} />
              </div>

              <p className="line-clamp-2 text-sm text-gray-600">
                {product.description}
              </p>

              {/* Precio */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {currency(product.price)}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-1 flex items-center gap-2">
                <Link
                  href={!product.available ? '#' : `https://wa.me/34666999333?text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!product.available}
                  tabIndex={!product.available ? -1 : undefined}
                  className={`group relative inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#354A37] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#2e4030] hover:shadow-xl active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#354A37] ${
                    !product.available
                      ? 'cursor-not-allowed opacity-60 pointer-events-none'
                      : 'hover:cursor-pointer'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="font-semibold">Comprar ahora</span>
                  <svg
                    className="h-4 w-4 opacity-80 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href={`/productos/${product.id}`}
                  className="flex-[0.2] text-center rounded-2xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:cursor-pointer"
                >
                  Ver
                </Link>
              </div>
              {/* Trust bar */}
              <div className="mt-1 flex items-center gap-3 text-[11px] text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Entrega segura
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Pago seguro
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Snackbar */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-2xl"
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}