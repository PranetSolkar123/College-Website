import { C } from '../constants'
import { SectionTitle, Card } from '../components/UI'

const LEADERSHIP = [
  { role: "President", name: "Shri. Rajendra Patil", desc: "Visionary leader guiding VCET's growth since inception." },
  { role: "Principal", name: "Dr. Suresh Ukarande", desc: "Ph.D., 30+ years in academic leadership and research." },
  { role: "Dean Academics", name: "Dr. Priya Nair", desc: "Driving curriculum excellence and academic innovation." },
  { role: "Dean R&D", name: "Dr. Anil Sharma", desc: "Spearheading funded research and industry collaboration." },
]

const MILESTONES = [
  { year: "1994", event: "VCET established under Vidyavardhini's Trust" },
  { year: "2001", event: "IT department added; intake expanded to 480" },
  { year: "2010", event: "NBA Accreditation for CE, IT, MECH, EXTC" },
  { year: "2015", event: "NAAC 'A' Grade Accreditation" },
  { year: "2020", event: "Granted Autonomous Status by University of Mumbai" },
  { year: "2021", event: "New AI & DS and CSD programs launched" },
  { year: "2024", event: "NBA Accreditation renewed; Record ₹21 LPA placement" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${C.navyD}, ${C.navy})`, padding: '72px 40px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>Est. 1994</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>About VCET</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto' }}>
          Vidyavardhini's College of Engineering & Technology — an NBA & NAAC Accredited, Autonomous Institute affiliated to University of Mumbai.
        </p>
      </div>

      {/* About text */}
      <section style={{ padding: '80px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
          <div>
            <SectionTitle label="Who We Are" title="A Legacy of Excellence" center={false} />
            <p style={{ fontSize: 15, color: C.dark, lineHeight: 1.9, marginBottom: 18 }}>
              Established in 1994 under Vidyavardhini's Trust, VCET is one of the premier engineering institutions in Maharashtra. Located at Vasai Road, the institute offers undergraduate and postgraduate programs across eight departments, consistently producing industry-ready graduates.
            </p>
            <p style={{ fontSize: 15, color: C.dark, lineHeight: 1.9, marginBottom: 18 }}>
              Granted autonomous status by the University of Mumbai, VCET follows a curriculum designed to meet global industry standards, with strong emphasis on research, innovation and entrepreneurship.
            </p>
            <p style={{ fontSize: 15, color: C.dark, lineHeight: 1.9 }}>
              With over 320 students placed annually in top MNCs, NBA and NAAC accreditations, and a vibrant campus life, VCET stands as a beacon of technical education in the Vasai-Palghar region.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { label: 'Established', value: '1994' },
              { label: 'Accreditation', value: 'NBA & NAAC' },
              { label: 'Departments', value: '8' },
              { label: 'Total Intake', value: '600+ seats' },
              { label: 'Placements/Year', value: '320+' },
              { label: 'Status', value: 'Autonomous' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', border: `1px solid #E5E2D8`, borderLeft: `4px solid ${C.gold}`, borderRadius: 8, padding: '12px 18px' }}>
                <div style={{ fontSize: 10, color: C.gray, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 3 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Our Direction" title="Vision & Mission" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            <Card>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: C.gold, textTransform: 'uppercase', marginBottom: 16 }}>Vision</div>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 20, fontStyle: 'italic', color: C.navy, lineHeight: 1.8 }}>
                "To be a globally recognized centre of excellence in engineering education, research and innovation that creates ethical, industry-ready engineers who contribute to society."
              </p>
            </Card>
            <Card>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: C.gold, textTransform: 'uppercase', marginBottom: 16 }}>Mission</div>
              {[
                "Provide quality technical education through innovative teaching-learning processes.",
                "Foster research, entrepreneurship and industry collaboration.",
                "Develop ethical, globally competent engineers with strong fundamentals.",
                "Promote inclusive education and holistic student development.",
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: C.gold, color: C.navy, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  <p style={{ fontSize: 14, color: C.dark, lineHeight: 1.65 }}>{m}</p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '80px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Leadership" title="Our Governing Team" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {LEADERSHIP.map((l, i) => (
              <Card key={i}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: C.navy, color: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: 16 }}>
                  {l.name.split(' ').pop()[0]}
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: C.gold, textTransform: 'uppercase', marginBottom: 8 }}>{l.role}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 10 }}>{l.name}</div>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.6 }}>{l.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 40px', background: C.navy }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionTitle label="Our Journey" title="Key Milestones" light />
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, background: `${C.gold}40` }} />
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: 28 }}>
                <div style={{ position: 'absolute', left: -27, top: 4, width: 14, height: 14, borderRadius: '50%', background: C.gold, border: `2px solid ${C.navyD}` }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 1, marginBottom: 4 }}>{m.year}</div>
                <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Get in Touch" title="Contact Us" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { icon: '📍', title: 'Address', lines: ['K.T. Marg, Vartak College Campus', 'Vasai Road (W), Dist-Palghar', 'Maharashtra 401202'] },
              { icon: '📞', title: 'Phone', lines: ['+91 79720 19446', '0250 233 8234'] },
              { icon: '✉️', title: 'Email', lines: ['vcet_inbox@vcet.edu.in', 'principal@vcet.edu.in'] },
            ].map(c => (
              <Card key={c.title}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{c.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>{c.title}</div>
                {c.lines.map(l => <div key={l} style={{ fontSize: 14, color: C.dark, lineHeight: 2 }}>{l}</div>)}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
