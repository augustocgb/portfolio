import Image from 'next/image'
import { Card } from './components/Card'
import { Button } from './components/Button'
import ContactForm from './components/ContactForm'
import Typewriter from './components/Typewriter'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className="space-y-16 animate-fade-in">
      <section className="text-center">
        <div className="animate-fade-up">
          <Image
            className="rounded-full border-2 border-[--text-primary] mx-auto mb-8 shadow-lg transition-transform duration-500"
            src="/images/headshot_fbla.png"
            alt="Augusto Butkewitsch"
            width={220}
            height={220}
            priority
          />
          <h1 className="text-5xl font-bold mb-4">Augusto Butkewitsch</h1>
          <div className="h-8 mb-8 flex justify-center items-center">
             <Typewriter 
                words={["Analytical Thinker", "Problem Solver", "Innovator", "Full Stack Developer", "AI Enthusiast"]} 
                className="text-2xl opacity-80"
             />
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              href="https://github.com/augustocgb"
              icon={<FaGithub className="w-5 h-5" />}
              label="GitHub"
            />
            <Button
              href="https://www.linkedin.com/in/augustobutkewitsch"
              icon={<FaLinkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <Button
              href="#contact"
              icon={<FaEnvelope className="w-5 h-5" />}
              label="Contact"
              openInNewTab={false}
            />
          </div>
        </div>
      </section>

      <div className="grid gap-8 md:grid-cols-1">
        <Card>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="animate-fade-up">
            I am currently an undergraduate student at Purdue Univeristy. 
            My interests include artificial intelligence, software engineering, and data visualization. 
            I am passionate about using technology to solve real-world problems and improve people's lives.
          </p>
        </Card>
        
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold mb-4">🎓 Education</h2>
          <div className="animate-fade-up">
            <h3 className="font-semibold">Purdue University</h3>
            <p>BSc in Computer Science, Mathematics, and Statistics</p>
            <p className="opacity-70">Expected May 2027 • GPA: 3.92/4.0</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">🛠️ Projects</h2>
            <div className="animate-fade-up">
            <p>Explore my software, data, finance, and AI projects.</p>
            <div className="h-2" />
                <div className="justify-center">
                  <Button
                  href="/projects"
                  openInNewTab={false}
                >
                  View <FaArrowRight className="ml-2 w-4 h-4" />
                </Button>
                </div>
            </div>
        </Card>
      </div>

        <ContactForm id="contact" />

    </div>
  </div>
  )
}