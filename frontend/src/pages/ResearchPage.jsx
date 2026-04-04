import { C } from '../constants'
import { SectionTitle, Card, Badge, Spinner } from '../components/UI'
import useFetch from '../hooks/useFetch'
import { fetchAchievements } from '../api'

export default function ResearchPage() {
  const { data: achievements, loading } = useFetch(fetchAchievements, [])
  const researchAchievements = achievements?.filter(a => a.tag === 'Research' || a.tag === 'Funding') || []

  return (
    <>
      <div style={{ background: `linear-gradient(135deg,${C.navyD},${C.navy})`, padding: '72px 40px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>Innovation & Discovery</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Research at VCET</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 580, margin: '0 auto' }}>
          Driving innovation through funded research, industry collaboration and cutting-edge publications.
        </p>
      </div>

      {/* Stats */}
      <section style={{ padding: '64px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { value: '12+', label: 'Funded Projects' },
              { value: '₹1.5 Cr+', label: 'Research Grants' },
              { value: '80+', label: 'Publications' },
              { value: '6', label: 'Patents Filed' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', border: '1px solid #E5E2D8', borderRadius: 12, padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: C.gold }}>{s.value}</div>
                <div style={{ fontSize: 12, color: C.gray, marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <SectionTitle label="Areas" title="Research Focus Areas" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { icon: '🤖', title: 'Artificial Intelligence & ML', desc: 'Deep learning, NLP, computer vision and explainable AI for real-world applications.' },
              { icon: '🔒', title: 'Cybersecurity', desc: 'Network security, blockchain, cryptography and secure systems design.' },
              { icon: '☁️', title: 'Cloud & IoT', desc: 'Scalable cloud architectures, edge computing and smart IoT deployments.' },
              { icon: '🌱', title: 'Sustainable Engineering', desc: 'Green manufacturing, renewable energy systems and sustainable construction.' },
              { icon: '📡', title: 'VLSI & Embedded Systems', desc: 'IC design, FPGA implementation and real-time embedded systems.' },
              { icon: '📊', title: 'Data Science & Analytics', desc: 'Big data, predictive modelling and business intelligence solutions.' },
            ].map((a, i) => (
              <Card key={i}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{a.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 10 }}>{a.title}</h3>
                <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7 }}>{a.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Achievements from API */}
      {(loading || researchAchievements.length > 0) && (
        <section style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <SectionTitle label="Highlights" title="Recent Research Milestones" />
            {loading && <Spinner />}
            {!loading && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 22 }}>
                {researchAchievements.map((a, i) => (
                  <div key={i} style={{ background: '#F8F7F4', borderRadius: 12, padding: 28, border: '1px solid #E5E2D8', borderLeft: `4px solid ${C.gold}` }}>
                    <Badge text={a.tag} color={C.gold} />
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 600, color: C.navy, margin: '12px 0 8px', lineHeight: 1.3 }}>{a.title}</h3>
                    <p style={{ fontSize: 13.5, color: C.gray, lineHeight: 1.7 }}>{a.description}</p>
                    {a.department_name && <div style={{ marginTop: 12, fontSize: 11, color: C.gold, fontWeight: 700 }}>Dept. of {a.department_name}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* IIC */}
      <section style={{ padding: '80px 40px', background: C.navy }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <SectionTitle label="Innovation" title="Institution's Innovation Council (IIC)" light
            sub="VCET's IIC is recognized by MoE's Innovation Cell, Government of India. It fosters an innovation ecosystem through workshops, challenges and startup mentoring." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginTop: 16 }}>
            {[
              { value: '⭐ Star Rated', label: 'MoE IIC Recognition' },
              { value: '40+', label: 'Startup Ideas Mentored' },
              { value: '20+', label: 'Innovation Events / Year' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: C.gold }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <SectionTitle label="Rankings & Recognition" title="Accreditations & Approvals" />
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['NBA Accredited (CE, IT, MECH, EXTC)', 'NAAC Accredited', 'NIRF Ranked', 'Autonomous Institute', 'AICTE Approved', 'DTE Approved'].map(b => (
              <Badge key={b} text={b} color={C.navy} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
