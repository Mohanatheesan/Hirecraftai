import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  className = '', 
  children, 
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle hash links smoothly
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
    
    // Call the original onClick if it exists
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};