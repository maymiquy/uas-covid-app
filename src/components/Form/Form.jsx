const Form = (props) => {
 const { action, method, children } = props;
 return (
  <div className="py-6 px-8">
   <form action={action} method={method} className="gap-6">
    {children}
   </form>
  </div>
 );
};

export default Form;
