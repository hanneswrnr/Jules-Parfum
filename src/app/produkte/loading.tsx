export default function ProductsLoading(): React.ReactElement {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header skeleton */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 h-3 w-20 animate-pulse rounded bg-accent/15" />
          <div className="mx-auto h-10 w-64 animate-pulse rounded bg-foreground/5" />
          <div className="mx-auto mt-4 h-4 w-96 max-w-full animate-pulse rounded bg-foreground/5" />
        </div>

        {/* Filter bar skeleton */}
        <div className="mb-10 flex justify-center gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 w-24 animate-pulse rounded-full bg-foreground/5" />
          ))}
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-foreground/5 bg-white/50">
              {/* Image placeholder */}
              <div className="aspect-square animate-pulse bg-foreground/5" />
              {/* Content placeholder */}
              <div className="p-5">
                <div className="mb-2 h-3 w-16 animate-pulse rounded bg-accent/15" />
                <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-foreground/8" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-foreground/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
