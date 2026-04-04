import { C } from '../constants'
import { SectionTitle, Card, Spinner } from '../components/UI'
import useFetch from '../hooks/useFetch'
import { fetchEvents } from '../api'

const CLUBS = [
  { icon: '⚡', name: 'IEEE Student Branch', desc: 'One of the most active IEEE branches in Maharashtra, organising workshops, hackathons and tech talks.', members: '200+', events: '15+ / year' },
  { icon: '💻', name: 'CSI Chapter', desc: 'Computer Society of India chapter drives coding competitions, seminars and industry interactions.', members: '150+', events: '10+ / year' },
  { icon: '🌿', name: 'NSS Unit', desc: 'National Service Scheme — community service, blood donation drives and social awareness campaigns.', members: '100+', events: '20+ / year' },
  { icon: '🏆', name: "Students' Council", desc: 'Elected student body responsible for academic and extracurricular representation.', members: '30 elected', events: 'Year-round' },
  { icon: '🚀', name: 'E-Cell', desc: 'Entrepreneurship cell supporting student startups with mentoring, ideation and funding connect.', members: '80+', events: '8+ / year' },
  { icon: '🔐', name: 'Hackathon Club', desc: 'Prepares students for national and international hackathons including Smart India Hackathon.', members: '120+', events: 'Bi-annual' },
]

const SPORTS = [
  { name: 'Cricket', icon: '🏏' }, { name: 'Football', icon: '⚽' },
  { name: 'Basketball', icon: '🏀' }, { name: 'Volleyball', icon: '🏐' },
  { name: 'Badminton', icon: '🏸' }, { name: 'Table Tennis', icon: '🏓' },
  { name: 'Chess', icon: '♟️' }, { name: 'Kabaddi', icon: '🤼' },
]

export default function StudentLifePage() {
  const { data: events, loading } = useFetch(fetchEvents, [])

  return (
    <>
      <div style={{ background: `linear-gradient(135deg,${C.navyD},${C.navy})`, padding: '72px 40px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>Campus Life</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Student Life at VCET</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto' }}>
          Beyond academics — clubs, sports, fests and activities that build well-rounded engineers.
        </p>
      </div>

      {/* Clubs */}
      <section style={{ padding: '80px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Get Involved" title="Clubs & Committees" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
            {CLUBS.map((c, i) => (
              <Card key={i}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 600, color: C.navy, marginBottom: 10 }}>{c.name}</h3>
                <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7, marginBottom: 16 }}>{c.desc}</p>
                <div style={{ display: 'flex', gap: 10, borderTop: '1px solid #F0EEE9', paddingTop: 14 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: C.gray, textTransform: 'uppercase', letterSpacing: 1 }}>Members</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.gold, marginTop: 2 }}>{c.members}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: C.gray, textTransform: 'uppercase', letterSpacing: 1 }}>Events</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.gold, marginTop: 2 }}>{c.events}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="What's Happening" title="Events & Fests" />
          {loading && <Spinner />}
          {events && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {events.map((ev, i) => {
                const d = new Date(ev.date)
                return (
                  <div key={i} style={{ background: '#F8F7F4', borderRadius: 12, overflow: 'hidden', border: '1px solid #EDE9E0', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,30,61,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}>
                    <div style={{ background: C.navy, padding: '18px 16px', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: C.gold, lineHeight: 1 }}>{String(d.getDate()).padStart(2,'0')}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{d.toLocaleString('default',{month:'short'})} {d.getFullYear()}</div>
                    </div>
                    <div style={{ padding: 18 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: C.gold, textTransform: 'uppercase' }}>{ev.event_type}</span>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 14.5, color: C.navy, marginTop: 8, lineHeight: 1.35 }}>{ev.title}</h3>
                      {ev.venue && <p style={{ fontSize: 12, color: C.gray, marginTop: 8 }}>📍 {ev.venue}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          {!loading && !events?.length && (
            <p style={{ textAlign: 'center', color: C.gray, padding: 40 }}>No upcoming events at the moment. Check back soon!</p>
          )}
        </div>
      </section>

      {/* Sports */}
      <section style={{ padding: '80px 40px', background: C.navy }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Gymkhana" title="Sports & Athletics" light
            sub="VCET's sports complex hosts inter-collegiate competitions and trains students in a wide range of sports." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            {SPORTS.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 30, padding: '10px 22px', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.12)'; e.currentTarget.style.borderColor = `${C.gold}60` }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}>
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
