# `@repo/ui`

Shared React component library for Project Camp, utilizing the official `@freecodecamp/ui` library as its foundation while providing an expandable monorepo adapter layer with integrated Storybook documentation.

## Features

- 🏕️ **freeCodeCamp UI Foundation**: Re-exports and wraps components from `@freecodecamp/ui`.
- 🎨 **Styles & Theming**: Integrated freeCodeCamp design system (`@freecodecamp/ui/dist/base.css`) with light and dark palette support.
- ⚡ **Tree-shakeable**: Modular subpath exports (`@repo/ui/button`, `@repo/ui/modal`, etc.) and barrel export (`@repo/ui`).
- 📚 **Storybook**: Integrated Storybook for interactive component development, testing, and documentation.

## Exported Components

- `Button` (`@repo/ui/button` or `@repo/ui`): Variants (`primary`, `danger`, `info`), sizes (`small`, `medium`, `large`), `block`, and polymorphic link support.
- `Modal` (`@repo/ui/modal` or `@repo/ui`): Accessible dialog modal with `Modal.Header`, `Modal.Body`, and `Modal.Footer`.
- `Panel` (`@repo/ui/panel` or `@repo/ui`): Content container with variants (`primary`, `info`, `danger`).
- `Alert` & `Callout` (`@repo/ui/alert` or `@repo/ui`): System alerts (`info`, `success`, `warning`, `danger`) and content callouts (`note`, `tip`, `warning`, `caution`).
- `FormGroup`, `ControlLabel`, `FormControl`, `HelpBlock` (`@repo/ui/form` or `@repo/ui`): Accessible form inputs and labels.
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` (`@repo/ui/tabs` or `@repo/ui`): Tabbed navigation primitives.
- `Quiz`, `QuizQuestion`, `useQuiz` (`@repo/ui`): Interactive quiz components from freeCodeCamp.
- `getThemingClass` (`@repo/ui`): Theming utility for palette switching.

## Storybook

Run Storybook locally:

```bash
pnpm --filter @repo/ui storybook
```

Build static Storybook:

```bash
pnpm --filter @repo/ui build-storybook
```

Navigation components are available through `@repo/ui/navigation-menu`, `@repo/ui/search-input`, `@repo/ui/language-switcher`, `@repo/ui/user-menu`, and `@repo/ui/logo`. Import `@repo/ui/styles.css` once in your app.

`LanguageSwitcher` accepts language options, the current value, and an `onChange` callback. Translation loading, locale persistence, routing, and document language updates belong to the larger i18n effort.

Stories live in `stories/<component>/<component>.stories.tsx`, separate from component source files.
