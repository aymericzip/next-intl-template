import Link from "next/link";
import { getFormatter, getTranslations } from "next-intl/server";
import ClientComponentExample from "@/components/ClientComponentExample";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ServerComponent from "@/components/ServerComponent";

export default async function AboutPage() {
	// Strictly server-side translations/formatting
	// These run on the server and can be passed as props to components
	const tAbout = await getTranslations("about");
	const tCounter = await getTranslations("about.counter");
	const format = await getFormatter();

	const initialFormattedCount = format.number(0);

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="w-full flex justify-between items-start">
					<Link
						href="/"
						className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
					>
						← Back to Home
					</Link>
					<LocaleSwitcher />
				</div>
				<div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left w-full">
					<h1 className="text-4xl font-bold text-black dark:text-zinc-50">
						{tAbout("title")}
					</h1>
					<p className="text-lg text-zinc-600 dark:text-zinc-400">
						{tAbout("description")}
					</p>

					<div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-8">
						<h2 className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
							Client Component Example
						</h2>
						<ClientComponentExample />
					</div>

					<div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-8">
						<h2 className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
							Server Component Example
						</h2>
						<ServerComponent
							formattedCount={initialFormattedCount}
							label={tCounter("label")}
							increment={tCounter("increment")}
						/>
					</div>
				</div>
				<div className="w-full pt-8" />
			</main>
		</div>
	);
}
