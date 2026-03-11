"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import {
  perfumes,
  categoryInfo,
  genderLabels,
  getFlaconImage,
  getFragranceGradient,
  type PerfumeCategory,
  type Gender,
  type Perfume,
} from "@/data/catalog";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const perfumeCategories: PerfumeCategory[] = [
  "luxury",
  "damen",
  "herren",
  "unisex",
  "event",
  "special",
  "mythologik",
  "kinder",
];

const allGenders: Gender[] = ["damen", "herren", "unisex"];

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

/* ─── Parfum-Karte ─────────────────────────────────────────── */

function PerfumeCard({ perfume }: { perfume: Perfume }): React.ReactElement {
  const gradient = getFragranceGradient(perfume.fragranceNotes);
  const flaconImage = getFlaconImage(perfume.category, perfume.gender, perfume.number);
  const isMythologik = perfume.category === "mythologik";
  const isLuxury = perfume.category === "luxury";

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(201,169,110,0.15)] ${
        isMythologik
          ? "border-accent/30"
          : isLuxury
            ? "border-accent/15"
            : "border-foreground/[0.06]"
      }`}
    >
      {/* Bild-Bereich mit Gradient-Hintergrund */}
      <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${gradient}`}>
        <div className="relative h-36 w-24 transition-transform duration-700 group-hover:scale-105">
          <Image
            src={flaconImage}
            alt={`Olfazeta ${perfume.name}`}
            fill
            className="object-contain drop-shadow-lg"
            sizes="96px"
          />
        </div>

        {/* Nummer-Badge oben links */}
        <span className="absolute top-3 left-3 rounded-full bg-white/80 px-2.5 py-1 font-sans text-[11px] font-semibold tracking-wider text-foreground/70 backdrop-blur-sm">
          Nr. {perfume.number}
        </span>

        {/* Gender + Category Badges oben rechts */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
          <span
            className={`rounded-full px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${
              perfume.gender === "damen"
                ? "bg-rose-500/15 text-rose-700"
                : perfume.gender === "herren"
                  ? "bg-blue-500/15 text-blue-700"
                  : "bg-violet-500/15 text-violet-700"
            }`}
          >
            {genderLabels[perfume.gender]}
          </span>
          {isLuxury && (
            <span className="rounded-full bg-accent/20 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
              Luxus
            </span>
          )}
          {isMythologik && (
            <span className="rounded-full bg-accent/25 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
              Limited
            </span>
          )}
        </div>

        {/* Duschgel-Badge */}
        {perfume.hasShowerGel && (
          <span className="absolute bottom-3 right-3 rounded-full bg-white/70 px-2 py-0.5 font-sans text-[10px] text-foreground/50 backdrop-blur-sm">
            +Duschgel
          </span>
        )}
      </div>

      {/* Info-Bereich */}
      <div className="flex flex-1 flex-col bg-white px-5 pt-4 pb-5">
        {/* Name */}
        <h3 className="font-serif text-lg font-medium leading-tight text-foreground">
          {perfume.name}
        </h3>

        {/* Inspired By */}
        {perfume.inspiredBy && (
          <p className="mt-1 font-sans text-[12px] italic text-accent/80">
            inspired by {perfume.inspiredBy}
          </p>
        )}

        {/* Duft-Noten */}
        <p className="mt-2 font-sans text-[13px] font-medium tracking-wide text-foreground/50">
          {perfume.fragranceNotes}
        </p>

        <div className="flex-1" />

        {/* Preise */}
        <div className="mt-3 flex flex-wrap gap-2 border-t border-foreground/5 pt-3">
          {perfume.variants.map((v) => (
            <div
              key={v.code}
              className="flex flex-col items-center rounded-lg bg-foreground/[0.02] px-3 py-1.5"
            >
              <span className="font-sans text-[11px] text-foreground/40">
                {v.size}
              </span>
              <span className="font-sans text-sm font-semibold text-foreground">
                {formatPrice(v.price)}&euro;
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/#kontakt"
          className="mt-3 block rounded-full bg-foreground py-2.5 text-center font-sans text-[13px] font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
        >
          Anfragen
        </a>
      </div>
    </div>
  );
}

/* ─── Kategorie-Header ─────────────────────────────────────── */

function CategoryHeader({
  category,
  count,
}: {
  category: PerfumeCategory;
  count: number;
}): React.ReactElement {
  const info = categoryInfo[category];

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl">
      <div className="relative h-48 md:h-56">
        <Image
          src={info.image}
          alt={info.label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient}`} />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            {count} {count === 1 ? "Duft" : "Düfte"}
          </p>
          <h2 className="mt-1 font-serif text-3xl font-light text-white md:text-4xl">
            {info.label}
          </h2>
          <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-white/70">
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Sticky Filter-Bar ────────────────────────────────────── */

function FilterBar({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  activeGender,
  setActiveGender,
  sortBy,
  setSortBy,
  totalCount,
}: {
  search: string;
  setSearch: (v: string) => void;
  activeCategory: PerfumeCategory | "all";
  setActiveCategory: (v: PerfumeCategory | "all") => void;
  activeGender: Gender | "all";
  setActiveGender: (v: Gender | "all") => void;
  sortBy: "name" | "price-asc" | "price-desc";
  setSortBy: (v: "name" | "price-asc" | "price-desc") => void;
  totalCount: number;
}): React.ReactElement {
  const barRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 1, rootMargin: "-1px 0px 0px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={barRef} className="h-0" />
      <div
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isSticky
            ? "-mx-6 border-b border-accent/10 bg-background/80 px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-4">
          {/* Zeile 1: Suche */}
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-foreground/25"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Duft, Marke oder Duftnote suchen..."
              className="w-full rounded-full border border-foreground/8 bg-white py-3 pr-10 pl-11 font-sans text-sm text-foreground shadow-sm placeholder:text-foreground/25 transition-all duration-300 focus:border-accent/30 focus:shadow-[0_0_20px_rgba(201,169,110,0.08)] focus:outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute top-1/2 right-3.5 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/5 text-foreground/30 transition-colors hover:bg-foreground/10 hover:text-foreground/60"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Zeile 2: Kategorien */}
          <div className="hide-scrollbar flex gap-1.5 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-full px-4 py-2 font-sans text-[13px] font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-foreground/[0.04] text-foreground/50 hover:bg-foreground/[0.08] hover:text-foreground/70"
              }`}
            >
              Alle Düfte
            </button>
            {perfumeCategories.map((cat) => {
              const count = perfumes.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 font-sans text-[13px] font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-foreground text-background shadow-sm"
                      : "bg-foreground/[0.04] text-foreground/50 hover:bg-foreground/[0.08] hover:text-foreground/70"
                  }`}
                >
                  {categoryInfo[cat].label}
                  <span className="ml-1 text-[11px] opacity-50">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Zeile 3: Gender + Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {(["all", ...allGenders] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setActiveGender(g)}
                  className={`rounded-full px-3.5 py-1.5 font-sans text-[12px] font-medium transition-all duration-300 ${
                    activeGender === g
                      ? "bg-accent/15 text-accent"
                      : "text-foreground/35 hover:bg-foreground/[0.04] hover:text-foreground/60"
                  }`}
                >
                  {g === "all" ? "Alle" : genderLabels[g]}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-sans text-[11px] text-foreground/25">
                {totalCount} Ergebnisse
              </span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "price-asc" | "price-desc")
                }
                className="rounded-full border border-foreground/8 bg-white px-3 py-1.5 font-sans text-[12px] text-foreground/50 shadow-sm focus:border-accent/30 focus:outline-none"
              >
                <option value="name">Name A–Z</option>
                <option value="price-asc">Preis ↑</option>
                <option value="price-desc">Preis ↓</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Haupt-Komponente ─────────────────────────────────────── */

export function CatalogClient(): React.ReactElement {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<PerfumeCategory | "all">("all");
  const [activeGender, setActiveGender] = useState<Gender | "all">("all");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");

  const filtered = useMemo(() => {
    let result = perfumes;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeGender !== "all") {
      result = result.filter((p) => p.gender === activeGender);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.inspiredBy?.toLowerCase().includes(q) ||
          p.fragranceNotes.toLowerCase().includes(q) ||
          p.number.toLowerCase().includes(q),
      );
    }
    if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price-asc") {
      result = [...result].sort(
        (a, b) => Math.min(...a.variants.map((v) => v.price)) - Math.min(...b.variants.map((v) => v.price)),
      );
    } else {
      result = [...result].sort(
        (a, b) => Math.min(...b.variants.map((v) => v.price)) - Math.min(...a.variants.map((v) => v.price)),
      );
    }

    return result;
  }, [search, activeCategory, activeGender, sortBy]);

  // Gruppiert nach Kategorie (für "Alle"-Ansicht)
  const groupedByCategory = useMemo(() => {
    if (activeCategory !== "all" || search.trim()) return null;

    const groups: { category: PerfumeCategory; items: Perfume[] }[] = [];
    for (const cat of perfumeCategories) {
      let items = perfumes.filter((p) => p.category === cat);
      if (activeGender !== "all") {
        items = items.filter((p) => p.gender === activeGender);
      }
      if (items.length > 0) {
        if (sortBy === "name") {
          items.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "price-asc") {
          items.sort(
            (a, b) => Math.min(...a.variants.map((v) => v.price)) - Math.min(...b.variants.map((v) => v.price)),
          );
        } else {
          items.sort(
            (a, b) => Math.min(...b.variants.map((v) => v.price)) - Math.min(...a.variants.map((v) => v.price)),
          );
        }
        groups.push({ category: cat, items });
      }
    }
    return groups;
  }, [activeCategory, activeGender, sortBy, search]);

  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Hero */}
      <div className="relative mb-12 overflow-hidden rounded-3xl">
        <div className="relative h-64 md:h-80">
          <Image
            src="/images/catalog/hero-lifestyle.jpg"
            alt="Jules Parfum Kollektion"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
            <AnimatedText
              as="h1"
              className="font-serif text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Duft-Katalog
            </AnimatedText>
            <ScrollReveal delay={0.3}>
              <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-white/60 md:text-base">
                Über {perfumes.length} Düfte zum Entdecken.
                Extrait de Parfum zum fairen Preis.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Filter-Bar */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeGender={activeGender}
        setActiveGender={setActiveGender}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalCount={filtered.length}
      />

      {/* Content */}
      <div className="mt-8">
        {groupedByCategory ? (
          /* Gruppierte Ansicht (wenn "Alle" gewählt und keine Suche) */
          <div className="space-y-16">
            {groupedByCategory.map(({ category, items }) => (
              <section key={category}>
                <CategoryHeader category={category} count={items.length} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((perfume) => (
                    <PerfumeCard key={perfume.id} perfume={perfume} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : filtered.length > 0 ? (
          /* Flache Ansicht (wenn Kategorie oder Suche aktiv) */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((perfume) => (
              <PerfumeCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        ) : (
          /* Leer-Zustand */
          <div className="py-24 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-foreground/[0.03]">
              <svg
                className="h-8 w-8 text-foreground/20"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <p className="font-serif text-2xl text-foreground/25">
              Keine Düfte gefunden
            </p>
            <p className="mt-2 font-sans text-sm text-foreground/15">
              Versuche einen anderen Suchbegriff oder ändere die Filter.
            </p>
          </div>
        )}
      </div>

      {/* Beratungs-Banner */}
      <ScrollReveal delay={0.2}>
        <div className="relative mt-20 overflow-hidden rounded-3xl">
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <Image
              src="/images/alle/IMG_3797.jpeg"
              alt="Duftproben"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="relative z-10 max-w-lg">
              <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
                Welcher Duft passt zu dir?
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/60">
                Schreib mir deine Vorlieben — welche Noten magst du? Frisch,
                holzig, blumig? Ich stelle dir eine persönliche Auswahl zusammen.
              </p>
              <a
                href="/#kontakt"
                className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-sans text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Persönliche Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
