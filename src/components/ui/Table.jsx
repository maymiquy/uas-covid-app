const Table = (props) => {
 const { children } = props;

 return (
  <div className="overflow-x-scroll relative shadow-md rounded-[4px] md:rounded-lg">
   <table className="w-full text-xs md:text-sm text-left text-gray-500 table-fixed md:table-auto">
    {children}
   </table>
  </div>
 );
};

const Head = (props) => {
 const {} = props;

 return (
  <thead className="text-[8px] md:text-xs text-left text-gray-700 md:uppercase bg-primary overflow-x-scroll">
   <tr>
    <th scope="col" className="p-1 md:p-3">
     No
    </th>
    <th scope="col" className="py-1 px-3 md:py-3 md:px-6">
     Province
    </th>
    <th scope="col" className="py-1 px-3 md:py-3 md:px-6">
     Positive
    </th>
    <th scope="col" className="py-1 px-3 md:py-3 md:px-6">
     Covered
    </th>
    <th scope="col" className="py-1 px-3 md:py-3 md:px-6">
     Medicate
    </th>
    <th scope="col" className="py-1 px-3 md:py-3 md:px-6">
     Dead
    </th>
   </tr>
  </thead>
 );
};

const Body = (props) => {
 const { iteration, province, positive, recovered, medicate, dead } = props;

 return (
  <tbody className="text-[8px] md:text-xs text-left overflow-x-scroll">
   <tr className="bg-white border-b">
    <td className="p-1 md:p-3">{iteration}</td>
    <td className="py-1 px-3 md:py-4 md:px-6">{province}</td>
    <td className="py-1 px-3 md:py-4 md:px-6">{positive}</td>
    <td className="py-1 px-3 md:py-4 md:px-6">{recovered}</td>
    <td className="py-1 px-3 md:py-4 md:px-6">{medicate}</td>
    <td className="py-1 px-3 md:py-4 md:px-6">{dead}</td>
   </tr>
  </tbody>
 );
};

Table.Root = Table;
Table.Head = Head;
Table.Body = Body;

export default Table;
