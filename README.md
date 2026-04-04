# VCET — College Website (Full Stack)

> Official website for **Vidyavardhini's College of Engineering & Technology**, Vasai Road, Maharashtra.
> Built with **Django REST Framework** (backend) + **React + Vite** (frontend).

---

## 📁 Project Structure

```
vcet/
├── vcet_backend_fixed/      ← Django REST API (Python)
│   ├── departments/
│   ├── faculty/
│   ├── labs/
│   ├── placements/
│   ├── achievements/
│   ├── events/
│   ├── testimonials/
│   ├── notices/
│   ├── seed_data.py         ← loads sample data into DB
│   ├── manage.py
│   └── requirements.txt
│
└── vcet_frontend_fixed/     ← React App (JavaScript)
    ├── src/
    │   ├── pages/           ← Home, Departments, About, Admission, etc.
    │   ├── components/      ← Navbar, Footer, UI components
    │   ├── api/             ← Axios API calls
    │   └── hooks/           ← useFetch hook
    ├── package.json
    └── vite.config.js
```

---

## ⚙️ Prerequisites

Make sure you have these installed before starting:

| Tool | Version | Check |
|------|---------|-------|
| Python | 3.10+ | `python --version` |
| Node.js | 18+ | `node --version` |
| npm | 9+ | `npm --version` |

---

## 🚀 Getting Started

You need **two terminals open at the same time** — one for the backend, one for the frontend.

---

### Terminal 1 — Backend (Django)

```bash
# 1. Go into the backend folder
cd vcet_backend_fixed

# 2. Create a virtual environment
python -m venv venv

# 3. Activate it
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac / Linux

# 4. Install Python dependencies
pip install -r requirements.txt

# 5. Run database migrations
python manage.py migrate

# 6. Load sample data (departments, faculty, labs, placements, events...)
python seed_data.py

# 7. Start the backend server
python manage.py runserver 8000
```

✅ Backend is now running at → **http://localhost:8000**

---

### Terminal 2 — Frontend (React)

```bash
# 1. Go into the frontend folder
cd vcet_frontend_fixed

# 2. Install Node dependencies
npm install

# 3. Start the frontend dev server
npm run dev
```

✅ Frontend is now running at → **http://localhost:3000**

---

## 🌐 Open in Browser

| URL | What it is |
|-----|-----------|
| http://localhost:3000 | 🎓 College website (React) |
| http://localhost:8000/admin | 🔧 Django admin panel |
| http://localhost:8000/api/departments/ | 📡 Raw API data |

> **Note:** Both servers must be running at the same time for the website to work.

---

## 🔑 Admin Panel Setup

To manage content (add faculty, edit events, etc.) you need an admin account:

```bash
# Inside vcet_backend_fixed with venv activated
python manage.py createsuperuser
```

Then log in at **http://localhost:8000/admin** with your credentials.

---

## 📡 API Overview

The backend exposes these REST endpoints (all prefixed with `/api/`):

| Endpoint | Description |
|----------|-------------|
| `GET /api/departments/` | All departments |
| `GET /api/departments/code/CE/` | Single department by code |
| `GET /api/faculty/?dept=CE` | Faculty filtered by department |
| `GET /api/labs/?dept=CE` | Labs filtered by department |
| `GET /api/placements/` | Year-wise placement stats |
| `GET /api/placements/recruiters/` | Recruiter companies |
| `GET /api/achievements/` | College achievements |
| `GET /api/events/?upcoming=true` | Upcoming events |
| `GET /api/testimonials/?featured=true` | Alumni testimonials |
| `GET /api/notices/` | Scrolling notice bar data |

---

## 🗂️ Pages Available

| Route | Page |
|-------|------|
| `/` | Home — hero, departments, placements, events |
| `/departments` | All departments grid |
| `/departments/CE` | Department detail (tabs: Overview, Labs, Faculty, Achievements) |
| `/about` | About VCET, leadership, vision, contact |
| `/admission` | Courses, fee structure, documents required |
| `/placements` | Placement stats, recruiters, training |
| `/research` | Research areas, IIC, funded projects |
| `/facilities` | Campus facilities |
| `/student-life` | Clubs, events, sports |

---

## 🛠️ Tech Stack

**Backend**
- Python 3.10+
- Django 4.2+
- Django REST Framework
- django-cors-headers
- SQLite (development database)

**Frontend**
- React 18
- React Router v6
- Axios
- Vite 5

---

## ❓ Troubleshooting

**Frontend shows spinning loaders / "Failed to load"**
→ Backend is not running. Start it with `python manage.py runserver 8000`

**`no such table` error when running seed_data.py**
→ Run `python manage.py migrate` first, then `python seed_data.py`

**`npm run dev` fails with JSX error**
→ Delete `node_modules` and run `npm install` again

**Admin panel at localhost:3000/admin shows 404**
→ Admin is on the backend. Use **http://localhost:8000/admin** instead

**Port already in use**
```bash
# Change backend port
python manage.py runserver 8080

# Then update vite.config.js proxy target to http://localhost:8080
```

---

## 👨‍💻 Development Notes

- The frontend proxies all `/api/` and `/media/` requests to `localhost:8000` via `vite.config.js` — no CORS issues in development
- Seed data is safe to re-run — it clears and reloads all tables
- Media files (faculty photos, lab images) are stored in `vcet_backend_fixed/media/`
- To add new data, use the Django admin panel at `http://localhost:8000/admin`

---

*Built for VCET — Vasai Road, Maharashtra 401202*
