import { formatting, isAdult } from "../utils";

export default function TableRow({ tableData }) {
  return (
    <>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Is Adult</th>
      </tr>
      {tableData.map((item) => (
        <tr>
          <td>{formatting(item.firstName)}</td>
          <td>{formatting(item.lastName)}</td>
          <td>{item.age}</td>
          <td>{isAdult(item.age)}</td>
        </tr>
      ))}
    </>
  );
}
