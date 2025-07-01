interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function CardNoPadding({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-bg-primary/30 backdrop-blur-sm border-2 border-[--text-secondary] rounded-lg ${className}`}>
      {children}
    </div>
  );
}