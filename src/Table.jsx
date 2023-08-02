export default function Table() {
  const list = [
    { firstName: "Adam", lastName: "Kowalski", age: 33 },
    { firstName: "Izabela", lastName: "Makowska", age: 25 },
    { firstName: "Jan", lastName: "Urbański", age: 46 },
  ];
  return (
    <table
      className="mx-auto max-w-2xl text-slate-50"
      cellPadding={0}
      cellSpacing={0}
    >
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>{list[0].firstName}</td>
        <td>{list[0].lastName}</td>
        <td>{list[0].age}</td>
      </tr>
      <tr>
        <td>{list[1].firstName}</td>
        <td>{list[1].lastName}</td>
        <td>{list[1].age}</td>
      </tr>
      <tr>
        <td>{list[2].firstName}</td>
        <td>{list[2].lastName}</td>
        <td>{list[2].age}</td>
      </tr>
    </table>
  );
}
