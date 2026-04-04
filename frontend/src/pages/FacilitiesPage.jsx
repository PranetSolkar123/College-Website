import { C } from '../constants'
import { SectionTitle, Card } from '../components/UI'

const FACILITIES = [
  { icon: '🖥️', title: 'Central Computing Facility', desc: '200+ high-performance workstations with 24/7 internet access, licensed software suites and cloud lab access.', highlights: ['200+ PCs', 'High-speed Wi-Fi', 'Licensed Software', 'Cloud Access'] },
  { icon: '📚', title: 'Central Library', desc: 'A comprehensive library with 50,000+ volumes, digital journals, e-books and reading rooms spread across two floors.', highlights: ['50,000+ Books', 'E-Journal Access', 'OPAC System', 'Digital Resources'] },
  { icon: '🧠', title: 'Counselling Cell', desc: 'Professional counsellors available for academic, career and personal guidance. Walk-in and appointment sessions available.', highlights: ['Professional Counsellors', 'Career Guidance', 'Confidential', 'Walk-in Available'] },
  { icon: '🏃', title: 'Sports & Gymkhana', desc: 'Multi-sport facilities including cricket ground, basketball and volleyball courts, indoor badminton and a fully equipped gymnasium.', highlights: ['Cricket Ground', 'Basketball Court', 'Indoor Sports', 'Gymnasium'] },
  { icon: '🍽️', title: 'Canteen & Cafeteria', desc: 'Spacious cafeteria serving hygienic, affordable meals and snacks. Separate seating for 300+ students.', highlights: ['300+ Seating', 'Hygienic Kitchen', 'Affordable Meals', 'Wi-Fi Zone'] },
  { icon: '🚌', title: 'Transport', desc: 'College-managed bus services covering Vasai, Virar, Nalasopara, Bhayandar and surrounding areas.', highlights: ['10+ Routes', 'Safe & Punctual', 'Affordable Passes', 'GPS Tracked'] },
  { icon: '🏥', title: 'Medical Room', desc: 'On-campus medical room with a qualified nurse. Tie-up with a nearby hospital for emergency care.', highlights: ['Qualified Nurse', 'First Aid', 'Hospital Tie-up', 'Emergency Support'] },
  { icon: '👩‍💻', title: 'Ladies Common Room', desc: 'Dedicated, secure common room for female students with lockers, rest area and personal care facilities.', highlights: ['Secure Access', 'Locker Facility', 'Rest Area', 'Hygiene Kits'] },
]

export default function FacilitiesPage() {
  return (
    <>
      <div style={{ background: `linear-gradient(135deg,${C.navyD},${C.navy})`, padding: '72px 40px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>Campus Infrastructure</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>World-Class Facilities</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto' }}>
          State-of-the-art infrastructure designed to provide a holistic and comfortable learning experience.
        </p>
      </div>

      <section style={{ padding: '80px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
            {FACILITIES.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 32, border: '1px solid #E5E2D8', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(11,30,61,0.1)'; e.currentTarget.style.borderColor = C.gold }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E2D8' }}>
                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 40, flexShrink: 0 }}>{f.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 600, color: C.navy, marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.75, marginBottom: 18 }}>{f.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {f.highlights.map(h => (
                        <span key={h} style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: `${C.gold}15`, color: C.gold, border: `1px solid ${C.gold}30` }}>{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '64px 40px', background: C.navy, textAlign: 'center' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Campus Tour Available</div>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 28 }}>Visit us on any weekday to see our facilities in person. Contact the admissions office to schedule a guided tour.</p>
        <a href="https://forms.gle/uh7sZS5JLzn2RecG7" target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', background: C.gold, color: C.navy, padding: '13px 36px', borderRadius: 6, fontWeight: 700, fontSize: 14 }}>
          Schedule a Visit →
        </a>
      </section>
    </>
  )
}
