interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function CardNoPadding({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-bg-primary/30 backdrop-blur-sm border-1.5 border-gray-200 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}