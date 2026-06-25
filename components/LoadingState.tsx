type LoadingStateProps = {
  message?: string;
};

const LoadingState = ({ message = "Loading listings..." }: LoadingStateProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-16"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-[#FF385C]" />
      <p className="text-sm text-neutral-500 md:text-base">{message}</p>
    </div>
  );
};

export default LoadingState;
