const Button = ({ 
  children, 
  variant = 'primary', 
  icon = null, 
  onClick, 
  href,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center gap-3 px-6 py-2 rounded-full font-bold text-lg md:text-xl uppercase tracking-wider transition-all duration-300 hover:shadow-lg';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#EBBB78] to-[#9F7B49] text-black',
    dark: 'bg-black text-white hover:bg-gray-900',
    'dark-gradient': 'bg-gradient-to-r from-[#452B17] to-[#1E0C05] text-white',
    outline: 'border border-gray-400 text-gray-800 hover:border-primary hover:text-primary',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="flex items-center justify-center w-5 h-5 rotate-[-90deg]">
          {icon}
        </span>
      )}
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

