# Avalanger Frontend

## Requirements

- Node.js 20+ (or current LTS)
- npm

## Environment Setup

1. Copy `.env.example` to `.env`.

2. Set the backend base URL in `.env`:

```env
API_ROOT=http://localhost:8080
```

`API_ROOT` is used by the frontend server code for requests to the backend API.

## Run Locally

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.
