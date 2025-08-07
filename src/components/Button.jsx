import ButtonSvg from '../assets/icons/buttonSvg';

const Button = ({ className, href , onClick , children , px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-14 transition-colors
    hover:text-n-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-2'} ${className || ''}`;

  const spanClasses = 'relative z-10';

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
