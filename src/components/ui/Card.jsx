const Card = (props) => {
 const { children } = props;
 return (
  <>
   <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:bg-gray-100">
    {children}
   </div>
  </>
 );
};

const Header = (props) => {
 const { heading, sub, subVariant } = props;

 return (
  <>
   <div class="flex flex-col text-center items-center">
    <h4 className="text-3xl font-semibold tracking-tight text-accent">
     {heading}
    </h4>
    <h4 className={`text-4xl font-semibold tracking-tight ${subVariant}`}>
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
