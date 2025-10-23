import Products from "@/components/ProductsComplete/productsComplete";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import ProductsHero from "@/components/ProductsHero/productsHero";

export default async function ProductosPage() {
  const { data: products, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  console.log("Server — productos query error:", error);
  console.log("Server — productos count:", Array.isArray(products) ? products.length : products);

  const normalized = (products ?? []).map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description ?? "",
    price: p.price ?? 0,
    image_url: p.image_url ?? p.image ?? "",
    stock: typeof p.stock === "number" ? p.stock : 0,
    available: !!p.available,
    badges: Array.isArray(p.badges) ? p.badges : [],
    ...p,
  }));

  return (
    <main className="flex flex-col gap-12 sm:gap-16 md:gap-20 px-6 sm:px-10 md:px-16 py-10 md:py-12">
      <ProductsHero total={normalized.length} />

      <section id="catalogo">
        {normalized.length === 0 ? (
          <div className="mx-auto py-20 text-center text-gray-600">No hay productos. Pronto haremos mas! </div>
        ) : (
          <Products products={normalized} />
        )}
      </section>
    </main>
  );
}
