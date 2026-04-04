import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { C, NAV_ITEMS } from '../constants'
import useFetch from '../hooks/useFetch'
import { fetchNotices } from '../api'

function Ticker() {
  const { data: notices } = useFetch(fetchNotices, [])
  const items = notices?.length ? notices : [
    { id: 1, title: 'Admission Enquiry for B.E. Courses A.Y. 2026-27 — Apply Now', link: '/admission' },
    { id: 2, title: 'M.E. Admission Enquiry Form 2026-27 — Open', link: '/admission' },
    { id: 3, title: 'IEEE IC3ET 2026 Conference — Submit Papers', link: '/research' },
    { id: 4, title: 'Campus Placement Drive — TCS, Infosys, Wipro visiting April 25', link: '/placements' },
  ]
  const doubled = [...items, ...items]
  return (
    <div style={{ background: C.navyD, color: C.gold, padding: '7px 0', overflow: 'hidden', fontSize: 12, fontWeight: 600 }}>
      <div style={{ display: 'flex', gap: 56, whiteSpace: 'nowrap', animation: 'ticker 45s linear infinite' }}>
        {doubled.map((n, i) => (
          <Link key={i} to={n.link || '/'} style={{ color: C.gold, textDecoration: 'none' }}>
            <span style={{ color: C.goldL, marginRight: 8 }}>●</span>{n.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(null); setMenuOpen(false) }, [location])

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <>
      <Ticker />
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: scrolled ? 'rgba(7,20,41,0.97)' : C.navy,
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none',
        transition: 'all 0.3s',
        borderBottom: `1px solid rgba(201,168,76,0.2)`,
      }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 40px', maxWidth: 1400, margin: '0 auto' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 700, color: C.navy, fontFamily: "'Playfair Display', serif", flexShrink: 0 }}>V</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.white, lineHeight: 1.2 }}>
                Vidyavardhini's College of Engineering & Technology
              </div>
              <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, marginTop: 2 }}>
                VASAI ROAD · AUTONOMOUS · AFFILIATED TO UNIVERSITY OF MUMBAI
              </div>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {['NBA', 'NAAC', 'AICTE'].map(b => (
              <span key={b} style={{ fontSize: 9.5, padding: '4px 10px', border: `1px solid ${C.gold}`, borderRadius: 4, color: C.gold, fontWeight: 700, letterSpacing: 0.8 }}>{b}</span>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div style={{ background: 'rgba(255,255,255,0.04)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', maxWidth: 1400, margin: '0 auto', padding: '0 40px', alignItems: 'center', overflowX: 'auto' }}>
            {NAV_ITEMS.map(item => {
              const active = isActive(item.path) && item.path !== '/'
              return (
                <div key={item.label} onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)} style={{ position: 'relative', flexShrink: 0 }}>
                  <Link to={item.path} style={{
                    display: 'block', padding: '12px 13px', fontSize: 12.5, fontWeight: 500,
                    color: active || open === item.label ? C.gold : 'rgba(255,255,255,0.82)',
                    fontFamily: "'DM Sans', sans-serif",
                    borderBottom: `2px solid ${active || open === item.label ? C.gold : 'transparent'}`,
                    transition: 'all 0.2s', whiteSpace: 'nowrap', textDecoration: 'none',
                    marginBottom: active || open === item.label ? -2 : 0,
                  }}>
                    {item.label} ▾
                  </Link>

                  {open === item.label && (
                    <div style={{
                      position: 'absolute', top: '100%', left: 0, zIndex: 999,
                      background: C.navyD, minWidth: 230,
                      border: `1px solid rgba(201,168,76,0.2)`,
                      borderRadius: '0 0 8px 8px',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                      animation: 'fadeUp 0.15s ease',
                    }}>
                      {item.sub.map(s => (
                        <Link key={s.label} to={s.path} style={{
                          display: 'block', padding: '10px 20px',
                          fontSize: 13, color: location.pathname === s.path ? C.gold : 'rgba(255,255,255,0.78)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          transition: 'all 0.15s', textDecoration: 'none',
                          background: location.pathname === s.path ? 'rgba(201,168,76,0.08)' : 'transparent',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = '28px'; e.currentTarget.style.background = 'rgba(201,168,76,0.05)' }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = location.pathname === s.path ? C.gold : 'rgba(255,255,255,0.78)'
                            e.currentTarget.style.paddingLeft = '20px'
                            e.currentTarget.style.background = location.pathname === s.path ? 'rgba(201,168,76,0.08)' : 'transparent'
                          }}
                        >{s.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <Link to="/admission" style={{
              marginLeft: 'auto', background: C.gold, color: C.navy,
              padding: '8px 22px', borderRadius: 4, fontSize: 12.5,
              fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none', flexShrink: 0,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.goldL }}
              onMouseLeave={e => { e.currentTarget.style.background = C.gold }}
            >Apply Now →</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
