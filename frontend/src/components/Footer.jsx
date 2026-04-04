import { Link } from 'react-router-dom'
import { C } from '../constants'

const COL = [
  {
    title: 'Academics',
    items: [
      { label: 'Departments',  path: '/departments' },
      { label: 'Research',     path: '/research' },
      { label: 'Facilities',   path: '/facilities' },
      { label: 'NAAC',         path: '/about' },
      { label: 'NBA',          path: '/about' },
    ],
  },
  {
    title: 'Student Life',
    items: [
      { label: 'Student Council', path: '/student-life' },
      { label: 'IEEE',            path: '/student-life' },
      { label: 'NSS',             path: '/student-life' },
      { label: 'Sports',          path: '/facilities' },
      { label: 'Placement Cell',  path: '/placements' },
    ],
  },
  {
    title: 'Information',
    items: [
      { label: 'About VCET',   path: '/about' },
      { label: 'Admission',    path: '/admission' },
      { label: 'Fee Structure',path: '/admission' },
      { label: 'Placements',   path: '/placements' },
      { label: 'Contact',      path: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: C.navyD, borderTop: `2px solid ${C.gold}`, padding: '60px 40px 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.white, lineHeight: 1.3 }}>
                Vidyavardhini's<br /><span style={{ color: C.gold }}>College of Engineering</span><br />& Technology
              </div>
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginTop: 16, maxWidth: 280 }}>
              K.T. Marg, Vartak College Campus,<br />Vasai Road (W), Dist-Palghar,<br />Maharashtra 401202
            </p>
            <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 2 }}>
              <div>📞 +91 79720 19446</div>
              <div>📞 0250 233 8234</div>
              <div>✉️ vcet_inbox@vcet.edu.in</div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {[
                { label: 'Facebook',  href: 'https://www.facebook.com/vcet.vasai.50/' },
                { label: 'Instagram', href: 'https://www.instagram.com/official.vcet/' },
                { label: 'LinkedIn',  href: 'https://www.linkedin.com/school/vcetvasai/' },
                { label: 'YouTube',   href: 'https://www.youtube.com/channel/UCjBw5a7WU00GwkxaTjF9jqg' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontSize: 11, padding: '5px 12px', border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 4, color: C.gold, transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.navy }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.gold }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {COL.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>
                {col.title}
              </h4>
              {col.items.map(item => (
                <Link key={item.label} to={item.path} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10, transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.white; e.currentTarget.style.paddingLeft = '8px' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.paddingLeft = '0' }}
                >{item.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
            © 2025 VCET · All Rights Reserved · Autonomous Institute affiliated to University of Mumbai
          </span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
            Approved by AICTE & DTE · NBA & NAAC Accredited
          </span>
        </div>
      </div>
    </footer>
  )
}
