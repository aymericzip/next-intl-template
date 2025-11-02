"use client";

import { useFormatter, useTranslations } from "next-intl";
import { useState } from "react";

const ClientComponent = () => {
  // Scope directly to the nested object
  // useTranslations/useFormatter are hooks that read from NextIntlClientProvider context
  // They only work if the component is wrapped in NextIntlClientProvider
  const t = useTranslations("about.counter");
  const format = useFormatter();
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {t("label")}:
        </span>
        <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {format.number(count)}
        </span>
      </div>
      <button
        aria-label={t("label")}
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
      >
        {t("increment")}
      </button>
    </div>
  );
};

export default ClientComponent;
