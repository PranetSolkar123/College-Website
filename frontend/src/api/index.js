import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
})

// ── Departments ──────────────────────────────────────────────────────────────
export const fetchDepartments    = ()       => api.get('/departments/').then(r => r.data)
export const fetchDepartmentById = (id)     => api.get(`/departments/${id}/`).then(r => r.data)
export const fetchDepartmentByCode = (code) => api.get(`/departments/code/${code}/`).then(r => r.data)

// ── Faculty ──────────────────────────────────────────────────────────────────
export const fetchFaculty    = (dept) => api.get('/faculty/', { params: dept ? { dept } : {} }).then(r => r.data)
export const fetchFacultyById = (id)  => api.get(`/faculty/${id}/`).then(r => r.data)
export const fetchHODs       = ()     => api.get('/faculty/hods/').then(r => r.data)

// ── Labs ─────────────────────────────────────────────────────────────────────
export const fetchLabs    = (dept) => api.get('/labs/', { params: dept ? { dept } : {} }).then(r => r.data)
export const fetchLabById = (id)   => api.get(`/labs/${id}/`).then(r => r.data)

// ── Placements ───────────────────────────────────────────────────────────────
export const fetchPlacements = () => api.get('/placements/').then(r => r.data)
export const fetchRecruiters = () => api.get('/placements/recruiters/').then(r => r.data)

// ── Achievements ─────────────────────────────────────────────────────────────
export const fetchAchievements = (params) => api.get('/achievements/', { params }).then(r => r.data)

// ── Events ───────────────────────────────────────────────────────────────────
export const fetchEvents = (params) => api.get('/events/', { params }).then(r => r.data)

// ── Testimonials ─────────────────────────────────────────────────────────────
export const fetchTestimonials = (featured) =>
  api.get('/testimonials/', { params: featured !== undefined ? { featured } : {} }).then(r => r.data)

// ── Notices ──────────────────────────────────────────────────────────────────
export const fetchNotices = (category) =>
  api.get('/notices/', { params: category ? { category } : {} }).then(r => r.data)
