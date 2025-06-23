interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function CardNoPadding({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-bg-primary/30 backdrop-blur-sm border border-text-secondary/10 rounded-lg ${className}`}>
      {children}
    </div>
  );
}