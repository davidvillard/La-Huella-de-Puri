import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req) {
  try {
    const auth = req.headers.get("authorization") || "";
    if (!auth.startsWith("Bearer ")) return new Response("Unauthorized", { status: 401 });
    const token = auth.split(" ")[1];

    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
    if (userErr || !userData?.user) {
      console.error("auth error:", userErr);
      return new Response("Unauthorized", { status: 401 });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail || userData.user.email !== adminEmail) {
      return new Response("Forbidden", { status: 403 });
    }

    const form = await req.formData();
    const file = form.get("file");
    const name = form.get("name");
    const description = form.get("description");
    const price = parseFloat(form.get("price") || "0");

    if (!file || !name) return new Response("Missing fields", { status: 400 });

    const filePath = `products/${Date.now()}_${file.name}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error: upErr } = await supabaseAdmin.storage
      .from("products")
      .upload(filePath, arrayBuffer, { contentType: file.type });

    if (upErr) {
      console.error("upload error:", upErr);
      return new Response(upErr.message, { status: 500 });
    }

    const { data } = supabaseAdmin.storage.from("products").getPublicUrl(filePath);
    const publicUrl = data?.publicUrl || `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/products/${filePath}`;

    const { error: dbErr } = await supabaseAdmin
      .from("products")
      .insert([{ name, description, price, image_url: publicUrl }]);

    if (dbErr) {
      console.error("db error:", dbErr);
      return new Response(dbErr.message, { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("unexpected error:", err);
    return new Response("Server error", { status: 500 });
  }
}