# 🌐 Meen Bahadur Budha — Professional Portfolio

Welcome to the repository for my personal developer portfolio. This is a responsive, highly performant, and modern single-page application built using **React**, **Vite**, and **Tailwind CSS**. It showcases my projects, engineering skills, computer science certifications, and technical background as a Full-Stack Developer and DSA Enthusiast.

🔗 **Live Link:**(https://meen-budha.vercel.app) 

---

## ✨ Features

- **🚀 Lightning-Fast Loading**: Powered by Vite and optimized client-side routing.
- **🎨 Modern Dark Aesthetic**: Custom dark-mode color scheme with glassmorphism panels, interactive neon gradients, and high contrast typography.
- **📱 Responsive Layout**: Fully responsive interface optimized across mobile, tablet, and desktop screens.
- **✨ Micro-Animations**: Smooth entry animations on scroll (via Intersection Observer) and subtle hover scaling on navigation, cards, and custom elements.
- **🛡️ Production-Hardened Vercel Setup**: Integrated custom configurations for security headers (`X-Frame-Options`, `X-Content-Type-Options`, etc.) and SPA client-side route rewrites.
- **📦 Edge-Optimized Caching**: Setup for immediate delivery of hashed static assets using immutable CDN cache headers.
- **🏷️ SEO Friendly**: Pre-configured with meta tags for Open Graph preview and search engine visibility.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core**: [React.js](https://react.dev/) (Functional components & hooks)
- **Build Tool**: [Vite](https://vite.dev/) (For ultra-fast bundling and Hot Module Replacement)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (For utility-first styling and animations)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean and consistent SVG icons)
- **Deployment**: [Vercel](https://vercel.com/) (Serverless hosting with global Edge CDN caching)

---

## 📂 Project Structure

```text
my-portfolio/
├── public/
│   └── logo.svg          # Custom developer branding & favicon
├── src/
│   ├── assets/           # Media assets
│   ├── App.css           # Styling utilities override
│   ├── App.jsx           # Core page rendering & portfolio content
│   ├── index.css         # Tailwind directives and custom scrollbars
│   └── main.jsx          # App entrypoint
├── index.html            # Main HTML document & SEO Metadata
├── vercel.json           # Vercel routing & security configuration
├── package.json          # Dependency manifest
└── tailwind.config.js    # Tailwind customizable configurations
```

---

## ⚡ Getting Started (Local Development)

To run the portfolio locally on your machine, follow these instructions.

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Meenbudha/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal output).

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This generates a highly compressed `dist` directory containing static files ready for deployment.

---

## 📡 Deployment on Vercel

This repository is optimized for one-click deployment on **Vercel**:

1. Push your changes to your Git repository (GitHub/GitLab/Bitbucket).
2. Connect your Git repository in the Vercel Dashboard.
3. Vercel will automatically detect **Vite** and configure the build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy**. Vercel will automatically parse the `vercel.json` file in the root to handle SPAs routing and set proper cache-control configurations.

---

## 👨‍💻 Author

**Meen Bahadur Budha**
* B.Tech Computer Science & Engineering — Parul University
* Specialization: Full-Stack Development (MERN Stack, Java) & AI Systems
* Email: [meenbudha124@gmail.com](mailto:meenbudha124@gmail.com)
* LinkedIn: [meen-budha](https://www.linkedin.com/in/meen-budha)
* GitHub: [@Meenbudha](https://github.com/Meenbudha)
