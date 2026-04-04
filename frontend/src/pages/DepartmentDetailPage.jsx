import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { C, DEPT_ICONS, DEPT_COLORS } from '../constants'
import { Spinner, ErrorBox, Badge, Card } from '../components/UI'
import useFetch from '../hooks/useFetch'
import { fetchDepartmentByCode, fetchFaculty, fetchLabs, fetchAchievements, fetchDepartments } from '../api'

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function SLabel({ text, color }) {
  return <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 2, color: color || C.gold, textTransform: 'uppercase', marginBottom: 12 }}>{text}</div>
}

function TabBar({ tabs, active, onChange, color }) {
  return (
    <div style={{ display: 'flex', borderBottom: `2px solid #E5E2D8`, marginBottom: 28, overflowX: 'auto' }}>
      {tabs.map(t => (
        <button key={t} onClick={() => onChange(t)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '11px 20px', fontSize: 13.5, fontWeight: 600,
          color: active === t ? color : C.gray,
          borderBottom: `2px solid ${active === t ? color : 'transparent'}`,
          marginBottom: -2, transition: 'all 0.2s', whiteSpace: 'nowrap',
          fontFamily: "'DM Sans', sans-serif",
        }}>{t}</button>
      ))}
    </div>
  )
}

/* ── Tabs ─────────────────────────────────────────────────────────────────── */
function OverviewTab({ dept, color }) {
  const missionList = dept.mission_list || (dept.mission ? dept.mission.split('|').map(m => m.trim()).filter(Boolean) : [])

  return (
    <div className="fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
        <Card>
          <SLabel text="About the Department" color={color} />
          <p style={{ fontSize: 14.5, color: C.dark, lineHeight: 1.85 }}>{dept.description}</p>
        </Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: 'Established', value: dept.established_year },
            { label: 'Annual Intake', value: `${dept.intake} seats` },
            { label: 'Accreditation', value: dept.is_nba_accredited ? 'NBA & NAAC' : 'NAAC' },
            { label: 'Head of Dept.', value: dept.head_of_dept || '—' },
          ].map(s => (
            <div key={s.label} style={{
              background: `${color}08`, border: `1px solid ${color}22`,
              borderLeft: `4px solid ${color}`, borderRadius: 10, padding: '14px 18px',
            }}>
              <div style={{ fontSize: 10, color: C.gray, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color, marginTop: 3 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Card>
          <SLabel text="Vision" color={color} />
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, fontStyle: 'italic', color: C.navy, lineHeight: 1.8 }}>
            "{dept.vision || 'Vision statement coming soon.'}"
          </p>
        </Card>
        <Card>
          <SLabel text="Mission" color={color} />
          {missionList.length > 0 ? missionList.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: color, color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
              <p style={{ fontSize: 13.5, color: C.dark, lineHeight: 1.6 }}>{m}</p>
            </div>
          )) : <p style={{ fontSize: 14, color: C.gray }}>Mission coming soon.</p>}
        </Card>
      </div>
    </div>
  )
}

