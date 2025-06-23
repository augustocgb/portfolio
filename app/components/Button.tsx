interface ButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function Button({ href, icon, label }: ButtonProps) {
  return (
    <a
      href={href}
      className="bg-bg-primary/30 backdrop-blur-sm border border-text-secondary/10 rounded-lg p-4 
                 hover:bg-bg-secondary/50 transition-background duration-300 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="[&>*]:transition-none">
        {icon}
      </span>
    </a>
  );
}