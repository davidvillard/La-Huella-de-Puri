"use client";

import Image from "next/image";

export default function About() {
  return (
    <div
      className="
        mx-auto w-full h-fit
        flex flex-row items-center justify-between gap-40
        max-[1500px]:flex-col max-[1500px]:gap-32 max-[1500px]:px-4
      "
    >
      {/* Columna izquierda */}
      <div className="flex flex-col items-center w-full max-w-[680px] mx-auto gap-6">
        <div className="flex flex-col items-center gap-6">
          {/* Título responsive */}
          <h2
            className="
              text-center text-black classico-title font-bold leading-[120%]
              text-5xl md:text-6xl lg:text-6xl lg:text-[78px]
            "
          >
            @lahuelladepuri
          </h2>

          {/* Imagen principal responsive */}
          <Image
            src="/PostBolso.png"
            alt="Imagen de un bolso de cuero"
            width={305}
            height={372}
            className="w-full h-auto max-w-[250px] sm:max-w-[480px] md:max-w-[340px] lg:max-w-[350px]"
            sizes="(max-width: 640px) 85vw, (max-width: 1500px) 60vw, 610px"
            priority
          />
        </div>

        {/* Texto secundario responsive */}
        <div className="w-fit max-w-[640px] px-2">
          <p
            className="text-center text-black classico-title font-normal leading-[120%] text-[18px] sm:text-lg md:text-xl w-[250px] sm:w-[400px]">
            Visítanos en nuestro instagram y descubre nuestros productos
          </p>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="w-full max-w-[670px] mx-auto">
        {/* Grid responsive: 1 col en móvil, 2 cols desde sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="w-full">
              <Image
                src={`/Post${n}.png`}
                alt={`Imagen ${n}`}
                width={325}
                height={325}
                className="w-full h-auto rounded-[24px] object-cover aspect-square"
                sizes="(max-width: 640px) 95vw, (max-width: 1500px) 45vw, 325px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
