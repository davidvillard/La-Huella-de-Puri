"use client";
import Image from "next/image";
import { steps } from "@/data/stepsData";

export default function Steps() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-18 sm:gap-18 md:gap-24 lg:gap-32">

        {/* Title */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h2
            className="
              classico-title font-bold text-center text-black
              text-5xl leading-tight
              sm:text-7xl sm:leading-[1.15]
              2xl:text-[86px] 2xl:leading-[120%]
            "
          >
            Tienes una idea?
          </h2>

          <p
            className="
              text-center text-black font-light
              text-lg leading-[1.4]
              sm:text-xl
              md:text-xl
              lg:text-2xl
              xl:text-[28px]
              2xl:text-[32px] 2xl:leading-[120%]
            "
          >
            ¡Coméntanos y la hacemos!
          </p>
        </div>

        {/* Steps */}
        <div className=" flex flex-col items-center w-full">
          <div
            className="
              grid w-fit
              grid-cols-1 gap-8
              sm:gap-10
              md:grid-cols-2 md:gap-x-14 md:gap-y-12
              lg:gap-x-20 lg:gap-y-14
              xl:gap-x-24
              2xl:gap-x-[89px]
            "
          >
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4 sm:gap-5 lg:gap-6 w-fit">
                <Image
                  src={step.imgSrc}
                  alt={step.imgAlt}
                  width={56}
                  height={56}
                  className="
                    shrink-0
                    w-10 h-10
                    sm:w-12 sm:h-12
                    md:w-12 md:h-12
                    lg:w-14 lg:h-14
                  "
                />
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3
                    className="
                      classico-title font-semibold text-black
                      text-xl leading-snug
                      sm:text-2xl
                      md:text-[28px]
                      lg:text-[32px]
                      xl:text-[36px]
                      2xl:text-[40px] 2xl:leading-[120%]
                    "
                  >
                    {step.title}
                  </h3>
                  <p
                    className="
                      text-black/70
                      text-sm leading-relaxed
                      sm:text-base
                      md:text-[15px]
                      lg:text-[16px] lg:leading-[150%]
                      max-w-prose md:max-w-[430px]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
