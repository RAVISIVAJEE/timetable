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
  const branch1 = branch;
  const year1 = year;
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

    // Convert info table to worksheet
    const wsInfoTable = XLSX.utils.table_to_sheet(
      document.getElementById("table")
    );
    XLSX.utils.book_append_sheet(wb, wsInfoTable, "Info Table"); // Append info table to workbook

    // Convert second table to worksheet
    const wsSecondTable = XLSX.utils.table_to_sheet(
      document.getElementById("lowertable")
    );
    XLSX.utils.book_append_sheet(wb, wsSecondTable, "Second Table"); // Append second table to workbook

    // Write workbook to file
    XLSX.writeFile(wb, "info_and_second_table.xlsx");
  };

  console.log("Entered into INFO table", data);
  return (
    <>
      <Header />
      <div id="table">
        {Object.entries(dataa).map((timings, index) => (
          <>
            <section>
              <h3>CLASS TIME TABLE</h3>
              <br />
              <label>Department:</label>
              <br />
              <label>Academic Year :2023-24</label>
              <br />
              <label>Section :{timings[0]}</label>
            </section>
            <table key={index} border="1">
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
                        const filteredData = dataa[timings[0]].filter(
                          (element) => suffixValue === element[0].toString()
                        );
                        console.log("Filterddata is ", filteredData);
                        return filteredData.length > 0 ? (
                          <td key={el}>{filteredData[0][1]}</td>
                        ) : (
                          <td key={el}></td>
                        );
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            {console.log("Lower table data in Info table", LowerTableData)}
            <LowerTable
              Branch={branch1}
              Year={year1}
              LowerTableData={LowerTableData}
              setLowerTableData={LowerTableData}
              section={timings[0]}
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
