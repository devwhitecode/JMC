const Button = ({ 
  children, 
  variant = 'primary', 
  icon = null, 
  onClick, 
  href,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base uppercase tracking-wide transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-[#ECB373] hover:bg-[#d9a562] text-black',
    dark: 'bg-[#1A1208] hover:bg-black text-white',
    outline: 'border-2 border-gray-400 text-gray-800 hover:border-[#ECB373] hover:text-[#ECB373]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const IconCircle = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M10 6L10 14M10 14L6 10M10 14L14 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const content = (
    <>
      {children}
      {icon && <IconCircle />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;

