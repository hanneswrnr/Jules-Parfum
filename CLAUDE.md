# Projekt: High-End Website für "Jules Parfum" (Unabhängige Chogan-Vertriebspartnerin)

## 1. Projektübersicht & Tech-Stack
Du bist ein Senior Frontend-Entwickler und UI/UX-Experte, spezialisiert auf hochkonvertierende, ultra-moderne Websites mit "Apple-like" Scroll-Animationen. Deine Aufgabe ist der Aufbau einer Lead-Gen/E-Commerce Landingpage für das Unternehmen **"Jules Parfum"**.
- **Primäres Ziel:** Besucher faszinieren, die Produktvorteile kommunizieren und Leads/Verkäufe generieren.
- **Core Tech-Stack:** - **Framework:** Next.js (App Router, React)
  - **Sprache:** TypeScript (Strict Mode aktiviert)
  - **Styling:** Tailwind CSS (für schnelles, responsives Design)
  - **Animationen:** GSAP (GreenSock) inkl. ScrollTrigger Plugin
  - **Smooth Scrolling:** Lenis (Studio Freight) - ESSENTIELL für das flüssige Apple-Scroll-Erlebnis
  - **Formulare:** React Hook Form + Zod (für typsichere Validierung der Kontaktanfragen)

## 2. Branding, Assets & Rechtliches (STRIKT BEACHTEN)
- **Hauptmarke ist "Jules Parfum":** Das gesamte Branding der Website läuft über den Namen "Jules Parfum". 
- **Rolle von Chogan:** Die Kundin ist NICHT das Unternehmen Chogan selbst. Sie ist eine "Unabhängige Chogan Vertriebspartnerin". Die Marke "Chogan" (und die Produktlinie "Olfazeta") wird **nur** als Produktlieferant und zur Erklärung der Qualität erwähnt. Dieser rechtliche Hinweis muss im Footer und im Impressum deutlich sichtbar sein.
- **Assets:** Alle Logos (Jules Parfum), Favicons, und spezifische Bilder/Videos liegen lokal im Projektordner (z. B. unter `/public`) bereit. Verwende entsprechende Pfad-Referenzen.

## 3. Design-Philosophie & Animationen
- **Visuals:** Ultra-modern, luxuriös, extrem clean. Viel "White Space" für eine High-End-Wirkung.
- **Farbgebung:** Helle Grundtöne (Weiß, Off-White, Creme) mit sehr dezenten Akzenten.
- **Mikro-Interaktionen:** Button-Hover-Effekte (magnetisch, sanftes Füllen), weiches Einblenden von Texten (Fade-In-Up mit GSAP).
- **Typografie:** Elegante, gut lesbare Sans-Serif-Schriften für den Body, eventuell eine edle Serif-Schrift für prägnante Headlines.

## 4. Die Hero-Sektion: Das Canvas-Scroll-Video (KRITISCHES FEATURE)
- **Konzept:** Wir implementieren eine "Image Sequence Scroll Animation" exakt wie bei Apple. Ein Video (z. B. eine sich drehende Parfumflasche) wird beim Scrollen vor- und zurückgespult.
- **Technische Umsetzung in TypeScript:**
  - Nutze ein `<canvas>`-Element.
  - Das Video liegt als vorgerenderte Bildsequenz (Frames) im Projektordner vor.
  - **Preloading-Logik:** Schreibe einen robusten Image-Preloader in TypeScript, der sicherstellt, dass alle Frames im Cache sind, bevor die Animation startet.
  - **ScrollTrigger:** Verknüpfe die GSAP ScrollTrigger-Fortschrittsleiste mit dem Array-Index der Bilderfolge.
  - **Performance:** Nutze `requestAnimationFrame` für das Zeichnen auf dem Canvas (60fps Ziel).

## 5. Kernargumente der Produkte (Fakten für die Copy)
[cite_start]Diese Argumente müssen überzeugend in die UI-Elemente übersetzt werden[cite: 1, 2, 5, 6, 8, 9, 10]:
- [cite_start]**Das Geheimnis des Preises:** "Bezahle den Inhalt, nicht die Marke!"[cite: 32]. [cite_start]Kein Geld für teure TV-Werbung, keine teuren Flakons und Verpackungen, Direktvertrieb[cite: 53, 54, 55, 56, 57].
- [cite_start]**Die Herkunft:** Partnerschaft mit dem führenden französischen Hersteller "Fragworld"[cite: 67, 68]. [cite_start]Keine Kopien, sondern Original-Duftessenzen[cite: 28, 70, 73, 84].
- **Die Zusammensetzung (Extrait de Parfum):**
  - [cite_start]30% Duftessenz[cite: 6].
  - [cite_start]70% Bio-Alkohol[cite: 8].
  - [cite_start]0% Wasserzusatz [cite: 9] [cite_start](Große Marken fügen Wasser hinzu, weshalb die Intensität schneller nachlässt [cite: 75]).
- **Haltbarkeit:** Hält extrem lange, ca. [cite_start]6-10 Stunden [cite: 10, 76] [cite_start](im Vergleich zu 4-5 Stunden bei herkömmlichen Marken [cite: 15, 75]).
- [cite_start]**Zertifizierungen & Verträglichkeit:** 100% vegan, tierversuchsfrei, ohne Parabene[cite: 90]. [cite_start]Hypoallergen [cite: 18] [cite_start]und zertifiziert (Biocertitalia)[cite: 91].
- [cite_start]**Good to know:** Die Parfums müssen vor Gebrauch nicht geschüttelt werden (das kann den Duft verändern)[cite: 24, 25].

## 6. Struktur der Landingpage (Mobile-First)
1. **Hero-Bereich:** Fixiertes Canvas (Scroll-Sequence), Overlay-Text ("Jules Parfum - Finde deinen Signatur-Duft"), starker CTA.
2. **Die Revolution:** Warum unsere Preise unschlagbar sind.
3. [cite_start]**Qualität, die man spürt (Feature-Grid):** Animiertes Grid mit den Fakten (30% Essenz, vegan, Fragworld, kein Wasser)[cite: 6, 9, 68, 90].
4. **Über Jules Parfum:** Persönliche Vorstellung der Inhaberin, Kontakt-Button.
5. **So einfach geht's (3 Steps):** 1. Anfrage senden -> 2. Duftliste erhalten -> 3. Genießen.
6. **Kontakt / Lead-Formular:** Typsicheres Formular zur Generierung von Anfragen.
7. **Footer:** Impressum, Datenschutz, Social Media, Hinweis "Unabhängige Chogan Vertriebspartnerin".

## 7. TypeScript & Clean Code Guidelines
- Definiere strikte Interfaces/Types für alle Komponenten-Props und GSAP-Referenzen.
- Lagere die Preloading-Logik aus.
- Achte auf Barrierefreiheit (a11y).