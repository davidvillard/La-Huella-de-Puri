"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import products from "../../data/productsData";
import ArrowRight from "@/components/Icons/ArrowRight";
import Link from "next/link";

export default function Products() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Elemento decorativo de fondo */}

      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        {/* Header mejorado */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="inline-block">
              <span className="inline-block px-4 py-1.5 bg-[#354A37]/10 text-[#354A37] rounded-full text-sm font-semibold tracking-wide uppercase">
                Productos destacados
              </span>
            </div>
            <h2 className="classico-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight">
              Nuestros mejores
              <span className="block text-[#354A37]">productos</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mt-2">
              Descubre nuestra selección premium de productos artesanales de la más alta calidad
            </p>
          </div>
          
          <Button
            href="/productos"
            variant="outline"
            className="flex items-center gap-2 group max-[1024px]:hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span className="font-medium text-[18px] leading-[27px]">Explorar todo</span>
            <ArrowRight className="w-6 h-6 text-[#354A37] group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Grid mejorado con efectos hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
            
              {/* Imagen con overlay */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={348}
                  height={434}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Botón de acción en hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Link
                    href="/productos"
                    className="w-full inline-flex items-center justify-center bg-white text-[#354A37] py-3 rounded-xl font-semibold hover:bg-[#354A37] hover:text-white transition-colors duration-300 shadow-lg"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-col p-5 bg-gradient-to-b from-white to-gray-50/50">
                <h3 className="georgia font-semibold text-xl text-[#1E1E1E] text-center group-hover:text-[#354A37] transition-colors duration-300 leading-snug">
                  {product.title}
                </h3>
                
                {/* Indicador decorativo */}
                <div className="mt-3 mx-auto w-12 h-1 bg-[#354A37]/20 rounded-full group-hover:w-20 group-hover:bg-[#354A37] transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Botón inferior mejorado (mobile) */}
        <div className="flex justify-center min-[1025px]:hidden mt-4">
          <Button 
            href="/productos" 
            variant="outline" 
            className="flex items-center gap-2 group hover:shadow-xl transition-all duration-300 px-8 py-4"
          >
            <span className="font-medium text-[18px] leading-[27px]">Explorar todo</span>
            <ArrowRight className="w-6 h-6 text-[#354A37] group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}