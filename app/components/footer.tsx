import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Button } from './Button'

export default function Footer() {
  return (
    <footer className="py-8 mt-auto border-t border-[--border] bg-[--bg-primary]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[--text-secondary] text-sm font-medium">
          © {new Date().getFullYear()} Augusto Butkewitsch. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <Button
            href="https://github.com/augustocgb"
            icon={<FaGithub className="w-5 h-5" />}
            label="GitHub"
            openInNewTab={true}
          />
          <Button
            href="https://linkedin.com/in/augustobutkewitsch"
            icon={<FaLinkedin className="w-5 h-5" />}
            label="LinkedIn"
            openInNewTab={true}
          />
          <Button
            href="/#contact"
            icon={<FaEnvelope className="w-5 h-5" />}
            label="Contact"
            openInNewTab={false}
          />
        </div>
      </div>
    </footer>
  )
}