import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DepartmentsPage from './pages/DepartmentsPage'
import DepartmentDetailPage from './pages/DepartmentDetailPage'
import AboutPage from './pages/AboutPage'
import AdmissionPage from './pages/AdmissionPage'
import PlacementsPage from './pages/PlacementsPage'
import ResearchPage from './pages/ResearchPage'
import FacilitiesPage from './pages/FacilitiesPage'
import StudentLifePage from './pages/StudentLifePage'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/departments" element={<Layout><DepartmentsPage /></Layout>} />
      <Route path="/departments/:code" element={<Layout><DepartmentDetailPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/about/:section" element={<Layout><AboutPage /></Layout>} />
      <Route path="/admission" element={<Layout><AdmissionPage /></Layout>} />
      <Route path="/admission/:section" element={<Layout><AdmissionPage /></Layout>} />
      <Route path="/placements" element={<Layout><PlacementsPage /></Layout>} />
      <Route path="/research" element={<Layout><ResearchPage /></Layout>} />
      <Route path="/facilities" element={<Layout><FacilitiesPage /></Layout>} />
      <Route path="/student-life" element={<Layout><StudentLifePage /></Layout>} />
      <Route path="*" element={
        <Layout>
          <div style={{ textAlign: 'center', padding: '120px 40px', fontFamily: "'Playfair Display', serif" }}>
            <div style={{ fontSize: 72, color: '#C9A84C', fontWeight: 700 }}>404</div>
            <h2 style={{ fontSize: 28, color: '#0B1E3D', margin: '16px 0' }}>Page Not Found</h2>
            <a href="/" style={{ color: '#C9A84C', fontWeight: 600 }}>← Back to Home</a>
          </div>
        </Layout>
      } />
    </Routes>
  )
}
