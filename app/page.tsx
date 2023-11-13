import Hero from '@/components/Hero'
import Encryption from '@/components/main/Encryption'
import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import StarsCanvas from '@/components/main/StarBackground'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <StarsCanvas />
        <Navbar />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
