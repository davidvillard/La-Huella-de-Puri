"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí puedes integrar tu lógica de envío (API, email service, etc.)
    console.log("Formulario enviado:", formData);
    
    // Simulación de envío
    setTimeout(() => {
      alert("¡Mensaje enviado con éxito! Te responderemos pronto.");
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:gap-16 lg:grid-cols-2">
        {/* Columna izquierda: Información y formulario */}
        <div className="order-2 lg:order-1 space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900">
              Hablemos
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-xl">
              ¿Tienes un pedido o una idea especial? Nos encantaría escucharte.
            </p>
          </div>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900 placeholder-gray-400"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900 placeholder-gray-400"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono <span className="text-gray-400">(opcional)</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900 placeholder-gray-400"
                placeholder="+34 600 00 00 00"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none text-gray-900 placeholder-gray-400"
                placeholder="Cuéntanos sobre tu pedido o idea..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>

          {/* Tarjetas de contacto alternativas */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-500 mb-4">O contáctanos directamente</p>
            <div className="space-y-3">
              <a
                href="mailto:lahuelladepuri@gmail.com"
                className="group flex items-center justify-between rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Email</p>
                    <p className="text-sm font-semibold text-gray-900">lahuelladepuri@gmail.com</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">WhatsApp</p>
                    <p className="text-sm font-semibold text-gray-900">+34 600 00 00 00</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://instagram.com/lahuelladepuri"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Instagram</p>
                    <p className="text-sm font-semibold text-gray-900">@lahuelladepuri</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/Contact-Image.jpg"
              alt="Perro"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sección de información adicional */}
      <div className="mt-24 pt-16 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Respuesta rápida
            </h3>
            <p className="text-gray-600">
              Respondemos en menos de 24 horas
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Atención personalizada
            </h3>
            <p className="text-gray-600">
              Cada pedido es único y especial
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Siempre disponibles
            </h3>
            <p className="text-gray-600">
              Contacta cuando lo necesites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}