# MedicAI Inc. Recruitment Site

## What is this?
**Notice: This is a portfolio project created for demonstration purposes. "MedicAI Inc." is a fictional company.**

This is the modern recruitment website for **MedicAI Inc.**, designed to convey the company's mission of "Creating the future of medicine with technology". The site serves as the primary gateway for potential candidates (Engineers, PMs, etc.) to learn about the company's vision, services, and culture.

It features a polished, minimal aesthetic and smooth animations to reflect the company's "High Tech" and "Medical Trust" brand identity.

## Tech Stack
-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Content**: Mock CMS architecture (Simulating Headless CMS with local TypeScript data)

## Features
-   **Responsive Design**: Optimized for Mobile, Tablet, and Desktop.
-   **Dynamic Routing**: Career detail pages generated dynamically from mock data (`/careers/[slug]`).
-   **Modern UI**: Glassmorphism ease-in animations, and interactive cards.
-   **SEO Friendly**: Semantic HTML and proper metadata configuration.

## Project Structure
```
.
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── ui/               # Atomic UI components (Button, Card, etc.)
│   ├── layout/           # Global layout (Header, Footer)
│   └── sections/         # Page-specific sections (Hero, etc.)
├── lib/                  # Utilities and Mock CMS logic
├── public/               # Static assets (images, logos)
└── md/                   # Design documentation (Requirements, Basic Design)
```

## Getting Started

### Prerequisites
-   Node.js 18.17 or later

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation
For more detailed information about the project requirements and design, please refer to the documents in the `md/` directory:
-   [Requirements Definition](md/requirements_definition.md)
-   [Basic Design](md/basic_design.md)
-   [Detailed Design](md/detailed_design.md)

## Credits
This project was created entirely with **Gemini 3 Pro**.
