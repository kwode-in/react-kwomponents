import "./index";
import { useEffect, useState } from "react";
import { Person } from "./data/person.class";
import axios from "axios";
import { TableColumn } from "./components/components/table/classes/table-column.class";
import { Table } from "./components/components/table/components/table.index";
import { ItemsPerPage } from "./components/components/table/enum/items-per-page.enum";

function App() {
  const tableColums: TableColumn[] = [
    new TableColumn("Nome", "bg-base-200"),
    new TableColumn("Idade", "bg-base-200"),
    new TableColumn("Sexo", "bg-base-200"),
    new TableColumn("Endereço", "bg-base-200"),
  ];

  const [data, setData] = useState<Person[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(
    ItemsPerPage.FIFTEEN
  );
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData(): Promise<void> {
    axios.defaults.baseURL = "http://localhost:8000";
    setData(
      await axios
        .post(`/person?take=${itemsPerPage}`)
        .then((response) => {
          setTotalItems(response.data.totalItems);
          return response.data.persons as Person[];
        })
        .catch((e) => {
          return [];
        })
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-base-300 p-12">
      <Table.Root
        className="flex w-full flex-col min-h-0 flex-1 rounded-lg p-1 bg-base-200"
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      >
        <Table.Title
          className="bg-base-200 p-2 flex flex-col justify-center items-center"
          title="People"
        />
        <Table.Content className="w-full table table-pin-rows">
          <Table.Head>
            {tableColums.map((tableColumn) => {
              return (
                <Table.Header
                  className={tableColumn.className}
                  name={tableColumn.name}
                  key={tableColumn.name}
                ></Table.Header>
              );
            })}
          </Table.Head>
          <Table.Body>
            {data.map((row) => {
              return (
                <Table.Row className="bg-base-100" key={row.id}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.age}</Table.Cell>
                  <Table.Cell>{row.sex}</Table.Cell>
                  <Table.Cell>{row.address}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Content>
        <Table.Pagination className="sticky bottom-0 bg-base-200 w-full h-10 flex flex-row justify-center items-center">
          <Table.PaginationInfo className="flex flex-row justify-center items-center p-2 absolute left-0" />
          <Table.PaginationMenu className="flex flex-row justify-center items-center p-2 absolute right-0 space-x-1">
            <Table.PrevButton className="btn btn-sm bg-base-300">
              {"<<"}
            </Table.PrevButton>
            <Table.LeftButton className="btn btn-sm bg-base-300">
              {"<"}
            </Table.LeftButton>
            <Table.RightButton className="btn btn-sm bg-base-300">
              {">"}
            </Table.RightButton>
            <Table.SkipButton className="btn btn-sm bg-base-300">
              {">>"}
            </Table.SkipButton>
          </Table.PaginationMenu>
        </Table.Pagination>
      </Table.Root>
    </div>
  );
}

export default App;
