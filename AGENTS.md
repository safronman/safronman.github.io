<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Image placeholders

Do not invoke the `imagegen` skill or generate images for this project. When a design needs an image or other visual asset that has not been supplied by the user, use a semantic CSS/HTML placeholder instead: a rectangle or another appropriate simple shape with a short caption below it describing the asset that should be added.

## CSS Modules

When importing a CSS Module in a component, name the import `s` and use it in JSX (for example, `import s from "./component.module.css"` and `className={s.component}`). Do not use `styles` as the CSS Module import name.

## Task completion

After completing a task, always suggest a concise commit message in Conventional Commits format.
