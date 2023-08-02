// import { formatting, isAdult } from "./utils";
import TableRow from "./TableRow";

export default function Table({ tableData }) {
  return (
    <table
      className="mx-auto max-w-2xl text-slate-50"
      cellPadding={0}
      cellSpacing={0}
    >
      <TableRow tableData={tableData} />
    </table>
  );
}
