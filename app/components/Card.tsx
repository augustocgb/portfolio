import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className = '', href }: CardProps) {
  const content = (
    <div className={`bg-[--bg-primary] backdrop-blur-sm border-1.5 border-[--border] rounded-lg p-6 shadow-md ${className}`}>
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