function LabsTab({ code, color }) {
  const { data: labs, loading, error } = useFetch(() => fetchLabs(code), [code])
  const [active, setActive] = useState(0)

  if (loading) return <Spinner />
  if (error)   return <ErrorBox message={error} />
  if (!labs?.length) return <p style={{ color: C.gray, padding: 20 }}>No labs found for this department.</p>

  const lab = labs[active]
  return (
    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 22 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {labs.map((l, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            background: active === i ? color : '#fff',
            border: `1.5px solid ${active === i ? color : '#E5E2D8'}`,
            borderRadius: 10, padding: '12px 16px', textAlign: 'left',
            cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif",
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: active === i ? '#fff' : C.navy }}>{l.name}</div>
            {l.capacity && <div style={{ fontSize: 11, color: active === i ? 'rgba(255,255,255,0.6)' : C.gray, marginTop: 2 }}>{l.capacity} seats</div>}
          </button>
        ))}
      </div>
      <Card>
        <div style={{ fontSize: 32, marginBottom: 14 }}>🔬</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color, marginBottom: 10 }}>{lab.name}</h3>
        <p style={{ fontSize: 14.5, color: C.dark, lineHeight: 1.75 }}>{lab.description}</p>
        {lab.is_industry_sponsored && (
          <div style={{ marginTop: 16 }}>
            <Badge text="Industry Sponsored" color={color} />
          </div>
        )}
        {lab.features_list?.length > 0 && (
          <div style={{ marginTop: 18, padding: '14px 18px', background: `${color}08`, borderRadius: 8, border: `1px solid ${color}20` }}>
            <SLabel text="Features" color={color} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {lab.features_list.map(f => <Badge key={f} text={f} color={color} />)}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

function FacultyTab({ code, color }) {
  const { data: faculty, loading, error } = useFetch(() => fetchFaculty(code), [code])

  if (loading) return <Spinner />
  if (error)   return <ErrorBox message={error} />
  if (!faculty?.length) return <p style={{ color: C.gray, padding: 20 }}>No faculty data available.</p>

  return (
    <div className="fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {faculty.map((f, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%', background: color,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', serif", flexShrink: 0,
              }}>
                {f.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: C.navy }}>
                  {f.name}
                  {f.is_hod && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, background: `${color}18`, color, marginLeft: 8 }}>HOD</span>}
                </div>
                <div style={{ fontSize: 12, color, fontWeight: 600, marginTop: 3 }}>{f.designation}</div>
                <div style={{ fontSize: 12, color: C.gray, marginTop: 3 }}>{f.qualification}</div>
                {f.experience && <div style={{ fontSize: 11, color: C.gray, marginTop: 2 }}>Exp: {f.experience}</div>}
                {f.research_area && <div style={{ fontSize: 11, color: C.gray, marginTop: 3, fontStyle: 'italic' }}>{f.research_area}</div>}
                {f.email && <a href={`mailto:${f.email}`} style={{ fontSize: 11, color, display: 'block', marginTop: 6 }}>{f.email}</a>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function AchievementsTab({ code, color }) {
  const { data, loading, error } = useFetch(() => fetchAchievements({ dept: code }), [code])

  if (loading) return <Spinner />
  if (error)   return <ErrorBox message={error} />
  if (!data?.length) return <p style={{ color: C.gray, padding: 20 }}>No department achievements recorded yet.</p>

  return (
    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
      {data.map((a, i) => (
        <Card key={i}>
          <Badge text={a.tag} color={color} />
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: C.navy, margin: '12px 0 8px', lineHeight: 1.3 }}>{a.title}</h3>
          <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7 }}>{a.description}</p>
          {a.date && <div style={{ fontSize: 11, color: C.gold, marginTop: 10, fontWeight: 600 }}>{new Date(a.date).getFullYear()}</div>}
        </Card>
      ))}
    </div>
  )
}

