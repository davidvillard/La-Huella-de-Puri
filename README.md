
# La Huella de Puri

Sitio web de comercio y catálogo artesanal construido con Next.js (app router), Tailwind CSS y Supabase. Incluye panel de administración para subir productos y una tienda pública con páginas de listado y detalle.

## Tecnologías
- Next.js (app router) — [src/app/layout.js](src/app/layout.js)
- React 19
- Tailwind CSS — [src/app/globals.css](src/app/globals.css)
- Supabase (client + service role) — [`supabase`](src/lib/supabaseClient.js), [`supabaseAdmin`](src/lib/supabaseAdmin.js)
- API route para subida de assets — [src/app/api/admin/upload/route.js](src/app/api/admin/upload/route.js)

## Estructura relevante
- Páginas principales:
  - Home: [src/app/page.js](src/app/page.js)
  - Catálogo: [src/app/productos/page.js](src/app/productos/page.js)
  - Detalle producto: [src/app/productos/[id]/page.js](src/app/productos/[id]/page.js)
  - Contacto: [src/app/contacto/page.js](src/app/contacto/page.js)
  - Panel admin (subida): [src/app/admin/page.js](src/app/admin/page.js)
- Componentes:
  - Banner: [`Banner`](src/components/Banner/banner.js)
  - Productos (listado): [`Products`](src/components/Products/products.js)
  - Grid de productos (componente usado en la página de catálogo): [`ProductsComplete`](src/components/ProductsComplete/productsComplete.js)
  - Hero dinámico: [`ProductsHero`](src/components/ProductsHero/productsHero.js)
  - About: [`About`](src/components/About/about.js)
  - Navbar / Footer: [`Navbar`](src/components/Navbar/navbar.js), [`Footer`](src/components/Footer/footer.js)
- Datos de ejemplo:
  - Productos locales: [src/data/productsData.js](src/data/productsData.js)
  - Pasos: [src/data/stepsData.js](src/data/stepsData.js)
- Configuración Next/Image remota: [next.config.mjs](next.config.mjs)
- Scripts y dependencias: [package.json](package.json)

## Requisitos y variables de entorno
Crea un fichero .env.local (no subir a VCS). Variables necesarias:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY (solo en servidor)
- ADMIN_EMAIL (email que podrá usar el panel admin)

El cliente Supabase usa [`supabase`](src/lib/supabaseClient.js) y las llamadas del servidor usan [`supabaseAdmin`](src/lib/supabaseAdmin.js).

## Uso / Desarrollo local

1. Instalar dependencias:
```sh
npm install
```

2. Levantar en desarrollo:
```sh
npm run dev
# abre http://localhost:3000
```

3. Construir para producción:
```sh
npm run build
npm start
```

Comandos definidos en: [package.json](package.json)

## Cómo funciona el panel admin y la subida de productos
- Autenticación: el panel de administración (ver [src/app/admin/page.js](src/app/admin/page.js)) usa autenticación Supabase. El flujo de login está implementado en ese archivo y usa el cliente [`supabase`](src/lib/supabaseClient.js).
- Subida: el formulario sube la imagen y los metadatos a la ruta API [src/app/api/admin/upload/route.js](src/app/api/admin/upload/route.js). El endpoint valida token de Supabase (Bearer) y compara el email con la variable ADMIN_EMAIL antes de subir a Storage y registrar en la tabla `products`.
- Si necesitas crear el usuario admin, hazlo desde el panel de Supabase → Authentication → Users.

## Notas de implementación y consejos
- El catálogo lee productos desde la tabla `products` usando [`supabaseAdmin`](src/lib/supabaseAdmin.js) en [src/app/productos/page.js](src/app/productos/page.js).
- Las imágenes públicas subidas se sirven desde el bucket `products` en Supabase Storage; `next.config.mjs` ya incluye el patrón remoto del host Supabase.
- Componentes y estilos están hechos con Tailwind; personaliza en [src/app/globals.css](src/app/globals.css).
- Si deseas soportar SSR/ISR o caché avanzado para el catálogo, agrega lógica en la página de productos donde ahora se realiza la query directa.

## Despliegue
- Vercel es una opción natural para Next.js. Asegúrate de configurar las variables de entorno en el panel de Vercel:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY
  - ADMIN_EMAIL

## Añadir un producto manualmente (alternativa)
Puedes insertar directamente en la tabla `products` desde Supabase Studio con al menos los campos:
- name, description, price, image_url, stock, available, badges

## Recursos y referencias rápidas (archivos clave)
- [src/lib/supabaseClient.js](src/lib/supabaseClient.js) — cliente público
- [src/lib/supabaseAdmin.js](src/lib/supabaseAdmin.js) — cliente server/service role
- [src/app/admin/page.js](src/app/admin/page.js) — UI de administración (subida)
- [src/app/api/admin/upload/route.js](src/app/api/admin/upload/route.js) — API de subida
- [src/app/productos/page.js](src/app/productos/page.js) — listado de productos
- [src/app/productos/[id]/page.js](src/app/productos/[id]/page.js) — detalle producto
- [package.json](package.json) — scripts y dependencias
- [next.config.mjs](next.config.mjs) — configuraciones de Next (imágenes)

## Licencia
- Repositorio por defecto sin licencia. Añade un archivo LICENSE si vas a publicar/compartir.

---

