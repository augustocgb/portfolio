import Image from 'next/image'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CardNoPadding } from 'app/components/CardNoPadding'
import { LightboxImage } from '../components/LightboxImage'

export default function ProjectsPage() {
  return (
    <div className="space-y-16 animate-fade-in">
      <h1 className="text-5xl font-bold mb-8 text-center">Some of my work</h1>
      <div className="grid gap-8 md:grid-cols-1">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold mb-4">Genetic Algorithm on Block Game</h2>
              <p className="animate-fade-up">
                Built an AI agent with a genetic algorithm to optimize strategies for a block placement game. 
                Features automated simulation, fitness-based evolution, and a visualizer for top solutions. 
                Developed in Python using pygame, matplotlib, and numpy.
              </p>
          </Card>

            <CardNoPadding className="flex items-stretch h-full">
              <LightboxImage
                src="/images/blocks-ga.png"
                alt="Project preview"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-transform duration-200 cursor-pointer"
                style={{ display: 'block', height: '100%' }}
              />
            </CardNoPadding>
        </div>

        <Card>
          <h2 className="text-2xl font-bold mb-4">Project 2</h2>
          <p className="animate-fade-up">
            Description of Project 2. Highlight key features and technologies used.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">Project 3</h2>
          <p className="animate-fade-up">
            Description of Project 3. Highlight key features and technologies used.
          </p>
        </Card>
      </div>
    </div>
  )
}