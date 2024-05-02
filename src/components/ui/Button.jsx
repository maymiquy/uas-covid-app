const Button = (props) => {
 const { title, className } = props;

 return (
  <button
   className={`
  bg-primary hover:bg-green-500 shadow-lg text-white font-bold py-2 px-4 rounded ${className}
  `}
  >
   {title}
  </button>
 );
};

export default Button;
