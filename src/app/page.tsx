'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/app/hero/page'
import About from '@/app/about/page'
import Services from '@/app/service/page'
import Contact from '@/app/contact/page'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <About showBgImage={false} isAboutPage={false} />
            <Services showBgImage={false} /> {/* Community visible by default */}
            <Contact showBgImage={false} />
          </>
        )
      case 'about':
        return <About showBgImage={true} isAboutPage={true} />
      case 'services':
        return <Services showBgImage={true} inServicePage={true} />
      case 'contact':
        return <Contact showBgImage={true} />
      default:
        return (
          <>
            <Hero />
            <About showBgImage={false} isAboutPage={false} />
            <Services showBgImage={false} /> {/* Community visible */}
            <Contact showBgImage={false} />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  )
}
