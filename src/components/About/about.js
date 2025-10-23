"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-24 sm:gap-24 min-[1150px]:grid-cols-[520px_minmax(0,1fr)] min-[1150px]:gap-20">
        <div className="order-2 min-[1150px]:order-1 justify-self-center min-[1150px]:justify-self-start">
          <Image
            src="/Blob-Dog-About.png"
            alt="Imagen de perro incrustada en una forma orgánica"
            width={477}
            height={644}
            priority
            sizes="(min-width:1280px) 477px, (min-width:1150px) 420px, (min-width:640px) 380px, 320px"
            className="block h-auto w-[320px] sm:w-[380px] min-[1150px]:w-[477px] max-w-full"
          />
        </div>

        <div className="order-1 min-[1150px]:order-2 space-y-6 min-[1150px]:space-y-10 text-center min-[1150px]:text-left">
          <header className="space-y-2">
            <h2 className="classico-title font-bold leading-tight tracking-tight text-[clamp(32px,8vw,80px)] text-[#000000]">
              La Huella de Puri
            </h2>
            <p className="font-light text-[clamp(16px,2.6vw,26px)] text-[#000000]">
              Algunas cosas hechas con corazón.
            </p>
          </header>

          {/* Cuerpo */}
          <p className="mx-auto min-[1150px]:mx-0 max-w-prose sm:max-w-[680px] min-[1150px]:max-w-[720px] leading-relaxed text-[#353535] text-[clamp(14px,1.6vw,16px)]">
            Piezas artesanas hechas con materiales como cuero, cerámica, resina
            epoxi y costura. Cada una es única, creada con esmero y lista para
            acompañarte siempre. Mi pasión nace de transformar materiales
            cotidianos en objetos que perduran y emocionan. Cada pieza se hace
            con mimo y dedicación, con la filosofía de preservar lo auténtico
            frente a lo masivo. Al elegir La Huella de Puri, no solo adquieres
            un objeto, sino una historia hecha a mano.
          </p>

          <div className="pt-2">
            <Button
              href="/contacto"
              variant="outline"
              className="mx-auto min-[1150px]:mx-0 inline-flex items-center gap-2 group"
            >
              <span className="font-medium text-[clamp(14px,1.8vw,18px)]">
                Contáctanos
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
