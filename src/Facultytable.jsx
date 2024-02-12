function Facultytable({ facultyarraytable }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Faculty Name</th>
          <th>Subject</th>
          <th>Sec</th>
        </tr>
      </thead>
      <tbody>
        {facultyarraytable.map((ele, index) => (
          <tr key={index}>
            <td>{ele[0]}</td>
            <td>{ele[1]}</td>
            <td>{ele[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Facultytable;
