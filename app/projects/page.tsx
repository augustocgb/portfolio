import Image from 'next/image'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CardNoPadding } from 'app/components/CardNoPadding'
import { ImageCarousel } from '../components/ImageCarousel'

export default function ProjectsPage() {
  return (
    <div className="space-y-16 animate-fade-in">
      <h1 className="text-5xl font-bold mb-8 text-center">Work Examples</h1>
      <div className="grid gap-8 md:grid-cols-1">

        {/* Genetic Algorithm for Block Game */}
        <Card>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Genetic Algorithm for Block Game</h2>
              <p className="animate-fade-up">
                Developed an AI agent using a genetic algorithm to discover optimal strategies for a custom block placement puzzle game. 
                The system simulates thousands of agents per generation, evolving their decision-making logic based on a fitness function that rewards efficient and high-scoring solutions. 
                Key features include automated gameplay simulation, dynamic mutation and crossover, and a real-time visualizer to observe the evolution of strategies. 
                Made in Python, using pygame for interactive visualization, matplotlib for analytics and progress tracking, and numpy for efficient numerical operations.
              </p>
            </div>
            <div>
              <CardNoPadding>
                <div className="w-full">
                  <ImageCarousel
                    images={[
                      { src: "/images/blocks-ga.png", alt: "Block Game Genetic Algorithm 1" },
                      { src: "/images/blocks-ga-2.png", alt: "Block Game Genetic Algorithm 2" }
                    ]}
                    className="w-full"
                    style={{ display: 'block' }}
                  />
                </div>
              </CardNoPadding>

              <br />
                <div className="flex gap-2 justify-end">
                <Button
                href="https://github.com/augustocgb/blocks-ga"
                icon={
                  <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                }
                label="GitHub"
              />
              </div>
            </div>
          </div>
        </Card>

        {/* DeepPhish */}
        <Card>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <CardNoPadding>
                <div className="w-full">
                  <ImageCarousel
                    images={[
                      { src: "/images/phish-1.png", alt: "DeepPhish 1" },
                      { src: "/images/phish-2.png", alt: "DeepPhish 2" },
                      { src: "/images/phish-3.png", alt: "DeepPhish 3" },
                      { src: "/images/phish-4.png", alt: "DeepPhish 4" }
                    ]}
                    className="w-full"
                    style={{ display: 'block' }}
                  />
                </div>
              </CardNoPadding>

              <br />
                <div className="flex gap-2 justify-start">
                <Button
                href="https://github.com/ChristopherTrumpet/deepphish"
                icon={
                  <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                }
                label="GitHub"
              />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">DeepPhish</h2>
              <p className="animate-fade-up">
                Worked as part of a team to develop DeepPhish, an advanced cybersecurity consulting tool designed to predict and test phishing attacks.
                The project involved creating a sophisticated classification model to analyze and predict user behavior in response to phishing attempts based on their details and tech literacy, using machine learning and data analytics.
                Using these results, the tool utilizes self-hosted LLMs to generate personalized phishing emails, with varying difficulty levels, to simulate real-world phishing attacks and assess employee responses.
                An automated reporting system then generates a detailed PDF with insight into individual employees and provides recommendations.
                Made in 24 hours for Catapult Hacks.
              </p>
            </div>
            
          </div>
        </Card>

        {/* Raymarching Julia Sets */}
        <Card>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Algorithms for Julia Sets</h2>
                <p className="animate-fade-up">
                Developed both 2D and 3D visualizers for Julia sets and related fractals, utilizing rasterization and raymarching techniques, respectively. 
                The project focuses on delivering an interactive and educational platform that allows users to explore the intricate mathematical properties of fractals in real time. 
                Features include adjustable parameters for set generation, real-time feedback on escape rates, and visual explanations of the underlying mathematical concepts. 
                Made with Unity with C# for the core logic and custom shader programming. 
                This tool serves as both a learning resource and a demonstration of optimized rendering strategies for complex mathematical structures.
                </p>
            </div>

            <div>
              <CardNoPadding>
                <div className="w-full">
                  <ImageCarousel
                    images={[
                      { src: "/images/julia-1.png", alt: "Julia Set 1" },
                      { src: "/images/julia-2.png", alt: "Julia Set 2" },
                      { src: "/images/julia-3.png", alt: "Julia Set 3" },
                      { src: "/images/julia-4.png", alt: "Julia Set 4" }
                    ]}
                    className="w-full"
                    style={{ display: 'block' }}
                  />
                </div>
              </CardNoPadding>

              <br />
                <div className="flex gap-2 justify-start">
                <Button
                  href="https://github.com/augustocgb/raymarch"
                  icon={
                  <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  }
                  label="Raymarch"
                />

                <Button
                  href="https://github.com/augustocgb/julia"
                  icon={
                  <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  }
                  label="Julia"
                />

                <Button
                  href="https://augustocgb.github.io/raymarch/"
                  icon={
                  <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
                    <path d="M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm0 2h16v9H4V7zm5 12v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
                  </svg>
                  }
                  label="3D Demo"
                />

                <Button
                  href="https://augustocgb.github.io/julia/"
                  icon={
                  <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: 'var(--text-primary)' }}>
                    <path d="M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm0 2h16v9H4V7zm5 12v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/>
                  </svg>
                  }
                  label="2D Demo"
                />
                </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  )
}