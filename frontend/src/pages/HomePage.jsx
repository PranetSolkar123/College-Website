import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { C, DEPT_ICONS, DEPT_COLORS } from '../constants'
import { SectionTitle, Spinner, ErrorBox, Badge } from '../components/UI'
import useFetch from '../hooks/useFetch'
import {
  fetchDepartments, fetchPlacements, fetchRecruiters,
  fetchAchievements, fetchEvents, fetchTestimonials,
} from '../api'

/* ── Hero ─────────────────────────────────────────────────────────────────── */
const SLIDES = [
  { headline: 'Engineering Excellence', sub: 'Since 1994', body: 'NBA & NAAC Accredited · Affiliated to University of Mumbai · Approved by AICTE & DTE' },
  { headline: 'Autonomous Institute', sub: 'University of Mumbai', body: 'Shaping tomorrow\'s engineers with industry-ready, research-driven education.' },
  { headline: '320+ Placed Annually', sub: 'Industry-Ready Graduates', body: 'Top MNCs · Global Opportunities · Highest Package ₹21 LPA' },
]
const STATS = [
  { value: '55+', label: 'Years of Excellence' },
  { value: '8',   label: 'Departments' },
  { value: 'NBA & NAAC', label: 'Accredited' },
  { value: '320+', label: 'Peak Placements / Year' },
  { value: '100+', label: 'Industry Partners' },
  { value: 'Autonomous', label: 'Institute' },
]

function Hero() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])
  const s = SLIDES[slide]

  return (
    <section style={{
      minHeight: '88vh', display: 'flex', alignItems: 'center',
      background: `linear-gradient(135deg, ${C.navyD} 0%, ${C.navy} 55%, ${C.navyL} 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* bg grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
        <svg width="100%" height="100%"><defs><pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0L0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
      </div>
      <div style={{ position: 'absolute', right: -100, top: -100, width: 500, height: 500, borderRadius: '50%', border: `2px solid rgba(201,168,76,0.1)` }} />
      <div style={{ position: 'absolute', right: 60, top: 60, width: 300, height: 300, borderRadius: '50%', border: `2px solid rgba(201,168,76,0.07)` }} />

      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '60px 40px', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div key={slide} className="fade-up">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(201,168,76,0.12)', border: `1px solid rgba(201,168,76,0.3)`,
            borderRadius: 20, padding: '5px 14px', marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold, display: 'inline-block' }} />
            <span style={{ fontSize: 11, color: C.gold, fontWeight: 700, letterSpacing: 1.2 }}>VASAI ROAD, MAHARASHTRA</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, color: C.white, lineHeight: 1.1, marginBottom: 10,
          }}>{s.headline}</h1>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 20, color: C.gold, marginBottom: 14, fontStyle: 'italic' }}>
            {s.sub}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 40, lineHeight: 1.8, maxWidth: 480 }}>
            {s.body}
          </p>

          <div style={{ display: 'flex', gap: 14 }}>
            <a href="https://forms.gle/uh7sZS5JLzn2RecG7" target="_blank" rel="noreferrer" style={{
              background: C.gold, color: C.navy, padding: '14px 32px',
              borderRadius: 6, fontWeight: 700, fontSize: 14,
            }}>Apply for 2026-27</a>
            <Link to="/departments" style={{
              background: 'transparent', color: C.white, padding: '14px 32px',
              borderRadius: 6, fontWeight: 600, fontSize: 14,
              border: '1.5px solid rgba(255,255,255,0.3)',
            }}>Explore Departments</Link>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 36 }}>
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? 28 : 8, height: 8, borderRadius: 4,
                background: i === slide ? C.gold : 'rgba(255,255,255,0.25)',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '22px 18px',
              transition: 'all 0.3s', animation: `fadeUp ${0.3 + i * 0.08}s ease both`,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: C.gold, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Departments ──────────────────────────────────────────────────────────── */
function Departments() {
  const { data: depts, loading, error } = useFetch(fetchDepartments, [])
  const [hovered, setHovered] = useState(null)

  return (
    <section style={{ padding: '96px 40px', background: '#F8F7F4' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <SectionTitle label="Academic Programs" title="Our Departments"
          sub="Eight world-class departments offering undergraduate and postgraduate engineering programs." />
        {loading && <Spinner />}
        {error   && <ErrorBox message={error} />}
        {depts && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {depts.map((d, i) => {
              const color = d.color || DEPT_COLORS[d.code] || C.navy
              const icon  = d.icon  || DEPT_ICONS[d.code]  || '🏛️'
              return (
                <Link key={d.id} to={`/departments/${d.code}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'block',
                    background: hovered === i ? color : '#fff',
                    border: `1.5px solid ${hovered === i ? color : '#E5E2DB'}`,
                    borderRadius: 12, padding: 26, cursor: 'pointer',
                    transition: 'all 0.3s',
                    transform: hovered === i ? 'translateY(-6px)' : 'none',
                    boxShadow: hovered === i ? `0 16px 40px rgba(0,0,0,0.14)` : '0 2px 8px rgba(0,0,0,0.04)',
                    textDecoration: 'none',
                  }}>
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{icon}</div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, color: hovered === i ? 'rgba(255,255,255,0.55)' : C.gray, marginBottom: 6 }}>{d.code}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: hovered === i ? '#fff' : C.navy, lineHeight: 1.3, marginBottom: 14 }}>{d.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: hovered === i ? 'rgba(255,255,255,0.6)' : C.gray }}>Intake: {d.intake}</span>
                    <span style={{ fontSize: 18, color: hovered === i ? C.gold : color }}>→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Placements ───────────────────────────────────────────────────────────── */
