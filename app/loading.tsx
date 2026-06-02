export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex items-center gap-4 text-slate-100">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-blue-400" />
        <p className="text-sm tracking-wide text-slate-300">Loading ClientFlow...</p>
      </div>
    </div>
  );
}
