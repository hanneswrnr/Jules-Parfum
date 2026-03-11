export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <h1 className="font-serif text-6xl font-light tracking-tight text-foreground">
        Jules Parfum
      </h1>
      <p className="mt-4 font-sans text-lg text-foreground/60">
        Finde deinen Signatur-Duft
      </p>
      <div className="mt-8 h-px w-24 bg-accent" />
    </main>
  );
}
