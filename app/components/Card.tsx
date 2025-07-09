import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className = '', href }: CardProps) {
  const content = (
    <div className={`bg-[--bg-primary]/60 backdrop-blur-sm border-2 border-[--text-secondary] rounded-lg p-6 shadow-md ${className}`}>
      {children}
    </div>
  );
  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}