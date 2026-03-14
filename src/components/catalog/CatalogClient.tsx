"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
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

type SortOption = "name" | "price-asc" | "price-desc";

const sortLabels: Record<SortOption, string> = {
  name: "Name A\u2013Z",
  "price-asc": "Preis \u2191",
  "price-desc": "Preis \u2193",
};

const sortOptions: SortOption[] = ["name", "price-asc", "price-desc"];

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

/* ─── Custom Sort-Dropdown ────────────────────────────────── */

function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (v: SortOption) => void;
}): React.ReactElement {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent): void {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 rounded-xl border border-foreground/8 bg-white px-4 py-2 font-sans text-[12px] text-foreground/60 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_12px_rgba(201,169,110,0.06)]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {sortLabels[value]}
        <svg
          className={`h-3 w-3 text-foreground/30 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-xl border border-foreground/[0.06] bg-white py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
        role="listbox"
        aria-activedescendant={`sort-${value}`}
      >
        {sortOptions.map((opt) => (
          <button
            key={opt}
            id={`sort-${opt}`}
            type="button"
            role="option"
            aria-selected={value === opt}
            onClick={() => {
              onChange(opt);
              setOpen(false);
            }}
            className={`w-full px-4 py-2.5 text-left font-sans text-[13px] transition-all duration-200 ${
              value === opt
                ? "bg-accent/[0.08] font-medium text-accent"
                : "text-foreground/60 hover:bg-foreground/[0.03] hover:text-foreground/80"
            }`}
          >
            {sortLabels[opt]}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Parfum-Karte ─────────────────────────────────────────── */

function PerfumeCard({ perfume }: { perfume: Perfume }): React.ReactElement {
  const gradient = getFragranceGradient(perfume.fragranceNotes);
  const flaconImage = getFlaconImage(perfume.category, perfume.gender, perfume.number);
  const isMythologik = perfume.category === "mythologik";
  const isLuxury = perfume.category === "luxury";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/70 backdrop-blur-sm transition-all duration-700 will-change-transform hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(201,169,110,0.15),0_0_0_1px_rgba(201,169,110,0.1)] ${
        isMythologik
          ? "border-accent/30 hover:border-accent/40"
          : isLuxury
            ? "border-accent/15 hover:border-accent/25"
            : "border-white/60 hover:border-accent/20"
      }`}
    >
      {/* Bild-Bereich mit Gradient-Hintergrund */}
      <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-52 ${gradient}`}>
        <div className="relative h-30 w-22 transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-105 sm:h-40 sm:w-28">
          <Image
            src={flaconImage}
            alt={`Olfazeta ${perfume.name}`}
            fill
            className="object-contain drop-shadow-lg"
            sizes="112px"
          />
        </div>

        {/* Nummer-Badge oben links */}
        <span className="absolute top-3 left-3 rounded-lg bg-white/90 px-2 py-0.5 font-sans text-[10px] font-semibold tracking-widest text-foreground/60 shadow-sm backdrop-blur-md">
          Nr. {perfume.number}
        </span>

        {/* Gender + Category Badges oben rechts */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
          <span
            className={`rounded-lg px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider shadow-sm backdrop-blur-md ${
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
            <span className="rounded-lg border border-accent/20 bg-accent/20 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-accent shadow-sm backdrop-blur-md">
              Luxus
            </span>
          )}
          {isMythologik && (
            <span className="rounded-lg border border-accent/20 bg-accent/25 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-accent shadow-sm backdrop-blur-md">
              Limited
            </span>
          )}
        </div>

        {/* Duschgel-Badge */}
        {perfume.hasShowerGel && (
          <span className="absolute bottom-3 right-3 rounded-lg bg-white/80 px-2 py-0.5 font-sans text-[10px] text-foreground/50 shadow-sm backdrop-blur-md">
            +Duschgel
          </span>
        )}

        {/* Hover Shimmer Sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      </div>

      {/* Info-Bereich */}
      <div className="flex flex-1 flex-col px-5 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
        <h3 className="font-serif text-lg font-medium leading-tight tracking-tight text-foreground sm:text-xl">
          {perfume.name}
        </h3>

        {perfume.inspiredBy && (
          <p className="mt-0.5 font-sans text-[11px] font-medium text-accent/70 sm:mt-1 sm:text-[12px]">
            inspired by {perfume.inspiredBy}
          </p>
        )}

        <p className="mt-1.5 line-clamp-2 font-sans text-[12px] font-medium tracking-wide text-foreground/40 sm:mt-2 sm:text-[13px]">
          {perfume.fragranceNotes}
        </p>

        <div className="flex-1" />

        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-foreground/[0.04] pt-3 sm:mt-4 sm:pt-4">
          {perfume.variants.map((v) => (
            <div
              key={v.code}
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/[0.04] bg-foreground/[0.02] px-3 py-1.5"
            >
              <span className="font-sans text-[10px] text-foreground/35">
                {v.size}
              </span>
              <span className="font-sans text-[13px] font-semibold text-foreground">
                {formatPrice(v.price)}&euro;
              </span>
            </div>
          ))}
        </div>
        <p className="mt-1.5 font-sans text-[10px] text-foreground/30">
          inkl. MwSt., zzgl. Versandkosten
        </p>

        <Link
          href="/kontakt"
          aria-label={`${perfume.name} anfragen`}
          className="mt-3 flex items-center justify-center gap-2 rounded-full bg-foreground py-3 font-sans text-[12px] font-medium tracking-wide text-background transition-all duration-700 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_4px_24px_rgba(201,169,110,0.25)] sm:mt-4 sm:py-3.5 sm:text-[13px]"
        >
          Anfragen
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
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
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <div className="relative h-40 md:h-48">
        <Image
          src={info.image}
          alt={info.label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient}`} />
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
            {count} {count === 1 ? "Duft" : "Düfte"}
          </p>
          <h2 className="mt-1 font-serif text-2xl font-light tracking-tight text-white md:text-3xl">
            {info.label}
          </h2>
          <p className="mt-1.5 max-w-md font-sans text-[13px] leading-relaxed text-white/70 line-clamp-2">
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Filter-Sidebar Content (shared between desktop & mobile) ── */

interface FilterContentProps {
  search: string;
  setSearch: (v: string) => void;
  activeCategory: PerfumeCategory | "all";
  setActiveCategory: (v: PerfumeCategory | "all") => void;
  activeGender: Gender | "all";
  setActiveGender: (v: Gender | "all") => void;
  resetFilters: () => void;
  activeFilterCount: number;
}

function FilterContent({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  activeGender,
  setActiveGender,
  resetFilters,
  activeFilterCount,
}: FilterContentProps): React.ReactElement {
  return (
    <div className="space-y-6">
      {/* Suche */}
      <div>
        <label className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/30">
          Suche
        </label>
        <div className="group/search relative">
          <svg
            className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-foreground/25 transition-colors duration-300 group-focus-within/search:text-accent/60"
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
            placeholder="Duft, Marke, Note..."
            className="w-full rounded-xl border border-foreground/8 bg-white py-2.5 pr-8 pl-9 font-sans text-[13px] text-foreground shadow-sm placeholder:text-foreground/25 transition-all duration-300 focus:border-accent/30 focus:shadow-[0_0_12px_rgba(201,169,110,0.08)] focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute top-1/2 right-2.5 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/5 text-foreground/30 transition-colors hover:bg-accent/10 hover:text-accent"
            >
              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Trennlinie */}
      <div className="h-[1px] bg-foreground/[0.04]" />

      {/* Kategorie */}
      <div>
        <label className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/30">
          Kategorie
        </label>
        <div className="space-y-0.5">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 font-sans text-[13px] transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-accent/[0.08] font-medium text-accent"
                : "text-foreground/55 hover:bg-foreground/[0.03] hover:text-foreground/80"
            }`}
          >
            <span>Alle Düfte</span>
            <span className={`text-[11px] ${activeCategory === "all" ? "text-accent/60" : "text-foreground/25"}`}>
              {perfumes.length}
            </span>
          </button>
          {perfumeCategories.map((cat) => {
            const count = perfumes.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 font-sans text-[13px] transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent/[0.08] font-medium text-accent"
                    : "text-foreground/55 hover:bg-foreground/[0.03] hover:text-foreground/80"
                }`}
              >
                <span>{categoryInfo[cat].label}</span>
                <span className={`text-[11px] ${activeCategory === cat ? "text-accent/60" : "text-foreground/25"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trennlinie */}
      <div className="h-[1px] bg-foreground/[0.04]" />

      {/* Geschlecht */}
      <div>
        <label className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/30">
          Geschlecht
        </label>
        <div className="space-y-0.5">
          <button
            type="button"
            onClick={() => setActiveGender("all")}
            className={`flex w-full items-center rounded-xl px-3 py-2.5 font-sans text-[13px] transition-all duration-300 ${
              activeGender === "all"
                ? "bg-accent/[0.08] font-medium text-accent"
                : "text-foreground/55 hover:bg-foreground/[0.03] hover:text-foreground/80"
            }`}
          >
            <span className={`mr-3 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-300 ${activeGender === "all" ? "border-accent bg-accent" : "border-foreground/20"}`}>
              {activeGender === "all" && (
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </span>
            Alle
          </button>
          {allGenders.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setActiveGender(g)}
              className={`flex w-full items-center rounded-xl px-3 py-2.5 font-sans text-[13px] transition-all duration-300 ${
                activeGender === g
                  ? "bg-accent/[0.08] font-medium text-accent"
                  : "text-foreground/55 hover:bg-foreground/[0.03] hover:text-foreground/80"
              }`}
            >
              <span className={`mr-3 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-300 ${activeGender === g ? "border-accent bg-accent" : "border-foreground/20"}`}>
                {activeGender === g && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              {genderLabels[g]}
            </button>
          ))}
        </div>
      </div>

      {/* Filter zurücksetzen */}
      {activeFilterCount > 0 && (
        <>
          <div className="h-[1px] bg-foreground/[0.04]" />
          <button
            type="button"
            onClick={resetFilters}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/8 bg-white py-2.5 font-sans text-[12px] font-medium text-foreground/50 transition-all duration-300 hover:border-accent/30 hover:text-accent"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            Filter zurücksetzen
          </button>
        </>
      )}
    </div>
  );
}

