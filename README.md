# Morgenhain Baugruppe Webseite

Static React + Vite website for the Morgenhain Baugruppe presentation.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact email

The static contact form opens a prepared email to:

```text
kontakt@morgenhain-baugruppe.de
```

Change the `contactEmail` constant in `src/main.jsx` before publication if a different recipient is required.

## Images

The current images in `public/assets/` are original local raster placeholders. `IMAGE_PROMPTS.md` contains ready-to-use `gpt-image-2` prompts for replacing them with generated architectural visuals once image generation is available.
