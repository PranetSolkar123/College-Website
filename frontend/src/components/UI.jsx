import { C } from '../constants'

/* ── Loading Spinner ──────────────────────────────────────────────────────── */
export function Spinner({ size = 40, color = C.gold }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 0' }}>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        border: `3px solid ${color}30`,
        borderTopColor: color,
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  )
}

/* ── Error Box ────────────────────────────────────────────────────────────── */
export function ErrorBox({ message = 'Something went wrong.' }) {
  return (
    <div style={{
      background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: 10,
      padding: '20px 24px', color: '#991B1B', fontSize: 14, textAlign: 'center',
      margin: '24px 0',
    }}>
      ⚠️ {message}
    </div>
  )
}

/* ── Badge ────────────────────────────────────────────────────────────────── */
export function Badge({ text, color = C.navy }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: 10, fontWeight: 700,
      letterSpacing: 1, padding: '3px 10px', borderRadius: 20,
      background: `${color}18`, color, border: `1px solid ${color}30`,
      textTransform: 'uppercase', whiteSpace: 'nowrap',
    }}>{text}</span>
  )
}

/* ── Card ─────────────────────────────────────────────────────────────────── */
export function Card({ children, style = {}, hover = false }) {
  const [hovered, setHovered] = hover ? [false, () => {}] : [null, null]
  return (
    <div
      onMouseEnter={hover ? () => setHovered(true) : undefined}
      onMouseLeave={hover ? () => setHovered(false) : undefined}
      style={{
        background: C.white, borderRadius: 12,
        border: '1px solid #E5E2D8', padding: 28,
        transition: 'all 0.25s',
        ...(hovered ? { boxShadow: '0 12px 32px rgba(11,30,61,0.1)', transform: 'translateY(-3px)' } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ── Section Title ────────────────────────────────────────────────────────── */
export function SectionTitle({ label, title, sub, light = false, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 52 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 2.5,
        color: C.gold, textTransform: 'uppercase', marginBottom: 12,
      }}>{label}</div>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(26px, 4vw, 42px)',
        fontWeight: 700, lineHeight: 1.15, marginBottom: 14,
        color: light ? C.white : C.navy,
      }}>{title}</h2>
      {sub && (
        <p style={{
          fontSize: 15, lineHeight: 1.75, maxWidth: 560,
          margin: center ? '0 auto' : '0',
          color: light ? 'rgba(255,255,255,0.6)' : C.gray,
        }}>{sub}</p>
      )}
    </div>
  )
}

/* ── Divider ──────────────────────────────────────────────────────────────── */
export function GoldDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '8px 0' }}>
      <div style={{ flex: 1, height: 1, background: `${C.gold}30` }} />
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold }} />
      <div style={{ flex: 1, height: 1, background: `${C.gold}30` }} />
    </div>
  )
}