function Placements() {
  const { data: placements } = useFetch(fetchPlacements, [])
  const { data: recruiters } = useFetch(fetchRecruiters, [])
  const [hovered, setHovered] = useState(null)
  const maxCount = placements ? Math.max(...placements.map(p => p.students_placed)) : 1

  return (
    <section style={{ padding: '96px 40px', background: C.navy }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <SectionTitle label="Career Success" title="Placement Record"
          sub="Consistently placing hundreds of students in top companies every year." light />

        {placements && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 200, marginBottom: 48, padding: '0 20px' }}>
            {placements.map((p, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <span style={{ fontSize: 11, fontWeight: 700, color: hovered === i ? C.gold : 'rgba(255,255,255,0.75)', transition: 'color 0.2s' }}>
                  {p.students_placed}
                </span>
                <div style={{
                  width: '100%', borderRadius: '4px 4px 0 0',
                  height: `${(p.students_placed / maxCount) * 160}px`,
                  background: hovered === i ? C.gold : `rgba(201,168,76,${0.3 + (p.students_placed / maxCount) * 0.5})`,
                  transition: 'all 0.3s',
                }} />
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>{p.year}</span>
              </div>
            ))}
          </div>
        )}

        {/* Package stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
          {[
            { label: 'Highest Package', value: '₹21 LPA' },
            { label: 'Average Package', value: '₹5.2 LPA' },
            { label: 'Companies Visited', value: '50+' },
          ].map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '24px 20px', textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: C.gold }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recruiters */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 2.5, fontWeight: 700, textTransform: 'uppercase' }}>Our Recruiters</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {(recruiters || []).map((r, i) => (
            <span key={i} style={{
              padding: '7px 18px', border: '1px solid rgba(201,168,76,0.22)',
              borderRadius: 22, fontSize: 12.5, fontWeight: 500,
              color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.04)',
              transition: 'all 0.2s', cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
            >{r.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Achievements ─────────────────────────────────────────────────────────── */
const TAG_COLORS = { Placements: '#1B5E8A', Sports: '#2C5F2E', Tech: '#6B3D8E', Innovation: '#8B4513', Research: '#0F4C75', Funding: '#C0392B', Cultural: '#B7770D', Other: C.navy }

function Achievements() {
  const { data, loading, error } = useFetch(fetchAchievements, [])

  return (
    <section style={{ padding: '96px 40px', background: '#fff' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <SectionTitle label="Hall of Fame" title="Remarkable Achievements"
          sub="Our students and faculty continue to make VCET proud on national and international stages." />
        {loading && <Spinner />}
        {error   && <ErrorBox message={error} />}
        {data && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {data.map((a, i) => {
              const col = TAG_COLORS[a.tag] || C.navy
              return (
                <div key={i} style={{
                  border: '1px solid #EDE9E0', borderRadius: 12, padding: 30,
                  background: '#fff', position: 'relative', overflow: 'hidden', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,30,61,0.1)'; e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#EDE9E0'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: col }} />
                  <Badge text={a.tag} color={col} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: C.navy, margin: '14px 0 10px', lineHeight: 1.3 }}>{a.title}</h3>
                  <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7 }}>{a.description}</p>
                  {a.department_name && (
                    <div style={{ marginTop: 14, fontSize: 11, color: C.gold, fontWeight: 700, letterSpacing: 0.8 }}>
                      Dept. of {a.department_name}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Events ───────────────────────────────────────────────────────────────── */
function Events() {
  const { data, loading } = useFetch(() => fetchEvents({ upcoming: true }), [])

  return (
    <section style={{ padding: '96px 40px', background: '#F8F7F4' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <SectionTitle label="What's Happening" title="Upcoming Events" />
        {loading && <Spinner />}
        {data && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {data.slice(0, 4).map((ev, i) => {
              const d = new Date(ev.date)
              return (
                <div key={i} style={{
                  background: '#fff', borderRadius: 12, overflow: 'hidden',
                  border: '1px solid #EDE9E0', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,30,61,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}>
                  <div style={{ background: C.navy, padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: C.gold, lineHeight: 1 }}>
                      {String(d.getDate()).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>
                      {d.toLocaleString('default', { month: 'short' })} {d.getFullYear()}
                    </div>
                  </div>
                  <div style={{ padding: 20 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: C.gold, textTransform: 'uppercase' }}>{ev.event_type}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15.5, color: C.navy, marginTop: 8, lineHeight: 1.35 }}>{ev.title}</h3>
                    {ev.venue && <p style={{ fontSize: 12, color: C.gray, marginTop: 8 }}>📍 {ev.venue}</p>}
                    {ev.link && (
                      <a href={ev.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: C.gold, fontWeight: 600, display: 'inline-block', marginTop: 14 }}>
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Testimonials ─────────────────────────────────────────────────────────── */
function Testimonials() {
  const { data } = useFetch(() => fetchTestimonials(true), [])
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (!data?.length) return
    const t = setInterval(() => setActive(p => (p + 1) % data.length), 6000)
    return () => clearInterval(t)
  }, [data])

  if (!data?.length) return null
  const t = data[active]

  return (
    <section style={{ padding: '96px 40px', background: '#FDF6E3' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <SectionTitle label="Alumni Voices" title="What Our Graduates Say" />
        <div key={active} className="fade-in">
          <p style={{
            fontFamily: "'EB Garamond', serif", fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontStyle: 'italic', color: C.navy, lineHeight: 1.85, marginBottom: 36,
          }}>
            <span style={{ fontSize: 72, color: C.gold, lineHeight: 0, verticalAlign: '-0.35em', marginRight: 8, fontFamily: "'Playfair Display', serif" }}>"</span>
            {t.text}
          </p>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: C.navy,
            margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: C.gold,
          }}>{t.name[0]}</div>
          <div style={{ fontWeight: 600, fontSize: 15.5, color: C.navy }}>{t.name}</div>
          <div style={{ fontSize: 13, color: C.gray, marginTop: 4 }}>{t.role}</div>
          {t.batch_year && <div style={{ fontSize: 12, color: C.gold, marginTop: 2, fontWeight: 600 }}>Batch of {t.batch_year}</div>}
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 32 }}>
          {data.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 28 : 8, height: 8, borderRadius: 4,
              background: i === active ? C.navy : '#C5B99A',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Quick Links ──────────────────────────────────────────────────────────── */
const linkStyle = {
  display: 'block', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10,
  padding: '22px 14px', textAlign: 'center', transition: 'all 0.3s', textDecoration: 'none',
}
function QuickLinkCard({ l, i }) {
  const inner = (
    <>
      <div style={{ fontSize: 28, marginBottom: 10 }}>{l.icon}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{l.title}</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{l.desc}</div>
    </>
  )
  const hover = e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }
  const unhover = e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none' }
  if (l.external) {
    return <a key={i} href={l.href} target="_blank" rel="noreferrer" style={linkStyle} onMouseEnter={hover} onMouseLeave={unhover}>{inner}</a>
  }
  return <Link key={i} to={l.href} style={linkStyle} onMouseEnter={hover} onMouseLeave={unhover}>{inner}</Link>
}

function QuickLinks() {
  const LINKS = [
    { icon: '🎓', title: 'ERP Portal',     desc: 'Student login & academic portal', href: 'http://erp.vcet.edu.in', external: true },
    { icon: '🏛️', title: 'Alumni Portal',  desc: 'Stay connected with VCET',        href: 'https://alumni.vcet.edu.in', external: true },
    { icon: '📋', title: 'NAAC Reports',   desc: 'Accreditation documentation',     href: '/about' },
    { icon: '📄', title: 'Admission Info', desc: 'Courses, fees & documents',        href: '/admission' },
    { icon: '💼', title: 'Placements',     desc: 'Placement records & recruiters',  href: '/placements' },
    { icon: '📞', title: 'Contact Us',     desc: 'Reach the admissions office',     href: '/about' },
  ]
  return (
    <section style={{ padding: '72px 40px', background: C.navyD }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <SectionTitle label="Quick Access" title="Explore More" light />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
          {LINKS.map((l, i) => <QuickLinkCard key={i} l={l} i={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Departments />
      <Placements />
      <Achievements />
      <Events />
      <Testimonials />
      <QuickLinks />
    </>
  )
}
