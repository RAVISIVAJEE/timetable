function Subjectstable({ tableofsubjects, settableofsubjects, setsubjects }) {
  function handleDelete(e, value) {
    e.preventDefault();
    settableofsubjects(tableofsubjects.filter((ele) => ele[0] !== value));
    setsubjects((prevsubjects) => {
      const updatedSubjects = { ...prevsubjects };
      delete updatedSubjects[value];
      return updatedSubjects;
    });
  }
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
            <button onClick={(e) => handleDelete(e, ele[0])}>Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Subjectstable;
