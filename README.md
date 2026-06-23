# 🌟 Navya Sri Edara - Professional Portfolio (Glassmorphism Edition)

Welcome! This repository contains the source code for my premium, interactive personal portfolio website designed with a cutting-edge **Glassmorphism UI** theme. 

This file serves as the master specification document. It is optimized for **GitHub Copilot / Copilot Workspace** to understand my professional background, sequential section requirements, and precise style guidelines to accurately generate the code for this repository.

---

## 🗺️ Navigation Bar Structure (One-by-One Order)

The website must feature a fixed top navigation bar layout that links smoothly to the following seven sections in this exact order:
1. **Personal Details** (Hero & Summary)
2. **Education**
3. **Technical Skills**
4. **Projects**
5. **Coding Platforms**
6. **Achievements**
7. **Contact**

---

## 🎨 Theme Specification: Glassmorphism UI

To achieve a true modern frosted-glass visual architecture, all layout surfaces (navigation bars, feature/skill cards, timeline blocks, and form containers) must implement specific translucent blending configurations over a vibrant background.

### Master CSS Blueprint for Copilot Generation

When generating or editing styles in `css/style.css`, use the following definitions as your foundational layout rules:

```css
:root {
    /* Vivid, deep gradient variables to maximize glass visibility */
    --bg-gradient-start: #0f172a; /* Dark slate */
    --bg-gradient-end: #1e1b4b;   /* Deep indigo accent */
    
    /* Pure Glass Structural Tones */
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-highlight: rgba(255, 255, 255, 0.2);
    --glass-shadow: rgba(0, 0, 0, 0.35);
    
    /* Typography & Accents */
    --text-primary: #f8fafc;
    --text-muted: #cbd5e1;
    --accent-color: #38bdf8;       /* Electric sky blue */
    --accent-success: #34d399;     /* Emerald green for badges */
}

/* Base body layout setup */
body {
    background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
    background-attachment: fixed;
    color: var(--text-primary);
    min-height: 100vh;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Core Glass Card Utility */
.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(16px) saturate(120%);
    -webkit-backdrop-filter: blur(16px) saturate(120%);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
    color: var(--text-primary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Interactive hover-state variant */
.glass-panel-interactive:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--glass-highlight);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
}