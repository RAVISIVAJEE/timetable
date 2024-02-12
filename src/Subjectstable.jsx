function Subjectstable({ tableofsubjects }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>duration</th>
          <th>occurences</th>
        </tr>
      </thead>
      <tbody>
        {tableofsubjects.map((ele, index) => (
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

export default Subjectstable;
