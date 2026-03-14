export default function Loading(): React.ReactElement {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        {/* Animated logo pulse */}
        <div className="mx-auto mb-6 h-14 w-14 animate-pulse rounded-full bg-accent/20" />

        {/* Shimmer bar */}
        <div className="mx-auto h-1 w-24 overflow-hidden rounded-full bg-accent/10">
          <div className="h-full w-1/3 animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full bg-accent/40" />
        </div>
      </div>
    </div>
  );
}
