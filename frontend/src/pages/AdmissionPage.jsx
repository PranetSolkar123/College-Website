import { C } from '../constants'
import { SectionTitle, Card, Badge } from '../components/UI'

const COURSES = [
  { name: 'Computer Engineering', code: 'CE', degree: 'B.E.', intake: 120, duration: '4 Years', accredited: true },
  { name: 'CS (Data Science)', code: 'CSD', degree: 'B.E.', intake: 60, duration: '4 Years', accredited: false },
  { name: 'Information Technology', code: 'IT', degree: 'B.E.', intake: 120, duration: '4 Years', accredited: true },
  { name: 'AI & Data Science', code: 'AIDS', degree: 'B.E.', intake: 60, duration: '4 Years', accredited: false },
  { name: 'Mechanical Engineering', code: 'MECH', degree: 'B.E.', intake: 60, duration: '4 Years', accredited: true },
  { name: 'Electronics & Telecom', code: 'EXTC', degree: 'B.E.', intake: 60, duration: '4 Years', accredited: true },
  { name: 'Civil Engineering', code: 'CIVIL', degree: 'B.E.', intake: 60, duration: '4 Years', accredited: false },
  { name: 'First Year Engineering', code: 'FE', degree: 'B.E.', intake: 480, duration: '1 Year (Common)', accredited: false },
]

const FEE_ROWS = [
  { cat: 'Open Category', tuition: '₹1,20,000', dev: '₹25,000', total: '₹1,45,000' },
  { cat: 'OBC/NT/SBC', tuition: '₹60,000', dev: '₹25,000', total: '₹85,000' },
  { cat: 'SC/ST/VJ', tuition: '₹0 (Free)', dev: '₹25,000', total: '₹25,000' },
  { cat: 'EWS', tuition: '₹60,000', dev: '₹25,000', total: '₹85,000' },
]

const DOCS = [
  'SSC (10th) Marksheet & Certificate',
  'HSC (12th) Marksheet & Certificate',
  'MHT-CET / JEE Score Card',
  'Leaving Certificate',
  'Caste Certificate (if applicable)',
  'Non-Creamy Layer Certificate (if applicable)',
  'Domicile / Nationality Certificate',
  'Aadhar Card',
  '6 Passport-size Photographs',
  'Medical Fitness Certificate',
]

export default function AdmissionPage() {
  return (
    <>
      <div style={{ background: `linear-gradient(135deg,${C.navyD},${C.navy})`, padding: '72px 40px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: C.gold, marginBottom: 12, textTransform: 'uppercase' }}>Admissions Open</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>Admission A.Y. 2026–27</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto 36px' }}>
          CAP Round admissions via MHT-CET / JEE. Seats also available under Institute Level and NRI quota.
        </p>
        <a href="https://forms.gle/uh7sZS5JLzn2RecG7" target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', background: C.gold, color: C.navy, padding: '14px 40px', borderRadius: 6, fontWeight: 700, fontSize: 15 }}>
          Enquire Now →
        </a>
      </div>

      {/* Courses & Intake */}
      <section style={{ padding: '80px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Programs Offered" title="Courses & Intake 2026–27" />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <thead>
                <tr style={{ background: C.navy }}>
                  {['Department', 'Code', 'Degree', 'Intake', 'Duration', 'Accreditation'].map(h => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 1, textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COURSES.map((c, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F0EEE9', background: i % 2 === 0 ? '#fff' : '#FAFAF8' }}>
                    <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 600, color: C.navy }}>{c.name}</td>
                    <td style={{ padding: '14px 18px', fontSize: 13, color: C.gray }}>{c.code}</td>
                    <td style={{ padding: '14px 18px', fontSize: 13, color: C.gray }}>{c.degree}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 700, color: C.gold }}>{c.intake}</td>
                    <td style={{ padding: '14px 18px', fontSize: 13, color: C.gray }}>{c.duration}</td>
                    <td style={{ padding: '14px 18px' }}>
                      {c.accredited ? <Badge text="NBA Accredited" color="#2C5F2E" /> : <Badge text="NAAC" color={C.gold} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionTitle label="Fees" title="Fee Structure 2025–26" sub="Approximate fees per year. Subject to revision by DTE/University." />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <thead>
                <tr style={{ background: C.navy }}>
                  {['Category', 'Tuition Fee', 'Development Fee', 'Total / Year'].map(h => (
                    <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 1, textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEE_ROWS.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F0EEE9', background: i % 2 === 0 ? '#fff' : '#FAFAF8' }}>
                    <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 600, color: C.navy }}>{r.cat}</td>
                    <td style={{ padding: '14px 20px', fontSize: 14, color: C.gray }}>{r.tuition}</td>
                    <td style={{ padding: '14px 20px', fontSize: 14, color: C.gray }}>{r.dev}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, fontWeight: 700, color: C.gold }}>{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: C.gray, marginTop: 12, textAlign: 'center' }}>
            * Fees shown are indicative. EBC/Minority scholarships available. Contact admissions office for exact details.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section style={{ padding: '80px 40px', background: '#F8F7F4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionTitle label="Checklist" title="Documents Required" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {DOCS.map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #E5E2D8', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: `${C.gold}20`, color: C.gold, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: 13.5, color: C.dark }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: C.navy, textAlign: 'center' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,4vw,38px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
          Ready to Join VCET?
        </div>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Fill the enquiry form and our admissions team will contact you within 24 hours.</p>
        <a href="https://forms.gle/uh7sZS5JLzn2RecG7" target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', background: C.gold, color: C.navy, padding: '14px 40px', borderRadius: 6, fontWeight: 700, fontSize: 15 }}>
          Apply for 2026–27 →
        </a>
      </section>
    </>
  )
}
