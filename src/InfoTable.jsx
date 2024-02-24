function InfoTable(data) {
  const weeks = ["MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const Suffix = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7"];
  const correspondings = {
    MON: "1",
    TUE: "2",
    WED: "3",
    THUR: "4",
    FRI: "5",
    SAT: "6",
  };
  console.log("Entered into INFO table");
  return (
    <>
      <div>
        {Object.entries(data).map((timings, index) => (
          <table key={index} border="1">
            <thead>
              <tr>
                <th>Timing</th>
                <th>9:00 AM to 10:00 AM</th>
                <th>10:00 AM to 11:00 AM</th>
                <th>11:00 AM to 11:10 AM</th>
                <th>11:10 AM to 12:10 PM</th>
                <th>12:10 PM to 1:10 PM</th>
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
                    const filteredData = data[timings[0]].filter(
                      (element) => correspondings[ele] + el === element[0]
                    );
                    return <td key={el}>{filteredData}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}

export default InfoTable;
