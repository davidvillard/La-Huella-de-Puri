"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function AdminUpload() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  // ...existing code...
  // Reemplazamos msg por notice con tipo
  const [notice, setNotice] = useState(null); // { type: 'success'|'info'|'error', text: string }
  const [session, setSession] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session ?? null);
    })();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  function noticeClass(type) {
    if (type === "success") return "bg-emerald-50 text-emerald-800 border border-emerald-200";
    if (type === "info") return "bg-amber-50 text-amber-800 border border-amber-200";
    return "bg-red-50 text-red-700 border border-red-200";
  }

  async function signIn(e) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setNotice({ type: "error", text: "Error al iniciar sesión" });
      return;
    }
    setNotice({ type: "success", text: "Sesión iniciada" });
    setEmail("");
    setPassword("");
  }

  async function signOut() {
    await supabase.auth.signOut();
    setNotice({ type: "info", text: "Sesión cerrada" });
  }

  function onPickFile(e) {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      setNotice({ type: "error", text: "Error: Selecciona una imagen" });
      return;
    }
    setLoading(true);

    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) {
      setLoading(false);
      setNotice({ type: "error", text: "Error: No autenticado. Inicia sesión primero." });
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    fd.append("name", name);
    fd.append("description", desc);
    fd.append("price", price);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: fd,
      headers: { Authorization: `Bearer ${token}` },
    });

    const text = await res.text();
    setLoading(false);
    if (!res.ok) {
      setNotice({ type: "error", text: "Error al subir producto" });
      return;
    }
    setNotice({ type: "success", text: "Producto subido correctamente" });
    setName("");
    setDesc("");
    setPrice("");
    setFile(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }


  if (!session) {
    return (
      <main className="bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-6 shadow-xl">
          <h1 className="classico-title text-2xl text-[#1c2a21] tracking-wide">Panel Admin</h1>
          <p className="mt-1 text-sm text-gray-600">Inicia sesión para subir productos.</p>

          <form onSubmit={signIn} className="mt-6 space-y-4">
            {notice && (
              <div className={`mt-1 rounded-xl px-3 py-2 text-sm ${noticeClass(notice.type)}`}>
                {notice.text}
              </div>
            )}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                placeholder="••••••••"
              />
            </div>

            <button
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#354A37] px-4 py-2.5 font-semibold text-white shadow-lg transition hover:bg-[#2e4030] active:scale-[0.98] disabled:opacity-60 hover:cursor-pointer"
            >
              {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              )}
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>


          <p className="mt-4 text-xs text-gray-500">
            Para pruebas, crea el usuario en Supabase → Authentication → Users.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="classico-title text-3xl text-[#1c2a21] tracking-wide">Subir producto</h2>
          <button onClick={signOut} className="text-sm text-red-600 hover:underline hover:cursor-pointer">Cerrar sesión</button>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-6 shadow-xl">
          {notice && (
            <div className={`mb-4 rounded-xl px-3 py-2 text-sm ${noticeClass(notice.type)}`}>
              {notice.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                  placeholder="Ej. Llavero de oso"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Precio (€)</label>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                placeholder="Escribe una breve descripción del producto"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Imagen</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="group cursor-pointer rounded-2xl border border-dashed border-gray-300 bg-gray-50/60 p-5 text-center transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onPickFile}
                />
                {preview ? (
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      width={192}
                      height={192}
                      src={preview}
                      alt="Vista previa"
                      className="w-auto h-auto max-w-xs rounded-xl object-cover shadow"
                    />
                    <span className="text-xs text-gray-600">Haz clic para cambiar la imagen</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-600">
                    <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 7.5L12 3m0 0L7.5 7.5M12 3v13.5" />
                    </svg>
                    <p className="text-sm">
                      Arrastra una imagen o <span className="font-semibold text-[#354A37]">haz clic para seleccionar</span>
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG o WEBP</p>
                  </div>
                )}
              </div>
            </div>

            <button
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#354A37] px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-[#2e4030] active:scale-[0.98] disabled:opacity-60 hover:cursor-pointer"
            >
              {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              )}
              {loading ? "Subiendo..." : "Subir producto"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

