export const C = {
  navy:    '#0B1E3D',
  navyD:   '#071429',
  navyL:   '#152B54',
  gold:    '#C9A84C',
  goldL:   '#E8C96C',
  goldPale:'#FDF6E3',
  white:   '#FFFFFF',
  off:     '#F4F2EE',
  light:   '#ECEAE4',
  gray:    '#6B7280',
  dark:    '#374151',
}

export const NAV_ITEMS = [
  {
    label: 'About Us',
    path: '/about',
    sub: [
      { label: 'About VCET',       path: '/about' },
      { label: "President's Desk", path: '/about' },
      { label: "Principal's Desk", path: '/about' },
      { label: 'Governing Council',path: '/about' },
      { label: 'Administration',   path: '/about' },
      { label: 'Strategic Plan',   path: '/about' },
    ],
  },
  {
    label: 'Admission',
    path: '/admission',
    sub: [
      { label: 'Courses & Intake',    path: '/admission' },
      { label: 'Fee Structure 25-26', path: '/admission' },
      { label: 'Scholarships',        path: '/admission' },
      { label: 'Documents Required',  path: '/admission' },
      { label: 'Cut Off 25-26',       path: '/admission' },
    ],
  },
  {
    label: 'Departments',
    path: '/departments',
    sub: [
      { label: 'Computer Engineering',      path: '/departments/CE' },
      { label: 'CS (Data Science)',          path: '/departments/CSD' },
      { label: 'Information Technology',    path: '/departments/IT' },
      { label: 'AI & Data Science',         path: '/departments/AIDS' },
      { label: 'Mechanical Engineering',    path: '/departments/MECH' },
      { label: 'Electronics & Telecom',     path: '/departments/EXTC' },
      { label: 'Civil Engineering',         path: '/departments/CIVIL' },
      { label: 'First Year Engineering',    path: '/departments/FE' },
    ],
  },
  {
    label: 'Academics',
    path: '/about',
    sub: [
      { label: 'Dean Academics',          path: '/about' },
      { label: 'Academic Calendar',       path: '/about' },
      { label: 'Teaching Learning Process', path: '/about' },
      { label: 'Swayam-NPTEL',            path: '/about' },
    ],
  },
  {
    label: 'Research',
    path: '/research',
    sub: [
      { label: 'Introduction',    path: '/research' },
      { label: 'Funded Research', path: '/research' },
      { label: 'Publications',    path: '/research' },
      { label: 'Patents',         path: '/research' },
      { label: 'IIC',             path: '/research' },
      { label: 'NIRF',            path: '/research' },
    ],
  },
  {
    label: 'Facilities',
    path: '/facilities',
    sub: [
      { label: 'Central Computing Facility', path: '/facilities' },
      { label: 'Library',                    path: '/facilities' },
      { label: 'Counselling Cell',           path: '/facilities' },
      { label: 'Sports & Gymkhana',          path: '/facilities' },
    ],
  },
  {
    label: 'Student Life',
    path: '/student-life',
    sub: [
      { label: "Students' Council", path: '/student-life' },
      { label: 'IEEE',              path: '/student-life' },
      { label: 'CSI',               path: '/student-life' },
      { label: 'NSS',               path: '/student-life' },
      { label: 'Hackathon',         path: '/student-life' },
    ],
  },
  {
    label: 'Placements',
    path: '/placements',
    sub: [
      { label: 'Placement Record', path: '/placements' },
      { label: 'Training',         path: '/placements' },
      { label: 'E-CELL',           path: '/placements' },
      { label: 'IIIC',             path: '/placements' },
    ],
  },
]

export const DEPT_COLORS = {
  CE:    '#1A3C6E',
  CSD:   '#2D5A8E',
  IT:    '#1B5E8A',
  AIDS:  '#0F4C75',
  MECH:  '#7B3F00',
  EXTC:  '#1B5E20',
  CIVIL: '#37474F',
  FE:    '#6A1B9A',
}

export const DEPT_ICONS = {
  CE: '💻', CSD: '📊', IT: '🌐', AIDS: '🤖',
  MECH: '⚙️', EXTC: '📡', CIVIL: '🏗️', FE: '🎓',
}
