"use client";
import { useState } from "react";

const ITEMS = [
    {
        q: "¿QUÉ TIPO DE PRODUCTOS VENDÉIS?",
        a: "Vendemos una selección cuidada de productos artesanales y sostenibles para el hogar y el cuidado personal.",
    },
    {
        q: "¿HACÉIS ENVÍOS A TODA ESPAÑA?",
        a: "Sí, enviamos a toda España peninsular y Baleares. Para Canarias, Ceuta y Melilla consulta condiciones especiales.",
    },
    {
        q: "¿PUEDO DEVOLVER UN PRODUCTO SI NO ESTOY SATISFECHO/A?",
        a: "Tienes 30 días desde la recepción para solicitar un cambio o devolución siempre que el producto esté en perfecto estado.",
    },
    {
        q: "¿QUÉ MÉTODOS DE PAGO ACEPTÁIS?",
        a: "Aceptamos tarjeta de crédito/débito y pagos seguros a través de plataformas habituales.",
    },
    {
        q: "¿TENÉIS TIENDA FÍSICA?",
        a: "Actualmente operamos online. Ocasionalmente participamos en pop-ups; lo anunciamos en redes.",
    },
];

function Arrow({ open }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${open ? "rotate-90" : ""
                } h-[clamp(18px,3vw,24px)] w-[clamp(18px,3vw,24px)]`}
        >
            <path
                d="M6 8h10v10M6 18L16 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FaqItem({ item, index, open, onClick }) {
    return (
        <div className="w-full">
            <button
                onClick={onClick}
                className="group cursor-pointer flex w-full items-center justify-between rounded-full border border-[#1c2a21]/40 px-4 py-4 sm:px-6 sm:py-5 text-left transition hover:bg-[#1c2a21]/[0.03] focus:outline-none"
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
            >
                {/* Título de la pregunta (fluido) */}
                <span className="text-[#1c2a21] tracking-[0.2em] leading-snug text-[clamp(12px,2.4vw,20px)]">
                    {item.q}
                </span>

                <span className="text-[#1c2a21]">
                    <Arrow open={open} />
                </span>
            </button>

            {/* Panel con animación */}
            <div
                id={`faq-panel-${index}`}
                className={`overflow-hidden transition-[grid-template-rows] duration-300 ${open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
                    }`}
            >
                <div className="min-h-0">
                    <div className="px-4 sm:px-6 pb-5 pt-3 leading-relaxed text-[#1c2a21]/80 text-[clamp(13px,2.2vw,18px)]">
                        {item.a}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
            {/* Título principal (fluido) */}
            <h2
                className="
    classico-title mb-12 text-center text-[#1c2a21] tracking-[0.2em]
    text-6xl
    sm:text-7xl
    lg:text-8xl
  "
            >
                FAQ
            </h2>

            <div className="space-y-3 sm:space-y-4">
                {ITEMS.map((item, i) => (
                    <FaqItem
                        key={i}
                        item={item}
                        index={i}
                        open={openIndex === i}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                ))}
            </div>

            <div className="h-6 sm:h-10" />
        </section>
    );
}
