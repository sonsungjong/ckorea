# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Next.js frontend and a separate Visual Studio C/C++ solution.

- `src/app/`: Next.js App Router pages, layouts, and global CSS.
- `src/app/page.js`: entry page that links to lectures and quizzes.
- `src/app/lectures/page.js`: lecture index.
- `src/app/lectures/[dayId]/[step]/page.js`: lecture step route.
- `src/app/quizzes/page.js`: quiz index.
- `src/app/quizzes/[dayId]/page.js`: day-level quiz route.
- `src/components/`: reusable React components, including the client-side code viewer.
- `src/lib/courseData.js`: lecture and quiz registry with lookup helpers.
- `src/lib/lectures/dayN/`: C source files for day-level lecture steps, ordered with `01-` prefixes.
- `src/lib/quizzes/dayN.js`: day-level quiz data modules.
- `public/`: static SVG and favicon assets.
- `CProj/`: Visual Studio solution (`CProj.sln`) with C lecture examples and the `Calculator` C++ project.

There are currently no test directories or test files.

## Build, Test, and Development Commands

Use npm; `package-lock.json` is the authoritative lockfile.

- `npm run dev`: start the Next.js development server.
- `npm run build`: create a production build.
- `npm start`: run the production server after a successful build.
- `npm ci`: install dependencies from the lockfile.

No `test`, `lint`, or `format` script is currently configured.

## Coding Style & Naming Conventions

Use JavaScript modules and React function components. Follow the existing file naming style: route files are `page.js`/`layout.js`, components use PascalCase such as `CodeViewer.js`, and library modules use camelCase such as `courseData.js`.

Use the `@/*` import alias for paths under `src/*`. Styling uses Tailwind CSS 4 via `@import "tailwindcss"` in `src/app/globals.css`. Keep Korean text encoded as UTF-8.

React Compiler is enabled in `next.config.mjs`; avoid unnecessary manual memoization unless there is a measured need.

## Testing Guidelines

No testing framework or coverage target is defined. If adding tests, first add explicit tooling and npm scripts, then document the command here. Prefer colocated test names such as `Component.test.js` or route-level integration tests when a framework is introduced.

## Commit & Pull Request Guidelines

Git history does not establish a reliable commit convention. Use short, imperative commit messages, for example `Add lecture navigation` or `Fix code viewer copy state`.

Pull requests should include a concise summary, manual verification steps, screenshots for UI changes, and linked issues when applicable.

## Agent-Specific Instructions

This project uses Next.js 16.2.4. Before editing Next.js code, read the relevant guide in `node_modules/next/dist/docs/`; APIs and conventions may differ from older Next.js versions. If `node_modules` is missing, install dependencies before consulting those docs.

When editing `CProj/`, preserve Visual Studio `.vcxproj` include lists and platform settings unless the task explicitly requires project configuration changes.
