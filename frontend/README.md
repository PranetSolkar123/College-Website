# VCET Frontend — Fixed & Complete

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Runs at http://localhost:3000
API calls are proxied to http://localhost:8000

### 3. Build for production
```bash
npm run build
```

## Notes
- Make sure the Django backend is running on port 8000 first
- The vite.config.js proxies /api and /media to localhost:8000 automatically
