const Button = ({
 title,
 variant = "primary",
 className = "",
 type,
 ...rest
}) => {
 const variants = {
  primary:
   "bg-primary hover:bg-primary-700 shadow-md text-white font-bold py-2 px-4 rounded",
  secondary:
   "bg-secondary hover:bg-secondary-700 shadow-md text-white font-bold py-2 px-4 rounded",
  tertiary:
   "bg-tertiary hover:bg-tertiary-700 shadow-md text-white font-bold py-2 px-4 rounded",
  danger:
   "bg-danger hover:bg-danger-700 shadow-md text-white font-bold py-2 px-4 rounded",
  paginate:
   "bg-gray-200 hover:bg-gray-300 shadow-md text-accent hover:text-white py-2 px-4 rounded",
 };

 const variantStyle = variants[variant] || variants.primary;

 return (
  <button className={`${variantStyle} ${className}`} type={type} {...rest}>
   {title}
  </button>
 );
};

export default Button;
