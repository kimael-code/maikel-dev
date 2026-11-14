# Portafolio — Maikel Carballo (`maikel-dev`)

[![Nuxt](https://img.shields.io/badge/Nuxt-4.6-00DC82?logo=nuxt&logoColor=white&labelColor=020420)](https://nuxt.com)
[![Nuxt UI](https://img.shields.io/badge/Nuxt%20UI-v4-00DC82?logo=nuxt&logoColor=white&labelColor=020420)](https://ui.nuxt.com)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-maikel--dev-000000?logo=vercel&labelColor=020420)](https://maikel-dev.vercel.app)

> **ES:** Portafolio personal bilingüe (Español / Inglés) de **Maikel Carballo**, Desarrollador Web Full Stack y Profesor de Informática. Construido con Nuxt 4, Nuxt UI v4 y Nuxt Content v3, optimizado para carga estática instantánea en Vercel.
>
> **EN:** Bilingual personal portfolio (Spanish / English) of **Maikel Carballo**, Full Stack Web Developer and IT Professor. Built with Nuxt 4, Nuxt UI v4, and Nuxt Content v3, optimized for static Edge delivery on Vercel.

🌐 **Sitio en producción / Live site:** [https://maikel-dev.vercel.app](https://maikel-dev.vercel.app)

---

## Características principales

- **Multiidioma (`ES` / `EN`) estático:** Rutas localizadas con `@nuxtjs/i18n` (`prefix_except_default`: `/` en inglés y `/es` en español), detección inicial del idioma por cookie y selector minimalista con *prefetching* ([`LanguageToggle.vue`](app/components/LanguageToggle.vue)).
- **Pre-renderizado completo en Nitro:** Todas las rutas (`/`, `/about`, `/projects`, `/es`, `/es/about`, `/es/projects`) y sus payloads se generan estáticamente durante el build para evitar *Cold Starts* en Vercel.
- **Sin dependencias nativas C++ en SQLite:** `@nuxt/content` utiliza el conector nativo `node:sqlite` (`sqliteConnector: 'native'`), evitando compilaciones con `node-gyp` o `better-sqlite3`.
- **Contenido tipado en YAML:** Páginas, proyectos, experiencia laboral, stack tecnológico y preguntas frecuentes validados mediante esquemas Zod en [`content.config.ts`](content.config.ts).
- **SEO y Open Graph:** `canonical` y etiquetas `hreflang` dinámicas (`useLocaleHead`), `sitemap.xml`, `robots.txt`, JSON-LD (`nuxt-schema-org`) y generación Open Graph con `nuxt-og-image` (`zeroRuntime: true`).
- **Seguridad y privacidad:** Cabeceras HTTP de seguridad en `routeRules` para Vercel (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`), activos visuales alojados localmente en `public/` en formato `.avif` y enlaces de contacto sin exposición directa de correo en el HTML.

---

## Stack tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Core** | [Nuxt 4](https://nuxt.com), [Vue 3](https://vuejs.org), [TypeScript](https://www.typescriptlang.org) |
| **UI y Estilos** | [Nuxt UI v4](https://ui.nuxt.com), [Tailwind CSS v4](https://tailwindcss.com), [Motion-V](https://motion.dev), `@iconify-json/lucide`, `@iconify-json/simple-icons` |
| **Contenido y Medios** | [Nuxt Content v3](https://content.nuxt.com) (`node:sqlite`), [Nuxt Image](https://image.nuxt.com) |
| **i18n y SEO** | `@nuxtjs/i18n`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `nuxt-schema-org`, `nuxt-og-image` |
| **Calidad** | `@nuxt/eslint`, ESLint (Stylistic), `vue-tsc` |

---

## Estructura del proyecto

```text
├── app/
│   ├── assets/css/          # Estilos globales y configuración Tailwind v4
│   ├── components/          # UI compartida, secciones de landing y LanguageToggle
│   ├── layouts/             # Layout principal (header + footer)
│   ├── pages/               # Vistas: index, projects, about
│   ├── utils/               # Navegación localizada y utilidades
│   ├── app.config.ts        # Configuración global, enlaces sociales y tema
│   ├── app.vue              # Metadatos globales, i18n head y Schema.org
│   └── error.vue            # Página de error localizada
├── content/
│   ├── en/                  # Contenido YAML en inglés (index, about, projects)
│   └── es/                  # Contenido YAML en español (index, about, projects)
├── i18n/locales/            # Diccionarios JSON de interfaz (en.json, es.json)
├── public/                  # Recursos estáticos (.avif, favicons, manifest)
├── content.config.ts        # Esquemas Zod de Nuxt Content
└── nuxt.config.ts           # Configuración de Nuxt, Nitro prerender, i18n y headers
```

---

## Requisitos previos

- **Node.js** `>= 22.5` (requerido para el módulo integrado `node:sqlite`)
- **pnpm** (`10.x`)

---

## Instalación y uso local

1. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

2. **Variables de entorno (opcional para builds locales):**

   Copia `.env.example` a `.env` si necesitas definir `NUXT_PUBLIC_SITE_URL` para pruebas locales de Open Graph / SEO.

3. **Iniciar el servidor de desarrollo en `http://localhost:3000`:**

   ```bash
   pnpm dev
   ```

---

## Scripts disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `pnpm lint` | Ejecuta ESLint sobre el proyecto. |
| `pnpm lint:fix` | Corrige automáticamente problemas de formato/estilo con ESLint. |
| `pnpm typecheck` | Verifica tipos con `nuxt typecheck` y `vue-tsc`. |
| `pnpm build` | Compila la aplicación y pre-renderiza todas las rutas estáticas. |
| `pnpm preview` | Sirve localmente la compilación de producción. |
| `pnpm release` | Genera una nueva versión siguiendo SemVer (`standard-version`). |

---

## Despliegue en Vercel

El proyecto se despliega directamente en **Vercel** mediante integración con Git:

- **Framework Preset:** Nuxt.js
- **Install Command:** `pnpm install`
- **Build Command:** `pnpm build`
- **Node.js Version:** `22.x` o superior (configurado para soportar `node:sqlite`)
- **Rutas y cabeceras:** Tanto el pre-renderizado (`nitro.prerender.routes`) como las cabeceras HTTP de seguridad (`routeRules['/**'].headers`) definidos en [`nuxt.config.ts`](nuxt.config.ts) se exportan automáticamente al generar la salida para Vercel.
