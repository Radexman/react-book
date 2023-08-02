export default function Table() {
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
        <td>Adam</td>
        <td>Kowalski</td>
        <td>33</td>
      </tr>
      <tr>
        <td>Izabela</td>
        <td>Makowska</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Jan</td>
        <td>Urbański</td>
        <td>46</td>
      </tr>
    </table>
  );
}
