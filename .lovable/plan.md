## Objectif

Convertir le projet de **TanStack Start (SSR)** vers une **SPA React + Vite classique** avec `react-router-dom`.

## Étapes

1. **Dépendances**
   - Retirer : `@tanstack/react-router`, `@tanstack/react-start`, `@lovable.dev/vite-tanstack-config`, `@tanstack/react-router-devtools`, nitro-related.
   - Ajouter : `react-router-dom`, `@vitejs/plugin-react`, `vite-tsconfig-paths`.

2. **Config Vite** (`vite.config.ts`)
   - Config Vite standard : `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`, alias `@`, port 8080.

3. **Entrée SPA**
   - Créer `index.html` à la racine avec `<div id="root">` + `<script type="module" src="/src/main.tsx">`.
   - Créer `src/main.tsx` : `ReactDOM.createRoot(...).render(<BrowserRouter><App/></BrowserRouter>)`.
   - Créer `src/App.tsx` : `<Routes>` avec `/` → `HomePage`, `*` → NotFound. Wrap avec `I18nProvider` + `QueryClientProvider`.

4. **Router migration**
   - `src/components/site/Header.tsx` : `Link` de `@tanstack/react-router` → `react-router-dom` (`to` reste identique).
   - Supprimer `src/routes/`, `src/routeTree.gen.ts`, `src/router.tsx`, `src/start.ts`, `src/server.ts`, `src/lib/error-page.ts`.

5. **Head / SEO**
   - Mettre `<title>`, meta description, OG tags, favicon, Google Fonts directement dans `index.html`.

6. **Template Lovable**
   - Mettre à jour `.lovable/project.json` si nécessaire (sinon laisser — le sandbox détecte via `vite.config`).

## Détails techniques

- Aucun changement métier ni UI : seuls le routing et le bootstrap changent.
- `HomePage.tsx`, `Footer.tsx`, `i18n.tsx`, `styles.css`, assets : inchangés.
- Pas de SSR, pas de server functions → suppression totale du dossier `src/routes/api` s'il existe.
- 404 : simple composant redirigeant vers `/`.

Confirmez pour lancer la conversion.
