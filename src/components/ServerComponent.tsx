// Server components nested inside client components must be synchronous
// React can't serialize async functions across the server/client boundary
// Solution: pre-compute translations/formats in the parent and pass as props

type ServerComponentProps = {
  formattedCount: string;
  label: string;
  increment: string;
};

const ServerComponent = ({
  formattedCount,
  label,
  increment,
}: ServerComponentProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {label}:
        </span>
        <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {formattedCount}
        </span>
      </div>
      <button
        aria-label={label}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors cursor-not-allowed opacity-75"
        disabled
      >
        {increment} (Server Component - Static)
      </button>
    </div>
  );
};

export default ServerComponent;

