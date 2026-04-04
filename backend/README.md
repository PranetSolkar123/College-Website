# VCET Backend — Fixed & Complete

## Setup Instructions

### 1. Create virtual environment
```bash
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run migrations
```bash
python manage.py migrate
```

### 4. Load seed data (departments, faculty, labs, placements, events, etc.)
```bash
python seed_data.py
```

### 5. Create admin user (optional)
```bash
python manage.py createsuperuser
```

### 6. Start server
```bash
python manage.py runserver 8000
```

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/departments/ | List all departments |
| GET | /api/departments/code/CE/ | Department by code |
| GET | /api/departments/<id>/ | Department by ID |
| GET | /api/faculty/ | All faculty |
| GET | /api/faculty/?dept=CE | Faculty by department |
| GET | /api/faculty/hods/ | All HODs |
| GET | /api/labs/ | All labs |
| GET | /api/labs/?dept=CE | Labs by department |
| GET | /api/placements/ | Placement stats |
| GET | /api/placements/recruiters/ | Recruiter list |
| GET | /api/achievements/ | All achievements |
| GET | /api/achievements/?dept=CE | Achievements by dept |
| GET | /api/events/ | All events |
| GET | /api/events/?upcoming=true | Upcoming events |
| GET | /api/testimonials/ | All testimonials |
| GET | /api/testimonials/?featured=true | Featured only |
| GET | /api/notices/ | All active notices |
| GET | /api/notices/?category=Admission | By category |
| GET | /admin/ | Django admin panel |
