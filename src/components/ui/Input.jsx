const Input = (props) => {
 const { children } = props;
 return (
  <>
   <div>{children}</div>
  </>
 );
};

const Label = (props) => {
 const { htmlFor, label } = props;
 return (
  <>
   <label
    htmlFor={htmlFor}
    class="block mb-2 text-xs font-bold md:text-sm md:font-medium text-gray-500"
   >
    {label}
   </label>
  </>
 );
};

const Field = (props) => {
 const { name, type, id } = props;
 return (
  <input
   name={name}
   type={type}
   id={id}
   class="block w-full p-2 text-gray-700 border border-primary rounded-md bg-white text-xs md:text-sm xl:text-md focus:ring-primary focus:ring-2 focus:outline-none"
  />
 );
};

Input.Root = Input;
Input.Label = Label;
Input.Field = Field;

export default Input;
