const Card = (props) => {
 const { children, className } = props;
 return (
  <>
   <div
    className={`block ${className} p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:bg-gray-100`}
   >
    {children}
   </div>
  </>
 );
};

const Header = (props) => {
 const { className, heading, sub, subVariant } = props;

 return (
  <>
   <div className="flex flex-col space-y-6 text-center items-center">
    <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-accent">
     {heading}
    </h4>
    <h4
     className={`${className} md:text-6xl font-semibold tracking-tight ${subVariant}`}
    >
     {sub}
    </h4>
   </div>
  </>
 );
};

const Body = (props) => {
 const { children } = props;
 return (
  <>
   <div className="w-full h-min">{children}</div>
  </>
 );
};

Card.Root = Card;
Card.Header = Header;
Card.Body = Body;

export default Card;
