import Header from "./Header";
import LowerTable from "./LowerTable";
import * as XLSX from "xlsx";

function InfoTable(data) {
  const selectedOption = data["selectedOption"];
  const setselectedOption = data["setselectedOption"];
  const dataa = data["data"];
  const LowerTableData = data["LowerTableData"];
  const branch = data["branch"];
  const year = data["year"];
  const setLowerTableData = data["setLowerTableData"];
  const weeks = ["MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const Suffix = [".1", ".2", ".3", ".4", ".5", ".6", ".7", ".8", ".9"];
  const correspondings = {
    MON: "1",
    TUE: "2",
    WED: "3",
    THUR: "4",
    FRI: "5",
    SAT: "6",
  };

  if (!dataa || Object.keys(dataa).length === 0) {
    return <p>No data available</p>;
  }

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new(); // Create a new workbook

    Object.entries(dataa).forEach(([section, sectionData]) => {
      // Create a single sheet for each section
      const ws = XLSX.utils.table_to_sheet(
        document.getElementById(`table-${section}`)
      );
      const lowerTable = document.getElementById(`lowertable-${section}`);

      // Get the section table's column count for alignment
      const sectionTableColumnCount = ws["!ref"]
        .split(":")[1]
        .replace(/\D/g, "");

      // Extract lower table data as an array of arrays
      const lowerTableData = Array.from(lowerTable.querySelectorAll("tr")).map(
        (row) =>
          Array.from(row.querySelectorAll("td")).map((cell) => cell.innerText)
      );

      // Adjust lower table data if column counts differ
      if (sectionTableColumnCount !== lowerTableData[0].length) {
        lowerTableData.forEach((row) => {
          if (row.length < sectionTableColumnCount) {
            row.push(...Array(sectionTableColumnCount - row.length).fill("")); // Add empty cells
          } else if (row.length > sectionTableColumnCount) {
            row.splice(sectionTableColumnCount); // Remove extra cells
          }
        });
      }

      // Append lower table data to the section table sheet
      lowerTableData.forEach((row, rowIndex) => {
        const newRow = ws["!ref"].split(":")[1].slice(-1) * 1 + rowIndex + 1; // Calculate new row index
        ws[`A${newRow}`] = { v: row[0] }; // Set first cell value
        for (let colIndex = 1; colIndex < row.length; colIndex++) {
          ws[`B${colIndex}${newRow}`] = { v: row[colIndex] }; // Set remaining cell values
        }
      });

      XLSX.utils.book_append_sheet(wb, ws, section);
    });

    XLSX.writeFile(wb, "time_tables.xlsx");
  };

  return (
    <>
      <Header />
      <div>
        {Object.entries(dataa).map(([section, sectionData]) => (
          <>
            <section>
              <h3>CLASS TIME TABLE</h3>
              <br />
              <label>Department:</label>
              <br />
              <label>Academic Year :2023-24</label>
              <br />
              <label>Section :{section}</label>
            </section>
            <table id={`table-${section}`} key={section} border="1">
              <thead>
                <tr>
                  <th>Timing</th>
                  <th>9:00 AM to 10:00 AM</th>
                  <th>10:00 AM to 11:00 AM</th>
                  <th>11:00 AM to 11:10 AM</th>
                  <th>11:10 AM to 12:10 PM</th>
                  <th>12:10 PM to 1:10 PM</th>
                  <th>1:10 PM to 2:00 PM</th>
                  <th>2:00 PM to 3:00 PM</th>
                  <th>3:00 PM to 4:00 PM</th>
                  <th>4:00 PM to 5:00 PM</th>
                </tr>
              </thead>
              <tbody>
                {weeks.map((ele) => (
                  <tr key={ele}>
                    <td>{ele}</td>
                    {Suffix.map((el) => {
                      const suffixValue = correspondings[ele] + el;
                      if (suffixValue.endsWith(".3")) {
                        return (
                          <td key={el}>
                            <p>Break</p>
                          </td>
                        );
                      } else if (suffixValue.endsWith(".6")) {
                        return (
                          <td key={el}>
                            <p>Lunch</p>
                          </td>
                        );
                      } else {
                        const filteredData = sectionData.filter(
                          (element) => suffixValue === element[0].toString()
                        );
                        return filteredData.length > 0 ? (
                          <td key={el}>{filteredData[0][3]}</td>
                        ) : (
                          <td key={el}></td>
                        );
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <LowerTable
              Branch={branch}
              Year={year}
              LowerTableData={LowerTableData}
              setLowerTableData={setLowerTableData}
              section={section}
              selectedOption={selectedOption}
              setselectedOption={setselectedOption}
            />
          </>
        ))}
      </div>
      <button onClick={exportToExcel}>Export to Excel</button>
    </>
  );
}

export default InfoTable;
