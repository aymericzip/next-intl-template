import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/i18n";

const origin = "https://example.com";

const formatterLocalizedPath = (locale: string, path: string) =>
	locale === defaultLocale ? origin + path : origin + "/" + locale + path;

// Generate sitemap with all locale variants for better SEO
// The alternates field tells search engines about language versions
export default function sitemap(): MetadataRoute.Sitemap {
	const homeLanguages = Object.fromEntries(
		locales.map((l) => [l, formatterLocalizedPath(l, "/")]),
	);

	const aboutLanguages = Object.fromEntries(
		locales.map((l) => [l, formatterLocalizedPath(l, "/about")]),
	);

	return [
		{
			url: formatterLocalizedPath(defaultLocale, "/"),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1.0,
			alternates: { languages: homeLanguages },
		},
		{
			url: formatterLocalizedPath(defaultLocale, "/about"),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
			alternates: { languages: aboutLanguages },
		},
	];
}