/* ── Sidebar ──────────────────────────────────────────────────────────────── */
function DeptSidebar({ depts, activeCode }) {
  return (
    <aside style={{
      width: 230, flexShrink: 0, background: C.navy,
      borderRadius: 14, padding: 18, alignSelf: 'flex-start',
      position: 'sticky', top: 20,
    }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: 'rgba(255,255,255,0.3)', marginBottom: 14, textTransform: 'uppercase' }}>Departments</div>
      {depts.map(d => {
        const color = d.color || DEPT_COLORS[d.code] || C.navy
        const icon  = d.icon  || DEPT_ICONS[d.code]  || '🏛️'
        const isActive = d.code === activeCode
        return (
          <Link key={d.code} to={`/departments/${d.code}`} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: isActive ? color : 'transparent',
            borderRadius: 8, padding: '10px 12px', marginBottom: 3,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
          >
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: isActive ? '#fff' : 'rgba(255,255,255,0.62)', lineHeight: 1.3 }}>{d.name}</span>
          </Link>
        )
      })}
      <div style={{ marginTop: 22, padding: 14, background: 'rgba(201,168,76,0.12)', borderRadius: 10, border: '1px solid rgba(201,168,76,0.25)' }}>
        <div style={{ fontSize: 10, color: C.gold, fontWeight: 700, marginBottom: 6 }}>APPLY NOW</div>
        <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, marginBottom: 10 }}>Admissions open A.Y. 2026-27</p>
        <a href="https://forms.gle/uh7sZS5JLzn2RecG7" target="_blank" rel="noreferrer" style={{
          display: 'block', textAlign: 'center', background: C.gold, color: C.navy,
          padding: '8px', borderRadius: 6, fontSize: 12, fontWeight: 700,
        }}>Enquire Now</a>
      </div>
    </aside>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function DepartmentDetailPage() {
  const { code } = useParams()
  const [tab, setTab]   = useState('Overview')
  const { data: dept, loading, error } = useFetch(() => fetchDepartmentByCode(code), [code])
  const { data: allDepts } = useFetch(fetchDepartments, [])

  const color = dept?.color || DEPT_COLORS[code] || C.navy
  const icon  = dept?.icon  || DEPT_ICONS[code]  || '🏛️'

  // Reset tab when navigating between departments
  const [prevCode, setPrevCode] = useState(code)
  if (prevCode !== code) { setPrevCode(code); setTab('Overview') }

  const TABS = ['Overview', 'Labs', 'Faculty', 'Achievements']

  return (
    <div style={{ background: '#F4F2EE', minHeight: '100vh', padding: '28px 32px' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: C.gray, marginBottom: 20 }}>
          <Link to="/" style={{ color: C.gold, fontWeight: 500 }}>Home</Link>
          <span>›</span>
          <Link to="/departments" style={{ color: C.gold, fontWeight: 500 }}>Departments</Link>
          <span>›</span>
          <span style={{ color: C.navy, fontWeight: 600 }}>{dept?.name || code}</span>
        </div>

        <div style={{ display: 'flex', gap: 26, alignItems: 'flex-start' }}>
          {/* Sidebar */}
          {allDepts && <DeptSidebar depts={allDepts} activeCode={code} />}

          {/* Main content */}
          <main style={{ flex: 1, minWidth: 0 }}>
            {loading && <Spinner />}
            {error   && <ErrorBox message={`Department "${code}" not found. ${error}`} />}

            {dept && (
              <>
                {/* Hero banner */}
                <div style={{
                  background: `linear-gradient(135deg, ${C.navyD} 0%, ${color} 100%)`,
                  borderRadius: 14, padding: '36px 40px', marginBottom: 24,
                  position: 'relative', overflow: 'hidden',
                  animation: 'fadeUp 0.4s ease',
                }}>
                  <div style={{ position: 'absolute', right: -50, top: -50, width: 250, height: 250, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.07)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
                    <span style={{ fontSize: 48 }}>{icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase', marginBottom: 5 }}>Department of</div>
                      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3.5vw, 38px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 6 }}>
                        {dept.name}
                      </h1>
                      {dept.tagline && (
                        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', fontFamily: "'EB Garamond', serif" }}>
                          {dept.tagline}
                        </p>
                      )}
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginBottom: 12, flexWrap: 'wrap' }}>
                        {dept.is_nba_accredited && <Badge text="NBA Accredited" color="rgba(255,255,255,0.9)" />}
                        <Badge text="NAAC" color="rgba(255,255,255,0.9)" />
                        <Badge text={`Est. ${dept.established_year}`} color="rgba(255,255,255,0.7)" />
                      </div>
                      <a href="https://forms.gle/uh7sZS5JLzn2RecG7" target="_blank" rel="noreferrer" style={{
                        display: 'inline-block', background: C.gold, color: C.navy,
                        padding: '9px 22px', borderRadius: 6, fontSize: 13, fontWeight: 700,
                      }}>Apply Now →</a>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <TabBar tabs={TABS} active={tab} onChange={setTab} color={color} />

                {/* Tab content */}
                {tab === 'Overview'      && <OverviewTab dept={dept} color={color} />}
                {tab === 'Labs'          && <LabsTab code={code} color={color} />}
                {tab === 'Faculty'       && <FacultyTab code={code} color={color} />}
                {tab === 'Achievements'  && <AchievementsTab code={code} color={color} />}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
