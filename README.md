## ⚠️ Copyright & Usage Restrictions

© 2026 Sanjith Ganesh. All Rights Reserved.

This repository and all its contents (including code, design, text, and assets) are proprietary and protected by copyright law.  
No permission is granted to use, copy, modify, distribute, publish, or deploy any part of this project without explicit written consent from the owner.

Unauthorized use is strictly prohibited.

Here’s a clean, GitHub-ready `README.md` for your portfolio website (based on your `index.html`, `styles.css`, and `/assets` contents). Copy-paste this into a new file named **README.md** in your repo root.

````md
# Sanjith • Portfolio (SAGA.)

A fun, pixel-themed **personal portfolio website** built with **HTML + CSS + Vanilla JavaScript**.  
Includes sections for **About**, **Experience**, **Projects**, **Skills**, and **Contact**, with interactive UI elements like a project “arcade”, skill tabs, toast messages, confetti, and a “trippy” mode.

---

## ✨ Features

- **Pixel / arcade UI theme** (Press Start 2P + Inter)
- **Sticky navigation** with smooth scrolling
- **About section** with a profile card + floating emoji layer
- **Experience section** with role cards and company logos
- **Project Arcade**
  - Hover shows the *real resume title*
  - Click expands project details using `<details>` / `<summary>`
  - GitHub links for each project (where available)
- **Skill Station**
  - Tabbed categories (Languages / Databases / Frameworks / Tools & Domains)
  - Star ratings + hover animations
- **Fun Zone**
  - 🎉 Confetti blast (canvas animation)
  - 🌈 “Trip mode” (CSS hue rotate + sway)
  - 😏 Toast prank message
  - 📄 Resume button (opens PDF)
- **Contact section**
  - Mailto links + LinkedIn + GitHub
- **Responsive layout** (mobile-friendly breakpoints)

---

## 🧱 Tech Stack

- **HTML5**
- **CSS3** (CSS variables, animations, responsive design)
- **Vanilla JavaScript** (toast + confetti + trip mode)
- **Google Fonts**: Press Start 2P, Inter

---

## 📁 Project Structure

```bash
Portfolio-Website-main/
├─ index.html
├─ styles.css
└─ assets/
   ├─ zzzz.jpeg
   ├─ csc.png
   ├─ saafe.jpg
   ├─ rutgers.png
   ├─ nutriton organics.avif
   ├─ Sanjith_Ganesh_Resume.pdf
   └─ ...
````

---

## 🚀 Run Locally

### Option 1: Open directly

Just open `index.html` in your browser.

### Option 2: Run a local server (recommended)

**Python**

```bash
python -m http.server 8000
```

Then open:
`http://localhost:8000`

**VS Code**

* Install **Live Server**
* Right-click `index.html` → **Open with Live Server**

---

## 🛠️ Customization Guide

### Update profile image

In `index.html`, replace:

```html
<img class="photoMain" src="assets/zzzz.jpeg" alt="Sanjith" />
```

with your image filename in `/assets`.

### Replace resume

Put your PDF inside `/assets` and update:

```html
href="assets/Sanjith_Ganesh_Resume.pdf"
```

### Update links

* LinkedIn: `https://www.linkedin.com/in/sanjith-ganesh/`
* GitHub: `https://github.com/SanjithGanesh?tab=repositories`
* Email: `mailto:gsj2442@gmail.com`

### Add / edit projects

Projects are inside:

```html
<section id="projects"> ... </section>
```

Each project uses:

```html
<details class="projItem" data-full="Real Project Title">
  <summary>...</summary>
  <div class="projBody">
    ...
    <a class="gitLink" href="YOUR_GITHUB_LINK">...</a>
  </div>
</details>
```

### Change theme colors

In `styles.css`, tweak CSS variables under:

```css
:root { ... }
body.theme-blue { ... }
```

---

## 🌍 Deploy on GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment**

   * Source: **Deploy from a branch**
   * Branch: `main` (or `master`) and `/root`
4. Save → your site will be published

---

## 🧾 Credits / Notes

* Fonts loaded via **Google Fonts**
* Some contact icons are loaded from external sources (Wikimedia).
  If you want everything fully offline, download those icons into `/assets` and replace the image URLs.

---

## 📜 License

No license is included currently.
If you want this project to be reusable by others, consider adding an **MIT License**.

---

## 📬 Contact

* Email: `gsj2442@gmail.com`
* LinkedIn: [https://www.linkedin.com/in/sanjith-ganesh/](https://www.linkedin.com/in/sanjith-ganesh/)
* GitHub: [https://github.com/SanjithGanesh](https://github.com/SanjithGanesh)

```

If you want, I can also generate a **more “portfolio-like” README** with a hero banner, badges, and screenshot placeholders (while keeping it professional).
```
