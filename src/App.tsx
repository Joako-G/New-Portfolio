import './App.css'
import data from './data/stats.json'
import dataProjects from './data/projects.json'
import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import type { IStat } from './interfaces/Stat'
import { Sidebar } from './components/Sidebar'
import { Projects } from './components/Projects'
import type { IProject } from './interfaces/IProject'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import emailjs from '@emailjs/browser'

emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })

const stats = data.stats as IStat[]
const projects = dataProjects.projects as IProject[]

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <aside className='sidebar'>
          <Sidebar />
        </aside>
        <div className='content'>
          <AboutMe />
          <Stats stats={stats} />
          <Projects projects={projects} />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default App
