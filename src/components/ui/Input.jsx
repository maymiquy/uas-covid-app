const Input = (props) => {
 const { children, className } = props;
 return <div className={`flex flex-col ${className}`}>{children}</div>;
};

const Label = (props) => {
 const { htmlFor, label } = props;
 return (
  <>
   <label
    htmlFor={htmlFor}
    className="block mb-2 text-xs font-bold md:text-sm md:font-medium text-gray-500"
   >
    {label}
   </label>
  </>
 );
};

const Field = (props) => {
 const { name, type, id, value, onChange } = props;
 return (
  <input
   value={value}
   name={name}
   type={type}
   id={id}
   onChange={onChange}
   className="block w-full p-2 text-gray-700 border border-primary rounded-md bg-white text-xs md:text-sm xl:text-md focus:ring-primary focus:ring-2 focus:outline-none"
  />
 );
};

Input.Root = Input;
Input.Label = Label;
Input.Field = Field;

export default Input;
