import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Define supported locales with type safety
export const locales = ["en", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isRTL(locale: Locale | (string & {})) {
	return /^(ar|fa|he|iw|ur|ps|sd|ug|yi|ckb|ku)(-|$)/i.test(locale);
}

// Load messages dynamically per locale to enable code-splitting
// Promise.all loads namespaces in parallel for better performance
async function loadMessages(locale: Locale) {
    // Load only the namespaces your layout/pages need
    const [common, home, about] = await Promise.all([
        import(`../locales/${locale}/common.json`).then((m) => m.default),
        import(`../locales/${locale}/home.json`).then((m) => m.default),
        import(`../locales/${locale}/about.json`).then((m) => m.default),
    ]);

    return { common, home, about } as const;
}

// Helper to generate localized URLs (e.g., /about vs /fr/about)
export function localizedPath(locale: string, path: string) {
	return locale === defaultLocale ? path : `/${locale}${path}`;
}

// getRequestConfig runs on every request and provides messages to server components
// This is where next-intl hooks into Next.js's server-side rendering
export default getRequestConfig(async ({ locale }) => {
	// Validate that locale is defined and in our supported locales
	if (!locale || !locales.includes(locale as Locale)) notFound();

	return {
		locale,
		messages: await loadMessages(locale as Locale),
	};
});


import {createNavigation} from 'next-intl/navigation';
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation({
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
    // Optional: localized pathnames
    // pathnames: {
    //   '/': '/',
    //   '/about': {en: '/about', fr: '/a-propos', es: '/acerca-de'},
    //   '/blog/[slug]': '/blog/[slug]'
    // }
  });

