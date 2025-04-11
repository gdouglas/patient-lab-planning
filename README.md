# Product Documentation & Planning Tool

A modern web application for managing product documentation, wireframes, and architecture diagrams. Built with React, TypeScript, and modern web technologies.

## Features

- 📝 Markdown-based documentation editor
- 🎨 Simple wireframe editor
- 📊 PlantUML diagram integration
- 🎭 Smooth animations with Framer Motion
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gdouglas/patient-lab-planning.git
cd patient-lab-planning
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

The application is configured for deployment to GitHub Pages. To deploy:

1. Build the application:
```bash
npm run build
```

2. Deploy to GitHub Pages using the script:
```bash
./deploy.sh
```

Alternatively, run the build and deploy commands manually:
```bash
npm run build
npm run deploy
```

The application will be deployed to `https://gdouglas.github.io/patient-lab-planning/`.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- PlantUML
- React Router

## License

MIT
