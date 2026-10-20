# Qissa Story Frames

> *Your digital memories, bound into physical chapters.*

An editorial photobook experience built with TanStack Start, React 19, Tailwind CSS, and Radix UI. Features interactive magazine flipbooks, chapter showcases, and direct enquiry integration.

## Features

- **Editorial Showcase**: Curated chapters for Travel, Love, Family, and Custom photobooks.
- **Interactive Magazine Flipbook**: Built-in realistic page-turning flipbook with responsive spread layouts.
- **Self-Contained Local Assets**: All imagery, magazine pages, and custom typography are bundled directly in the project without external cloud dependencies.
- **Vercel Ready**: Pre-configured Nitro output for zero-config Vercel SSR deployment.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) / [TanStack Router](https://tanstack.com/router)
- **UI Library**: React 19, Tailwind CSS v4, Radix UI
- **Build Tool**: Vite 8 & Nitro
- **Flipbook**: react-pageflip

## Getting Started

### Prerequisites

- Node.js (>= 20)
- npm or bun

### Local Development

```sh
git clone https://github.com/vedantnathani/qissa-story-frames.git
cd qissa-story-frames
npm install
npm run dev
```

The application will be running at `http://localhost:5173`.

### Production Build

```sh
npm run build
```

The build produces a deployment-ready `.vercel/output` for Vercel.

### Testing

```sh
npm test
```
