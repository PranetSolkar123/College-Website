import { useState } from 'react'
import { C } from '../constants'
import { SectionTitle, Spinner, ErrorBox } from '../components/UI'
import useFetch from '../hooks/useFetch'
import { fetchPlacements, fetchRecruiters } from '../api'

export default function PlacementsPage() {
  const { data: placements, loading: pLoad, error: pErr } = useFetch(fetchPlacements, [])
  const { data: recruiters } = useFetch(fetchRecruiters, [])
  const [hovered, setHovered] = useState(null)
  const maxCount = placements ? Math.max(...placements.map(p => p.students_placed)) : 1

  return (
    <>
      <div style={{ background: `linear-gradient(135deg,${C.navyD},${C.navy})`, padding: '72px 40px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>Career Success</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Placement Record</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto' }}>
          Consistently placing 300+ students every year in top MNCs and startups across India and abroad.
        </p>
      </div>

      {/* Stats */}
      <section style={{ padding: '64px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 64 }}>
            {[
              { value: '₹21 LPA', label: 'Highest Package 2024' },
              { value: '₹5.2 LPA', label: 'Average Package' },
              { value: '320+', label: 'Students Placed 2024' },
              { value: '50+', label: 'Companies Visited' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', border: '1px solid #E5E2D8', borderRadius: 12, padding: '28px 20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: C.gold }}>{s.value}</div>
                <div style={{ fontSize: 12, color: C.gray, marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Bar Chart */}
          <SectionTitle label="Year-wise" title="Placement Trends" center={false} />
          {pLoad && <Spinner />}
          {pErr && <ErrorBox message={pErr} />}
          {placements && (
            <div style={{ background: '#fff', border: '1px solid #E5E2D8', borderRadius: 14, padding: '40px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 220 }}>
                {placements.map((p, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
                    onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: hovered === i ? C.gold : C.navy, transition: 'color 0.2s' }}>{p.students_placed}</span>
                    <div style={{
                      width: '100%', borderRadius: '6px 6px 0 0',
                      height: `${(p.students_placed / maxCount) * 170}px`,
                      background: hovered === i ? C.gold : `${C.navy}CC`,
                      transition: 'all 0.3s', cursor: 'default',
                    }} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 12, color: C.navy, fontWeight: 600 }}>{p.year}</div>
                      <div style={{ fontSize: 11, color: C.gray }}>Highest: ₹{p.highest_package}L</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recruiters */}
      <section style={{ padding: '80px 40px', background: C.navy }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Our Partners" title="Top Recruiters" light />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {(recruiters || []).map((r, i) => (
              <span key={i} style={{
                padding: '10px 24px', border: `1px solid rgba(201,168,76,0.3)`,
                borderRadius: 26, fontSize: 13.5, fontWeight: 600,
                color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.05)',
                transition: 'all 0.2s', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold; e.currentTarget.style.background = 'rgba(201,168,76,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              >{r.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Preparation" title="Training & Development" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { icon: '🎯', title: 'Aptitude Training', desc: 'Year-round aptitude, logical reasoning and verbal ability sessions conducted by expert trainers.' },
              { icon: '💻', title: 'Technical Workshops', desc: 'Domain-specific workshops on DSA, system design, cloud, and emerging technologies.' },
              { icon: '🤝', title: 'Mock Interviews', desc: 'HR and technical mock interviews with industry professionals to build confidence.' },
              { icon: '📝', title: 'Resume Building', desc: 'Expert-guided resume and LinkedIn profile building sessions for final year students.' },
              { icon: '🌐', title: 'E-CELL Programs', desc: 'Entrepreneurship cell supports startups with mentoring, funding guidance and incubation.' },
              { icon: '🏆', title: 'Competitive Coding', desc: 'Regular coding contests, hackathons and competitive programming clubs.' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#F8F7F4', borderRadius: 12, padding: 28, border: '1px solid #E5E2D8', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,30,61,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 600, color: C.navy, marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
