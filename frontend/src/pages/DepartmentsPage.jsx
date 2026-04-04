import { useState } from 'react'
import { Link } from 'react-router-dom'
import { C, DEPT_ICONS, DEPT_COLORS } from '../constants'
import { SectionTitle, Spinner, ErrorBox } from '../components/UI'
import useFetch from '../hooks/useFetch'
import { fetchDepartments } from '../api'

export default function DepartmentsPage() {
  const { data: depts, loading, error } = useFetch(fetchDepartments, [])
  const [hovered, setHovered] = useState(null)
  const [filter, setFilter]   = useState('All')

  const categories = ['All', 'NBA Accredited', 'New (Est. 2020+)']
  const filtered = !depts ? [] : depts.filter(d => {
    if (filter === 'NBA Accredited') return d.is_nba_accredited
    if (filter === 'New (Est. 2020+)') return d.established_year >= 2020
    return true
  })

  return (
    <>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, ${C.navyD} 0%, ${C.navy} 100%)`,
        padding: '72px 40px 56px', textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>
          Academic Programs
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
          Our Departments
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto' }}>
          Eight world-class departments offering undergraduate and postgraduate engineering programs affiliated to University of Mumbai.
        </p>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: '8px 20px', borderRadius: 20, fontSize: 13, fontWeight: 600,
              background: filter === c ? C.gold : 'rgba(255,255,255,0.08)',
              color: filter === c ? C.navy : 'rgba(255,255,255,0.7)',
              border: filter === c ? `1px solid ${C.gold}` : '1px solid rgba(255,255,255,0.15)',
              cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif",
            }}>{c}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: '60px 40px', background: '#F8F7F4', minHeight: '60vh' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {loading && <Spinner />}
          {error   && <ErrorBox message={error} />}
          {filtered && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 22 }}>
              {filtered.map((d, i) => {
                const color = d.color || DEPT_COLORS[d.code] || C.navy
                const icon  = d.icon  || DEPT_ICONS[d.code]  || '🏛️'
                const isHov = hovered === i
                return (
                  <Link key={d.id} to={`/departments/${d.code}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: 'block', textDecoration: 'none',
                      background: isHov ? color : '#fff',
                      border: `1.5px solid ${isHov ? color : '#E5E2DB'}`,
                      borderRadius: 14, padding: '28px 26px',
                      transition: 'all 0.3s',
                      transform: isHov ? 'translateY(-6px)' : 'none',
                      boxShadow: isHov ? `0 20px 48px rgba(0,0,0,0.15)` : '0 2px 8px rgba(0,0,0,0.04)',
                    }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                      <span style={{ fontSize: 36 }}>{icon}</span>
                      {d.is_nba_accredited && (
                        <span style={{ fontSize: 9.5, fontWeight: 700, padding: '3px 8px', borderRadius: 4, background: isHov ? 'rgba(255,255,255,0.2)' : '#E8F5E9', color: isHov ? '#fff' : '#2C5F2E' }}>NBA</span>
                      )}
                    </div>
                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, color: isHov ? 'rgba(255,255,255,0.5)' : C.gray, marginBottom: 8 }}>{d.code} · EST. {d.established_year}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: isHov ? '#fff' : C.navy, lineHeight: 1.3, marginBottom: 10 }}>{d.name}</h3>
                    {d.tagline && <p style={{ fontSize: 13, color: isHov ? 'rgba(255,255,255,0.65)' : C.gray, fontStyle: 'italic', marginBottom: 16 }}>{d.tagline}</p>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: `1px solid ${isHov ? 'rgba(255,255,255,0.15)' : '#F0EEE9'}` }}>
                      <span style={{ fontSize: 12, color: isHov ? 'rgba(255,255,255,0.6)' : C.gray }}>Intake: <strong style={{ color: isHov ? C.gold : color }}>{d.intake}</strong></span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: isHov ? C.gold : color }}>Explore →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
