# Modern React Portfolio - onurmertanarat.github.io

This repository contains the source code for my personal portfolio website, built from scratch using modern front-end technologies like React and Vite. The site is fully data-driven, responsive, and serves as a central hub for my projects and articles.

**Live Demo URL:** [https://onurmertanarat.github.io/](https://onurmertanarat.github.io/)

---

## Architectural Overview

This project was built from the ground up with a clean, scalable, and maintainable architecture. The core principle is the **separation of data and presentation**.

* **Data-Driven:** All dynamic content, such as the list of projects, skills, and articles, is stored in simple JavaScript data files (`src/data/`). This allows for easy updates without ever touching the component's logic.
* **Component-Based:** The UI is broken down into small, reusable components (e.g., `Navbar`, `Footer`, `ProjectCard`, `ArticleCard`) located in the `src/components/` directory.
* **Page-Based Routing:** Top-level views are organized in the `src/pages/` directory, with routing handled by `react-router-dom` to create a seamless Single Page Application (SPA) experience.

---

## Features

* **Modern Tech Stack:** Built with Vite for a fast and efficient development experience.
* **Fully Responsive:** The CSS is written to ensure a great user experience on all devices, from mobile phones to desktops.
* **Dynamic Content:** Projects, skills, and articles are rendered dynamically from a central data source using the `.map()` function.
* **Client-Side Routing:** Fast and smooth navigation between pages without full-page reloads, thanks to `react-router-dom`.
* **Clean & Maintainable Code:** A logical folder structure and a component-based approach make the codebase easy to understand and extend.

---

## Technology Stack

* **Framework/Library:** React
* **Build Tool:** Vite
* **Routing:** `react-router-dom`
* **Styling:** CSS3 (with Flexbox & Grid)
* **Deployment:** GitHub Pages

---

## Local Setup

To run this project on your local machine, follow these steps:

### Prerequisites

* Node.js (v16 or higher)
* npm

### Installation & Running

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/onurmertanarat/onurmertanarat.github.io.git](https://github.com/onurmertanarat/onurmertanarat.github.io.git)
    cd onurmertanarat.github.io
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

---

## Contact

Onur Mert Anarat

[linkedin.com/in/onurmertanarat](https://www.linkedin.com/in/onurmertanarat)
