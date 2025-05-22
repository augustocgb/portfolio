import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-12 text-black dark:text-neutral-200">
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
          {/* Text color for h1 */}
          <h1 className="text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Augusto Butkewitsch</h1>
          {/* Text color for p */}
          <p className="text-2xl mb-2 text-neutral-700 dark:text-neutral-300">
            Statistician | Analytical | Problem Solver
          </p>
        </div>
      </section>

      <p>This website is still under construction!</p>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">About</h2>
        {/* Paragraph text will inherit from the main div's text-neutral-800 dark:text-neutral-200 */}
        <p>
          I am currently an undergraduate student at Purdue Univeristy. My interests include artificial intelligence, software engineering, and data visualization. I am passionate about using technology to solve real-world problems and improve people's lives.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Education</h2>
        <ul className="list-disc ml-6">
          {/* List item text will inherit */}
          <li>
            BSc in Computer Science, Mathematics, and Statistics, Purdue University<br />
            - GPA: 3.9/4.0<br />
            - Expected Graduation: May 2027<br />
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Experience</h2>
        <ul className="space-y-6 ml-6">
          <li className="flex items-start">
            {/* Adjusted date text color for better dark mode visibility */}
            <div className="flex flex-col items-center justify-center pr-6 min-w-[110px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
              <span className="text-center">Aug 2023</span>
              <span className="block text-lg leading-none mx-auto">|</span>
              <span className="text-center">Present</span>
            </div>
            <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700 flex-1">
              {/* Strong and regular text will inherit, or you can be more specific */}
              <strong className="text-neutral-900 dark:text-neutral-100">Undergraduate Software Developer</strong>, Envision Center<br />
              - Developing Unity C# and React applications for educational data visualization.<br />
              - Collaborating with researchers and university faculty to bring advanced 3D labs to life.<br />
              - Reaching over 1000 students with interactive learning experiences in chemistry and engineering departments.<br />
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex flex-col items-center justify-center pr-6 min-w-[110px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
              <span className="text-center">Feb 2022</span>
              <span className="block text-lg leading-none mx-auto">|</span>
              <span className="text-center">Jul 2022</span>
            </div>
            <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700 flex-1">
              <strong className="text-neutral-900 dark:text-neutral-100">Technical Support Intern</strong>, OmniQuest<br />
              - Learned foundations of optimization, statistics, and simulation.<br />
              - Developed response surfaces through Design of Experiments (DoE) and scientific software.<br />
              - Planned, recorded, and edited technical reports and video tutorials accessible to pre-university audiences.<br />
            </div>
          </li>
        </ul>
      </section>

      {/* Research Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Research</h2>
        <ul className="space-y-6 ml-6">
          <li className="flex items-start">
            <div className="flex flex-col items-center justify-center pr-6 min-w-[110px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
              <span className="text-center">Aug 2024</span>
              <span className="block text-lg leading-none mx-auto">|</span>
              <span className="text-center">May 2025</span>
            </div>
            <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700 flex-1">
              <strong className="text-neutral-900 dark:text-neutral-100">Undergraduate Data Science Research</strong>, The Data Mine - BASF Corporate Partner<br />
              - Analyzed crop data and market indicators to identify trends for crop yield and price prediction.<br />
              - Learned about machine learning, feature engineering, and time series analysis.<br />
              - Developed predictive models (ARIMA, XGBoost, LSTM) to forecast future market conditions.<br />
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex flex-col items-center justify-center pr-6 min-w-[110px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
              <span className="text-center">Jan 2025</span>
              <span className="block text-lg leading-none mx-auto">|</span>
              <span className="text-center">May 2025</span>
            </div>
            <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-700 flex-1">
              <strong className="text-neutral-900 dark:text-neutral-100">Undergraduate Mathematics Research</strong>, Purdue Experimental Math Lab<br />
              - Researched and implemented several algorithms for fractal and complex number arithmetic.<br />
              - Created interactive graphics apps to visualize Julia Sets in various 2D and 3D contexts.<br />
              - Deployed sophisticated web-based interfaces available for fractal exploration.<br />
            </div>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Projects</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong className="text-neutral-900 dark:text-neutral-100">Personal Portfolio Website</strong><br />
            - Designed and developed this portfolio using Next.js and Tailwind CSS.<br />
            - Showcases research, projects, and publications.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Contact</h2>
        <p>Email: augustobutkewitsch@gmail.com</p>
        <p>
          LinkedIn:{' '}
          {/* Adjusted link color for dark mode */}
          <a
            href="https://www.linkedin.com/in/augustobutkewitsch/"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            https://www.linkedin.com/in/augustobutkewitsch/
          </a>
        </p>
      </section>
    </div>
  )
}