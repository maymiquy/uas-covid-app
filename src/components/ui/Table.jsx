const Table = (props) => {
 const { children } = props;

 return (
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
   <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">{children}</table>
   </div>
  </div>
 );
};

const Head = (props) => {
 const {} = props;

 return (
  <thead class="text-xs text-gray-700 uppercase bg-primary">
   <tr>
    <th scope="col" class="py-3 px-6">
     No
    </th>
    <th scope="col" class="py-3 px-6">
     Provinsi
    </th>
    <th scope="col" class="py-3 px-6">
     Positif
    </th>
    <th scope="col" class="py-3 px-6">
     Sembuh
    </th>
    <th scope="col" class="py-3 px-6">
     Dirawat
    </th>
    <th scope="col" class="py-3 px-6">
     Meninggal
    </th>
   </tr>
  </thead>
 );
};

const Body = (props) => {
 const { iteration, province, positive, recovered, medicate, dead } = props;

 return (
  <tbody>
   <tr class="bg-white border-b">
    <td class="py-4 px-6">{iteration}</td>
    <td class="py-4 px-6">{province}</td>
    <td class="py-4 px-6">{positive}</td>
    <td class="py-4 px-6">{recovered}</td>
    <td class="py-4 px-6">{medicate}</td>
    <td class="py-4 px-6">{dead}</td>
   </tr>
  </tbody>
 );
};

Table.Root = Table;
Table.Head = Head;
Table.Body = Body;

export default Table;
