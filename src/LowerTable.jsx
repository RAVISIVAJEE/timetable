function LowerTable({ Branch, Year, LowerTableData, section }) {
  // Check if LowerTableData and its nested levels are defined
  console.log("LowerTableData in LowerTable", LowerTableData);
  if (
    !LowerTableData ||
    !LowerTableData[Branch] ||
    !LowerTableData[Branch][Year] ||
    !LowerTableData[Branch][Year][section]
  ) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Course Title</th>
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(LowerTableData[Branch][Year][section]).map(
            ([courseTitle, faculty], index) => (
              <tr key={courseTitle}>
                <td>{index + 1}</td>
                <td>{courseTitle}</td>
                <td>{faculty}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LowerTable;
