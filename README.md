# Astro Starter Template: ShadyLight

```sh
bunx create-astro@latest shadylight --template Frikadellios/shadylight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
    └── styles/* - with preconfig css files
    └── lib/* - with svelte components
    └── components/* - with react and astro components
    └── pages/*
    │    └── *.astro - with styles presets preview
    └── content/
          └── docs
              └── *.mdx - files with demo info

```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`                 | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun builder .`           | Use it command for controll prebuild image       |
| `bun updater .`           | Use it command for update all project            |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [astro documentation](https://docs.astro.build) or jump into astro [Discord server](https://astro.build/chat).
