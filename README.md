# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



*Anime Emporium*

An immersive, anime inspired e‑commerce homepage built with React and TailwindCSS.  
This project transforms a traditional gallery layout into a lively shop interface for anime merchandise  figures, apparel, posters, and collectibles  designed to feel magical, narrative driven, and engaging.

---

 Features

- Hero Section: Bold anime‑styled introduction with call‑to‑action.
- About Section: Storytelling about the Emporium’s mission and fandom culture.
- New Arrivals: Grid showcasing the latest anime products.
- Gallery Highlight: Featured product spotlight with image and description.
- Product Grid: Modular layout for figures, apparel, posters, and accessories.
- Testimonials: Carousel of fan reviews with interactive navigation.
- Promo Banner (CTA): Email subscription with anime‑styled gradient button.
- Footer: Shop links, support info, and social media icons.

---

🛠 Tech Stack

- React – Component‑based UI library
- TailwindCSS – Utility‑first CSS framework for styling
- React Icons – Social and decorative icons
- Modular File Structure – Each section is a dedicated component for clarity and scalability

---

 Project Structure

`
src/
 ├── assets/
 │    └── images/        # Product & section images
 ├── components/
 │    ├── Hero.jsx
 │    ├── Section.jsx
 │    ├── NewSection.jsx
 │    ├── Gallery.jsx
 │    ├── New.jsx
 │    ├── Testimonials.jsx
 │    ├── CTA.jsx
 │    └── Footer.jsx
 ├── App.jsx             # Main entry point
 └── index.js            # React DOM render
`

---

 Getting Started

Prerequisites
- Node.js (v16+ recommended)
- npm or yarn package manager

Installation
`bash

Clone the repository
git clone https://github.com/your-username/anime-emporium.git

Navigate into the project
cd anime-emporium

Install dependencies
npm install
`

Run Development Server
`bash
npm run dev
`
Open http://localhost:5173 in your browser.

---

 Customization

- Replace images in src/assets/images/ with your own anime product visuals.
- Update product data in New.jsx for names, prices, and categories.
- Adjust Tailwind classes for colors, hover effects, and gradients to match your anime theme.

---

 Deployment

You can deploy easily with:
- Vercel
- Netlify
- GitHub Pages

---

 License

This project is open‑source under the MIT License.  
Feel free to customize and expand for your own anime shop or creative projects.

---

 Inspiration

This project was built as a school assignment with a focus on modularity, originality, and anime‑inspired design. Each section is treated like a chapter in a story, blending technical clarity with playful, expressive visuals.
