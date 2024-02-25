//import { Link } from "react-router-dom";

function Algorithm(subjects) {
  const courses = subjects["subjects"];
  const setcount = subjects["setcount"];
  const setsections = subjects["setsections"];
  const setisfacultyalloted = subjects["setisfacultyalloted"];
  const setissectionalloted = subjects["setissectionalloted"];
  const setfacultyarraytable = subjects["setfacultyarraytable"];
  const settableofsubjects = subjects["settableofsubjects"];
  const setissubjectsallocated = subjects["setissubjectsallocated"];
  const setdisplayingtimetable = subjects["setdisplayingtimetable"];
  const setsubjects = subjects["setsubjects"];
  const sections = subjects["sections"];
  const faculty = subjects["faculty"];
  const sectiontimings = subjects["sectiontimings"];
  const setsectiontimings = subjects["setsectiontimings"];
  const facultytimings = subjects["facultytimings"];
  const setCollegeTimings = subjects["setCollegeTimings"];
  const setCollegeSubjects = subjects["setCollegeSubjects"];
  const Branch = subjects["Branch"];
  const setBranch = subjects["setBranch"];
  const Year = subjects["Year"];
  const setYear = subjects["setYear"];
  const setdata = subjects["setdata"];
  const CollegeTimings = subjects["CollegeTimings"];
  console.log("in Algorithm.jsx subjects are", subjects);
  //console.log("in Algorithm.jsx CollegeTimings are", CollegeTimings);
  console.log("in Algorithm.jsx setCollegeTimings are", setCollegeTimings);
  function handleAllocation(e) {
    // const Timings = [
    //   1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1,
    //   3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 5.1, 5.2,
    //   5.3, 5.4, 5.5, 5.6, 5.7, 6.1, 6.2, 6.3, 6.4,
    // ];
    const Timings = [
      1.1, 1.2, 1.4, 1.5, 1.7, 1.8, 1.9, 2.1, 2.2, 2.4, 2.5, 2.7, 2.8, 2.9, 3.1,
      3.2, 3.4, 3.5, 3.7, 3.8, 3.9, 4.1, 4.2, 4.4, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2,
      5.4, 5.5, 5.7, 5.8, 5.9, 6.1, 6.2, 6.4, 6.5,
    ];
    // const nonlabtimings = [
    //   1.4, 1.7, 2.4, 2.7, 3.4, 3.7, 4.4, 4.7, 5.4, 5.7, 6.4,
    // ];
    //let dupt = Timings;
    const nonlabtimings = [
      1.5, 1.9, 2.5, 2.9, 3.5, 3.9, 4.5, 4.9, 5.5, 5.9, 6.5,
    ];
    let AvailbleTimings = {};
    for (const j of sections) {
      AvailbleTimings[j] = Timings;
    }
    console.log("The sections in Algorithm.jsx is", sections);
    console.log("The courses in Algorithm.jsx is", courses);
    console.log("The faculty in Algorithm.jsx is", faculty);
    console.log("The sectiontimings in Algorithm.jsx is", sectiontimings);
    console.log("The facultytimings in Algorithm.jsx is", facultytimings);
    function randompicker(inputArray) {
      // Check if the array is not empty
      if (inputArray.length === 0) {
        return null;
      }

      // Pick a random number from the array
      const randomIndex = Math.floor(Math.random() * inputArray.length);
      const randomNumber = inputArray[randomIndex];
      inputArray.splice(randomIndex, 1);
      // Shuffle the array
      for (let i = inputArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
      }

      // Remove the picked number from the array

      // Return the picked random number
      console.log("The random picker number is ", randomNumber);
      return randomNumber;
    }

    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        for (let i = 0; i < facultyArray.length; i++) {
          if (
            facultyArray[i][1] === s &&
            courses[facultyArray[i][0]][0] === 2
          ) {
            let p = 0;
            while (p < 1) {
              console.log("p value in classes is ", p);
              let temp = randompicker(AvailbleTimings[s]);
              if (!nonlabtimings.includes(temp)) {
                let newArray2 = [];
                let k = [];
                k.push(temp);
                k.push(parseFloat((temp + 0.1).toFixed(1)));
                newArray2["timings"] = k;

                newArray2["subject"] = facultyArray[i][0];
                newArray2["section"] = s;
                newArray2["Branch"] = Branch;
                newArray2["Year"] = Year;

                console.log("Allocation of ", facultyArray[i][0]);

                // newArray2.push(temp);
                // newArray2.push(temp + 0.1);
                //newArray2.push(facultyArray[i][0]);
                //newArray2.push(s);
                console.log(
                  " before Assigning the labs  facultytimings",
                  facultytimings
                );
                console.log("Assigning the lab", newArray2);
                facultytimings[facultyName].push(newArray2);
                console.log(
                  " after Assigning the labs  facultytimings",
                  facultytimings
                );

                let newArray = [];
                newArray.push(temp);
                newArray.push(facultyArray[i][0]);
                newArray.push(facultyName);
                sectiontimings[s].push(newArray);
                console.log(
                  " after Assigning the lab  facultytimings",
                  sectiontimings
                );
                AvailbleTimings[s] = AvailbleTimings[s].filter(
                  (el) => el !== parseFloat((temp + 0.1).toFixed(1))
                );
                p = p + 1;
              }
            }
          }
        }
      }
    }

    //for classes not labs

    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        for (let i = 0; i < facultyArray.length; i++) {
          if (
            facultyArray[i][1] === s &&
            courses[facultyArray[i][0]][0] === 1
          ) {
            if (
              courses[facultyArray[i][0]][1] === 4 ||
              courses[facultyArray[i][0]][1] === 3
            ) {
              let k = 0;
              while (k < courses[facultyArray[i][0]][1]) {
                console.log("K value in classes", k);
                let temp = randompicker(AvailbleTimings[s]);
                let tempfacultyArray = [];
                // dayArray = dupt.map((ele) => Math.floor(ele));
                tempfacultyArray = facultytimings[facultyName].map((ele) =>
                  ele[1] === facultyArray[i][0] ? Math.floor(ele[0]) : undefined
                );

                if (!tempfacultyArray.includes(Math.floor(temp))) {
                  let newArray2 = [];
                  let p = [];
                  p.push(temp);
                  newArray2["timings"] = p;
                  newArray2["subject"] = facultyArray[i][0];
                  newArray2["section"] = s;
                  console.log(
                    " before Assigning the classes  facultytimings",
                    facultytimings
                  );
                  console.log("Assigning the classes ", newArray2);
                  facultytimings[facultyName].push(newArray2);
                  console.log(
                    " after Assigning the classes  facultytimings",
                    facultytimings
                  );
                  k = k + 1;
                  let newArray = [];
                  newArray.push(temp);
                  newArray.push(facultyArray[i][0]);
                  newArray.push(facultyName);
                  sectiontimings[s].push(newArray);
                  console.log(
                    " after Assigning the classes  sectiontimings",
                    sectiontimings
                  );
                } else {
                  AvailbleTimings[s].push(temp);
                }
              }
            }
            if (courses[facultyArray[i][0]][1] === 1) {
              let temp = randompicker(AvailbleTimings[s]);
              let newArray2 = [];
              let p = [];
              p.push(temp);
              newArray2["timings"] = p;
              newArray2["subject"] = facultyArray[i][0];
              newArray2["section"] = s;
              facultytimings[facultyName].push(newArray2);
              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              newArray.push(facultyName);
              sectiontimings[s].push(newArray);
            }
          }
        }
      }
    }

    console.log(facultytimings);
    console.log(sectiontimings);
    if (Year === "Bsh") {
      setCollegeTimings((prevtimings) => {
        const temporary = prevtimings;
        temporary["Bsh"] = sectiontimings;
        return temporary;
      });
      setCollegeSubjects((prevSubjects) => {
        const tempsub = prevSubjects;
        tempsub["Bsh"] = courses;
        return tempsub;
      });
    } else {
      setCollegeTimings((prevTimings) => {
        const TempTimings = prevTimings;
        console.log("The temptimings are ", TempTimings);
        console.log("The Branch are ", Branch);
        console.log("The Year are ", Year);
        console.log("The data temptimings are ", TempTimings[Branch][Year]);
        TempTimings[Branch][Year] = sectiontimings;
        return TempTimings;
      });
      console.log(
        "After the CollegeTimings are changed in Algorithm.jsx",
        CollegeTimings
      );

      setCollegeSubjects((prevSubjects) => {
        const tempSubjects = prevSubjects;
        tempSubjects[Branch][Year] = courses;
        return tempSubjects;
      });
    }
    setsectiontimings({});
    setsubjects({});
    setBranch("");
    setYear("");
    setcount(0);
    setsections([]);
    setisfacultyalloted(false);
    setissectionalloted(false);
    setfacultyarraytable([]);
    setsubjects({});
    settableofsubjects([]);
    setissubjectsallocated(false);
    setdisplayingtimetable(false);
    setdata((prevdata) => !prevdata);
  }
  // useEffect(() => {
  //   // Run handleAllocation when Year or Branch changes
  //   handleAllocation();
  // }, [Year, Branch]);

  return (
    <div>
      <button type="button" onClick={(e) => handleAllocation(e)}>
        Allocate
      </button>
    </div>
  );
}

export default Algorithm;
