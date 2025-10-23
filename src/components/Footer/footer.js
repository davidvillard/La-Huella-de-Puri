"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top */}
      <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-20">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="/LogoHeader.svg"
            alt="La Huella de Puri logo"
            width={207}
            height={207}
            sizes="(min-width:1024px) 207px, 160px"
            className="h-auto w-[160px] sm:w-[180px] lg:w-[207px]"
            priority
          />
        </div>

        {/* Bloque: Dirección + Información */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center gap-10 md:gap-16 lg:gap-28 text-center md:text-left">
          {/* Dirección y contacto */}
          <div className="flex flex-col gap-3">
            <p className="text-base sm:text-lg font-medium text-gray-900">
              Rua das cabanillas, 32,
              <br />
              Cangas del Morrazo,
              <br />
              España
            </p>
            <p className="text-gray-800">(+34) 666 999 333</p>
            <p className="text-gray-800">contact@lahuelladepuri.com</p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-600 hover:text-gray-900">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom */}
      <div className="mx-auto max-w-screen-xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Links legales */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-800">
          <Link href="/terminos" className="hover:text-gray-900">
            Términos y condiciones
          </Link>
          <Link href="/privacidad" className="hover:text-gray-900">
            Política de privacidad
          </Link>
          <Link href="/cookies" className="hover:text-gray-900">
            Política de cookies
          </Link>
        </div>

        {/* Redes */}
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} className="text-gray-800" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Facebook"
          >
            <FaFacebookF size={16} className="text-gray-800" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Twitter"
          >
            <FaTwitter size={16} className="text-gray-800" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
