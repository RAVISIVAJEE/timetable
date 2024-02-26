import Header from "./Header";
import * as XLSX from "xlsx";
const exportToExcel = () => {
  const wb = XLSX.utils.table_to_book(
    document.getElementById("facultytimetable"),
    {
      sheet: "Sheet JS",
    }
  );
  XLSX.writeFile(wb, "facultyinfo_table.xlsx");
};
function FacultyTimeTable({ facultytimings }) {
  const weeks1 = ["MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const Suffix1 = [".1", ".2", ".3", ".4", ".5", ".6", ".7", ".8", ".9"];
  const correspondings1 = {
    MON: "1",
    TUE: "2",
    WED: "3",
    THUR: "4",
    FRI: "5",
    SAT: "6",
  };

  console.log("Object.keys(facultytimings)", Object.keys(facultytimings));
  console.log("Object.entries(facultytimings)", Object.entries(facultytimings));
  if (!facultytimings || Object.keys(facultytimings).length === 0) {
    return (
      <>
        <Header />
        <p>No data available</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div>
        {Object.entries(facultytimings).map((ele, index) => (
          <section key={index}>
            <h3>CLASS TIME TABLE</h3>
            <br />
            <label>Department: BSH</label>
            <br />
            <label>Academic Year: 2023-24</label>
            <br />
            <label>FacultyName: {ele[0]}</label>
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
                {weeks1.map((day) => (
                  <tr key={day}>
                    <td>{day}</td>
                    {Suffix1.map((suffix) => {
                      const suffixValue = correspondings1[day] + suffix;
                      if (suffixValue.endsWith(".3")) {
                        return (
                          <td key={suffix}>
                            <p>Break</p>
                          </td>
                        );
                      } else if (suffixValue.endsWith(".6")) {
                        return (
                          <td key={suffix}>
                            <p>Lunch</p>
                          </td>
                        );
                      } else {
                        const filteredData = facultytimings[ele[0]].filter(
                          (element) =>
                            suffixValue === element["timings"].toString()
                        );
                        console.log(
                          "Filtered data in FacultyTimeTable is",
                          filteredData
                        );
                        return (
                          <td key={suffix}>
                            {filteredData.length > 0
                              ? `${filteredData[0]["subject"]}/${filteredData[0]["section"]}/${filteredData[0]["Branch"]}/${filteredData[0]["Year"]} `
                              : null}
                          </td>
                        );
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={exportToExcel}>Export to Excel</button>
          </section>
        ))}
      </div>
    </>
  );
}

export default FacultyTimeTable;