/* ─── Mobile Filter Drawer ────────────────────────────────── */

function MobileFilterDrawer({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}): React.ReactElement {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent): void {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter"
        className={`fixed top-0 left-0 z-50 flex h-full w-[320px] max-w-[85vw] flex-col bg-background shadow-[4px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/[0.06] px-5 py-4">
          <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">Filter</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/[0.04] text-foreground/40 transition-colors hover:bg-foreground/[0.08] hover:text-foreground/70"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {children}
        </div>

        {/* Footer */}
        <div className="border-t border-foreground/[0.06] px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-foreground py-3 font-sans text-[13px] font-medium text-background transition-all duration-300 hover:bg-accent"
          >
            Ergebnisse anzeigen
          </button>
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
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeFilterCount =
    (activeCategory !== "all" ? 1 : 0) +
    (activeGender !== "all" ? 1 : 0) +
    (search.trim() ? 1 : 0);

  // ScrollTrigger-Positionen neu berechnen nach Layout-Änderungen
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory, activeGender, search]);

  // Initial refresh nach Mount (Sidebar-Layout braucht korrekte Berechnung)
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const resetFilters = useCallback(() => {
    setSearch("");
    setActiveCategory("all");
    setActiveGender("all");
    setSortBy("name");
  }, []);

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

  const filterContentProps: FilterContentProps = {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    activeGender,
    setActiveGender,
    resetFilters,
    activeFilterCount,
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
      {/* Hero */}
      <div className="relative mb-10 overflow-hidden rounded-3xl">
        <div className="relative h-72 md:h-96">
          <Image
            src="/images/catalog/hero-lifestyle.jpg"
            alt="Jules Parfum Kollektion"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1400px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,110,0.1)_0%,transparent_60%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center">
            <AnimatedText
              as="h1"
              className="font-serif text-5xl font-light tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl"
            >
              Unsere Produkte
            </AnimatedText>
            <ScrollReveal delay={0.3}>
              <div className="mx-auto mt-5 mb-1 h-[1px] w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-white/70 md:text-lg">
                Über {perfumes.length} Düfte zum Entdecken.
                Extrait de Parfum zum fairen Preis.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Sidebar + Content Layout */}
      <div className="flex gap-8">
        {/* ─── Desktop Sidebar ─────────────────────────────── */}
        <aside className="hidden w-[260px] shrink-0 lg:block">
          <div className="sticky top-[100px] rounded-2xl border border-foreground/[0.06] bg-white/60 p-5 shadow-sm backdrop-blur-sm">
            <FilterContent {...filterContentProps} />
          </div>
        </aside>

        {/* ─── Main Content ────────────────────────────────── */}
        <div className="min-w-0 flex-1">
          {/* Toolbar: Mobile Filter Button + Ergebnisse + Sort */}
          <div className="mb-6 flex items-center justify-between gap-3">
            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-foreground/8 bg-white px-4 py-2.5 font-sans text-[13px] font-medium text-foreground/60 shadow-sm transition-all duration-300 hover:border-accent/30 hover:text-foreground/80 lg:hidden"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
              Filter
              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="flex flex-1 items-center justify-end gap-3">
              <span className="font-sans text-[12px] text-foreground/30" aria-live="polite">
                {filtered.length} Ergebnisse
              </span>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          {/* Product Grid */}
          {groupedByCategory ? (
            <div className="space-y-16">
              {groupedByCategory.map(({ category, items }) => (
                <section key={category}>
                  <CategoryHeader category={category} count={items.length} />
                  <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
                    {items.map((perfume, i) => (
                      <ScrollReveal key={perfume.id} delay={i < 6 ? i * 0.05 : 0} distance={20} className="h-full">
                        <PerfumeCard perfume={perfume} />
                      </ScrollReveal>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
              {filtered.map((perfume, i) => (
                <ScrollReveal key={perfume.id} delay={i < 9 ? i * 0.04 : 0} distance={20} className="h-full">
                  <PerfumeCard perfume={perfume} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-foreground/[0.03]">
                <svg
                  className="h-10 w-10 text-foreground/15"
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
              <p className="font-serif text-3xl font-light text-foreground/25">
                Keine Düfte gefunden
              </p>
              <p className="mt-2 font-sans text-sm text-foreground/15">
                Versuche einen anderen Suchbegriff oder ändere die Filter.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-full border border-foreground/10 px-6 py-2.5 font-sans text-[13px] font-medium text-foreground/50 transition-all duration-300 hover:border-accent/30 hover:text-accent"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
      >
        <FilterContent {...filterContentProps} />
      </MobileFilterDrawer>

      {/* Beratungs-Banner */}
      <ScrollReveal delay={0.2}>
        <div className="group/banner relative mt-20 overflow-hidden rounded-3xl transition-all duration-700 hover:shadow-[0_8px_40px_rgba(201,169,110,0.12)]">
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <Image
              src="/images/alle/IMG_3797.jpeg"
              alt="Duftproben"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="relative z-10 max-w-lg text-center sm:text-left">
              <h2 className="font-serif text-3xl font-light tracking-tight text-white md:text-4xl">
                Welcher Duft passt zu dir?
              </h2>
              <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-white/60 sm:mx-0 sm:max-w-none">
                Schreib mir deine Vorlieben — welche Noten magst du? Frisch,
                holzig, blumig? Ich stelle dir eine persönliche Auswahl zusammen.
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-sans text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_4px_30px_rgba(201,169,110,0.4)]"
              >
                Persönliche Beratung anfragen
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/banner:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
