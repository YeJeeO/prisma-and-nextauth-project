import RTable from '../components/RTable';
import getStores from '../store/generateStores';
import { columnsArray } from '../datatypes/types';

type JSPUser = {
  id: string,
  name: string,
  username: string,
  phone: string

    }

const
  jsonplaceholderStores = getStores<JSPUser>('/api/public/todoItem/'),
  columns: columnsArray<JSPUser>[] = [
    { name: 'id', getVal: ({ id }) => id },
    { name: 'Name', getVal: ({ name }) => name, setVal: val => ({ name: val }) },
    { name: 'Phone', getVal: ({ phone }) => phone, setVal: val => ({ phone: val }) },
  ];

// // Object.assign(columns,{[accordionSymbol]:()=>
// //   <RTable />});


export default function RTableDemoPage() {
  return <RTable<JSPUser> columns={columns} apiStores={jsonplaceholderStores} />;
}
