import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import {Navbar} from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import {AboutSection} from '../components/AboutSection'
import { SkillsSection } from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
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
      <SkillsSection/>
      <ProjectSection/>
    </main>

    {/* footer */}

  </div>
}

export default Home