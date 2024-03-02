import "./index";
import { useEffect, useState } from "react";
import { Person } from "./data/person.class";
import axios from "axios";
import { TableColumn } from "./components/components/table/classes/table-column.class";
import Table from "./components/components/table/components/table.component";
import TableHead from "./components/components/table/components/table-head.component";
import TableHeader from "./components/components/table/components/table-header.component";
import TableBody from "./components/components/table/components/table-body.component";
import TableRow from "./components/components/table/components/table-row.component";
import TableCell from "./components/components/table/components/table-cell.component";
import Loading from "./components/shared/loading/loading.component";
import TableContent from "./components/components/table/components/table-content.component";
import TablePagination from "./components/components/table/components/table-pagination.component";
import TableTitle from "./components/components/table/components/table-title.component";

function App() {
  const tableColums: TableColumn[] = [
    new TableColumn("Nome", "bg-base-200"),
    new TableColumn("Idade", "bg-base-200"),
    new TableColumn("Sexo", "bg-base-200"),
    new TableColumn("Endereço", "bg-base-200"),
  ];

  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData(): Promise<void> {
    axios.defaults.baseURL = "http://localhost:8000";
    setData(
      await axios
        .post("/person?take=100")
        .then((response) => {
          setIsLoading(false);
          return response.data.persons as Person[];
        })
        .catch(() => {
          setIsLoading(false);
          return [];
        })
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-base-300 p-12">
      {isLoading && (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Loading size="w-20 h-20" />
        </div>
      )}
      {!isLoading && (
        <Table className="flex w-full flex-col min-h-0 flex-1 rounded-lg p-1 bg-base-200">
          <TableTitle
            className="bg-base-200 p-2 flex flex-col justify-center items-center"
            title="People"
          />
          <TableContent className="w-full table table-pin-rows">
            <TableHead>
              {tableColums.map((tableColumn) => {
                return (
                  <TableHeader
                    className={tableColumn.className}
                    name={tableColumn.name}
                    key={tableColumn.name}
                  ></TableHeader>
                );
              })}
            </TableHead>
            <TableBody>
              {data.map((row) => {
                return (
                  <TableRow className="bg-base-100" key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.sex}</TableCell>
                    <TableCell>{row.address}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableContent>
          <TablePagination className="sticky bottom-0 bg-base-200 w-full h-10">
            teste
          </TablePagination>
        </Table>
      )}
    </div>
  );
}

export default App;
