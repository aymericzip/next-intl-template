# Next.js Internationalization with next-intl

This is a [Next.js](https://nextjs.org) project with complete internationalization (i18n) setup using [next-intl](https://next-intl-docs.vercel.app/).

## 🌍 Supported Languages

- 🇬🇧 English (default)
- 🇫🇷 French
- 🇪🇸 Spanish

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
.
├── locales/                    # Translation files
│   ├── en/
│   │   ├── common.json
│   │   └── about.json
│   ├── fr/
│   │   ├── common.json
│   │   └── about.json
│   └── es/
│       ├── common.json
│       └── about.json
└── src/
    ├── i18n.ts                # i18n configuration
    ├── middleware.ts          # Locale detection and routing
    ├── app/
    │   ├── [locale]/          # Dynamic locale routes
    │   │   ├── layout.tsx     # Root layout with locale
    │   │   ├── page.tsx       # Home page
    │   │   └── about/
    │   │       ├── layout.tsx # About metadata
    │   │       └── page.tsx   # About page
    │   ├── sitemap.ts         # Internationalized sitemap
    │   └── robots.ts          # Internationalized robots.txt
    └── components/
        ├── ClientComponentExample.tsx  # Client component with translations
        ├── ServerComponent.tsx         # Server component with translations
        └── LocaleSwitcher.tsx          # Language switcher
```

## 🎯 Key Features Implemented

### ✅ Complete i18n Setup
- **next-intl** integration with Next.js App Router
- Dynamic locale-based routing (`/`, `/fr`, `/es`)
- Automatic locale detection from browser settings
- Middleware for handling locale routing

### ✅ Translation Management
- Namespace-based translations (`common.json`, `about.json`)
- Code-splitting: only load translations needed per page
- TypeScript support for type-safe locales

### ✅ Components
- **Server Components**: Pre-translated content for optimal performance
- **Client Components**: Interactive components with translation hooks
- **Locale Switcher**: Beautiful, styled language selector with flags

### ✅ SEO Optimization
- Internationalized metadata (title, description)
- `hreflang` tags for alternate language versions
- Canonical URLs per locale
- Internationalized sitemap.xml
- Internationalized robots.txt

### ✅ Best Practices
- HTML `lang` and `dir` attributes set correctly
- Proper accessibility with ARIA labels
- Static page generation for all locales (SSG)
- Server-side rendering (SSR) support
- Type-safe locale configuration

## 🔧 How It Works

### Adding a New Language

1. Add the locale to `src/i18n.ts`:
```typescript
export const locales = ["en", "fr", "es", "de"] as const;
```

2. Create translation files:
```
locales/de/common.json
locales/de/about.json
```

3. Add to the locale switcher in `src/components/LocaleSwitcher.tsx`:
```typescript
const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
};

const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
  de: "🇩🇪",
};
```

### Adding Translations to a Page

**Server Components:**
```typescript
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

**Client Components:**
```typescript
"use client";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

### URL Structure

- English (default): `/`, `/about`
- French: `/fr`, `/fr/about`
- Spanish: `/es`, `/es/about`

## Dependencies

- `next` - Next.js framework
- `next-intl` - Internationalization library
- `lodash` - Utility functions (for `pick`)
- `@types/lodash` - TypeScript types for lodash

## 🔗 Useful Links

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Intlayer](https://github.com/aymericzip/intlayer) - For automated translations

## 📝 License

MIT

