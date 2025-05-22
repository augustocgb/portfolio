import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20">
        <div className="animate-fadeinup">
          <Image
            src="/images/headshot_fbla.png"
            alt="Augusto Butkewitsch"
            width={220}
            height={220}
            className="rounded-full border-4 border-gray-300 dark:border-gray-700 mb-8 shadow-2xl mx-auto"
          />
          <h1 className="text-5xl font-bold mb-6">Augusto Butkewitsch</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
            Statistician | Analytical | Problem Solver
          </p>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          I am currently an undergraduate student at Purdue Univeristy. My interests include artificial intelligence, software engineering, and data visualization. I am passionate about using technology to solve real-world problems and improve people's lives.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc ml-6">
          <li>BSc in Computer Science, Mathematics, and Statistics, Purdue University</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Undergraduate Software Developer</strong>, Envision Center (Aug 2023 - Present)<br />
            - Developing Unity C# and React applications for educational data visualization.<br />
            - Collaborating with researchers and university faculty to bring advanced 3D labs to life.<br />
            - Reaching over 1000 students with interactive learning experiences in chemistry and engineering departments.<br />
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </section>

      {/* Research Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Research</h2>
        <ul className="list-disc ml-6">
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc ml-6">
          <li>
            
          </li>
          <li>
            <strong>Personal Portfolio Website</strong><br />
            - Designed and developed this portfolio using Next.js and Tailwind CSS.<br />
            - Showcases research, projects, and publications.
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: augusto.butkewitsch@gmail.com</p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/augusto-butkewitsch/"
            className="text-blue-600 underline"
          >
            augusto-butkewitsch
          </a>
        </p>
      </section>
    </div>
  )
}
