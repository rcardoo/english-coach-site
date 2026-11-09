import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import MobileCtaBar from '../MobileCtaBar/MobileCtaBar.jsx'
import BackToTop from '../BackToTop/BackToTop.jsx'
import './Layout.css'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileCtaBar />
      <BackToTop />
    </>
  )
}
