import Table from "./components/table/components/table.component";
import "./index";
import DATA from "./data/data";
import { TableColumn } from "./components/table/classes/table-column.class";
import TableHead from "./components/table/components/table-head.component";
import TableHeader from "./components/table/components/table-header.component";

function App() {
  const tableColums: TableColumn[] = [
    new TableColumn("Nome"),
    new TableColumn("Idade"),
    new TableColumn("Sexo", "bg-green-500"),
    new TableColumn("Endereço"),
  ];
  return (
    <div className="flex h-screen w-screen flex-col bg-gray-600 p-12">
      <div className="min-h-0 w-full flex-1 overflow-y-auto">
        <Table className="">
          <TableHead className="sticky top-0">
            {tableColums.map((tableColumn) => {
              return (
                <TableHeader
                  className={tableColumn.className}
                  name={tableColumn.name}
                ></TableHeader>
              );
            })}
          </TableHead>
          {DATA.map((d) => {
            return (
              <tr>
                <td>{d.name} </td>
                <td>{d.age}</td>
                <td>{d.gender}</td>
                <td>
                  {d.address.city} - {d.address.state}
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default App;
