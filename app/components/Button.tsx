interface ButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function Button({ href, icon, label }: ButtonProps) {
  return (
    <a
      href={href}
      className="group bg-bg-primary/30 backdrop-blur-sm border-2 border-[--text-secondary] rounded-lg p-4 
           hover:bg-[--secondary] hover:text-white hover:shadow-lg hover:scale-105 hover:opacity-100 transition-all duration-200 flex items-center justify-center relative overflow-visible"
      style={{ transition: 'all var(--transition)' }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="[&>*]:transition-none z-10 text-[--text-primary]">
      {icon}
      </span>
      {label && (
      <span
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded 
             bg-[--bg-secondary] text-[--text-primary] text-xs opacity-0 group-hover:opacity-100 
             transition-opacity duration-200 shadow-lg z-20 whitespace-nowrap"
      >
        {label}
      </span>
      )}
    </a>
  );
}