function Facultytable({
  facultyarraytable,
  setfacultyarraytable,
  faculty,
  setfaculty,
  facultytimings,
  setfacultytimings,
}) {
  function handleDelete(e, name, subjectname, secname) {
    e.preventDefault();
    console.log("The name is", name);
    console.log("The subject name is", subjectname);
    console.log("The sec name is", secname);
    setfacultyarraytable(
      facultyarraytable.filter(
        (ele) => ele[0] !== name || ele[1] !== subjectname || ele[2] !== secname
      )
    );
    setfaculty((prevfaculty) => {
      if (prevfaculty[name].length >= 2) {
        prevfaculty[name] = prevfaculty[name].filter(
          (ele) => ele[0] !== subjectname || ele[1] !== secname
        );
        return prevfaculty;
      } else if (prevfaculty[name].length === 1) {
        setfacultytimings((prevtimings) => {
          const newtimings = { ...prevtimings };
          delete newtimings[name];
          return newtimings;
        });
        const updatedFac = { ...prevfaculty };
        delete updatedFac[name];
        return updatedFac;
      }
    });
  }
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
            <button onClick={(e) => handleDelete(e, ele[0], ele[1], ele[2])}>
              Delete
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Facultytable;
