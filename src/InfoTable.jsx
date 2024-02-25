function InfoTable(data, branch, year) {
  const dataa = data["data"];
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
  console.log("Entered into INFO table", data);
  return (
    <>
      <div>
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
          </>
        ))}
      </div>
    </>
  );
}

export default InfoTable;
