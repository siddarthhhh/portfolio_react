import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import {Navbar} from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import {AboutSection} from '../components/AboutSection'

const Home = () => {
  return <div className='min-h-screen'>
    
    {/* theme toggle */}
    <ThemeToggle/>


    {/* background effect */}

    <StarBackground/>

    {/* navbar */}
    <Navbar/>

    {/* main content */}
    <main>
      <HeroSection/>
      <AboutSection/>
    </main>

    {/* footer */}

  </div>
}

export default Home