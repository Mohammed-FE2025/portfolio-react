# FrontEnd Portfolio

En responsiv portfolio byggd med React och TypeScript. Webbplatsen presenterar mina projekt, information om mig och olika sätt att kontakta mig.

## Funktioner

- Responsiv layout för mobil, surfplatta och desktop
- Startsida, Om mig, Projekt och Kontakt
- Projektkort med ikoner, beskrivningar, teknik-taggar och länkar
- Filtrering av projekt baserat på teknik
- Kontaktformulär med validering
- Länkar till e-post, GitHub och LinkedIn

## Tekniker

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Icons

## Kör projektet lokalt

Klona repot:

```bash
git clone https://github.com/Mohammed-FE2025/portfolio-react.git
```

Gå till projektmappen:

```bash
cd portfolio-react
```

Installera alla paket:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna sedan adressen som visas i terminalen. Den är vanligtvis:

```text
http://localhost:5173
```

## Tillgängliga kommandon

Starta utvecklingsservern:

```bash
npm run dev
```

Bygg projektet för produktion:

```bash
npm run build
```

Kontrollera koden med ESLint:

```bash
npm run lint
```

Starta produktionsversionen lokalt:

```bash
npm run preview
```

## Länkar

- GitHub-repository: https://github.com/Mohammed-FE2025/portfolio-react
- Live-version: https://portfolio-react-psi-topaz.vercel.app/
- Figma-design: https://www.figma.com/design/Aj9S07vGnEa7KtfktHwt0R/UX?node-id=0-1&p=f&t=zrWt8xaVKZ9Gf6Z7-0

## Reflektion

Portfolio är byggd som en React-baserad single-page application med TypeScript, Vite och React Router. Webbplatsen är uppdelad i flera komponenter och sidor för att skapa en tydlig och återanvändbar struktur. Jag har bland annat separerat navigation, sidfot, hero-sektion och projektdel.


Jag använder `useState` för flera interaktiva funktioner. Mobilmenyn använder state för att öppnas och stängas. Projektfiltret använder state för att hålla reda på vilken teknik som är vald. Kontaktformuläret använder också state för att lagra alla formulärfält i ett objekt och för att visa valideringsmeddelanden.


Jag har använt AI-verktyg som stöd för formulärvalidering och filtrering. Jag har sedan anpassat och testat lösningarna så att de passar projektets krav.
