import Header from "./Header";
import Table from "./Table";
import list from "./data";

export default function App() {
  return (
    <>
      <Header />
      <Table tableData={list} />
    </>
  );
}
