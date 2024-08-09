interface HeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
  className?: string; 
  children: React.ReactNode;
}

function Heading({ level = 'h1', className = '', children }: HeadingProps) {
  const Tag = level;

  return (
    <Tag className={`font-heading ${className}`}>
      {children}
    </Tag>
  );
}

export default Heading;
