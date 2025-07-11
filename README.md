# 🧑‍💼 Smart Manager Frontend

A modern, fast, and maintainable Human Resource Management System (HRMS) frontend built with **React**, **TypeScript**, and **Vite**.

This project helps HR teams manage employees, track leave, and view analytics — all from an intuitive web interface.

---

## 🚀 Tech stack

- ⚛️ **React** – for building interactive UIs
- 🔷 **TypeScript** – type safety & better DX
- ⚡ **Vite** – ultra-fast build & dev server
- 🎨 **CSS Modules** or **Tailwind** (optional) – for styling
- 🛠 **React Router** – for client-side routing (if needed)
- 📦 **React Context** – for global state management (e.g., auth)

---

## 🏗️ Project structure

```bash
.
├─ public/                # Static assets (e.g., favicon)
├─ src/
│  ├─ assets/            # Images, fonts, icons
│  ├─ components/       # Reusable UI components (e.g., Button, Modal)
│  ├─ pages/            # Route-level components (e.g., Dashboard, Employees)
│  ├─ routes/           # Route configs/components
│  ├─ hooks/            # Custom React hooks
│  ├─ utils/            # Helper functions & constants
│  ├─ types/            # TypeScript type definitions
│  ├─ contexts/        # React Context providers
│  ├─ styles/           # Global and modular styles
│  ├─ App.tsx           # Root React component
│  └─ main.tsx          # Entry point
├─ index.html            # Vite HTML template
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md