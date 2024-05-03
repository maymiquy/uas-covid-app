const Button = (props) => {
 const { title, className } = props;

 return (
  <button
   className={`
  bg-primary hover:bg-primary hover:opacity-90 shadow-lg truncate text-white font-bold py-2 px-4 rounded ${className}
  `}
  >
   {title}
  </button>
 );
};

export default Button;
