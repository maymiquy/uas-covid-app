import React from "react";

const Form = (props) => {
 const { onSubmit, children } = props;
 return (
  <div className="py-6 px-8">
   <form onSubmit={onSubmit} className="gap-6">
    {children}
   </form>
  </div>
 );
};

export default Form;
