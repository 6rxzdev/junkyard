# Junkyard Simulator Wiki

A responsive static website prepared for Vercel. It uses plain HTML, CSS, and JavaScript, so no build command or package installation is required.

## Project structure

- `index.html` — website content and page structure
- `css/styles.css` — brown/cream theme, dark mode styles, responsive layout
- `js/main.js` — live search, theme toggle (saved in the browser), active sidebar link, and automatic copyright year
- `images/` — place your own `background.png` here to use a custom hero background
- `404.html` — friendly not-found page
- `vercel.json` — static deployment and security headers
- `robots.txt` — basic crawler rules

## Run locally

Open `index.html` in your browser. For a local web server, run `python -m http.server 8080` from this folder and visit `http://localhost:8080`.

## Deploy to Vercel

1. Extract this folder.
2. In Vercel, choose **Add New → Project** and import a Git repository containing these files, or use Vercel's supported CLI workflow.
3. Set the project framework preset to **Other** if asked.
4. Leave the build command empty and the output directory as `.` (the project root).
5. Deploy.

This is a static frontend; it does not need a backend server. The search and theme switch run in the visitor's browser. The game information and item values are the values supplied in the original HTML, not independently verified game data.

## Custom background

Add an image named `background.png` into `images/`. The hero uses a brown gradient fallback if the image is missing.
