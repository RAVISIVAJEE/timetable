import React from "react";
import { useEffect } from "react";
function Algorithm(subjects) {
  const courses = subjects["subjects"];
  const isOpenElectiveEntered = subjects["isOpenElectiveEntered"];
  const setisOpenElectiveEntered = subjects["setisOpenElectiveEntered"];
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
  const selectedOption = subjects["selectedOption"];
  const electiveTimings = subjects["electiveTimings"];
  const setelectiveTimings = subjects["setelectiveTimings"];
  const setissetbuttonClicked = subjects["setissetbuttonClicked"];
  const setiselectivetabledisplayed = subjects["setiselectivetabledisplayed"];

  console.log("in Algorithm.jsx subjects are", subjects);
  //console.log("in Algorithm.jsx CollegeTimings are", CollegeTimings);
  console.log("in Algorithm.jsx setCollegeTimings are", setCollegeTimings);

  const Timings = [
    1.1, 1.2, 1.4, 1.5, 1.7, 1.8, 1.9, 2.1, 2.2, 2.4, 2.5, 2.7, 2.8, 2.9, 3.1,
    3.2, 3.4, 3.5, 3.7, 3.8, 3.9, 4.1, 4.2, 4.4, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2,
    5.4, 5.5, 5.7, 5.8, 5.9, 6.1, 6.2, 6.4, 6.5,
  ];

  const nonlabtimings = [
    1.2, 1.5, 1.9, 2.2, 2.5, 2.9, 3.2, 3.5, 3.9, 4.2, 4.5, 4.9, 5.2, 5.5, 5.9,
    6.2, 6.5,
  ];
  function randompicker(inputArray) {
    if (inputArray.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * inputArray.length);
    const randomNumber = inputArray[randomIndex];
    inputArray.splice(randomIndex, 1);

    for (let i = inputArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }

    console.log("The random picker number is ", randomNumber);
    return randomNumber;
  }

  useEffect(
    function () {
      if (isOpenElectiveEntered && !electiveTimings[Year].length) {
        let duptnonlabtimings = nonlabtimings;

        let arr = [];
        while (arr.length < 3) {
          let temp = randompicker(duptnonlabtimings);
          let temparr = arr.map((ele) =>
            Math.floor(ele) ? Math.floor(ele) : undefined
          );
          if (!temparr.includes(Math.floor(temp))) {
            arr.push(temp);
          } else {
            duptnonlabtimings.push(temp);
          }
        }
        setelectiveTimings((prevElectiveTimings) => {
          return {
            ...prevElectiveTimings, // Preserve previous values
            [Year]: arr, // Update the timings for the current year
          };
        });
        console.log("arr is ", arr);
        console.log("Elective Timings are ", electiveTimings);
      }
    },
    [Year]
  );
  function handleAllocation(e) {
    let AvailbleTimings = {};
    for (const j of sections) {
      AvailbleTimings[j] = Timings.filter(
        (ele) => !electiveTimings[Year].includes(ele)
      );
    }

    console.log("The sections in Algorithm.jsx is", sections);
    console.log("The courses in Algorithm.jsx is", courses);
    console.log("The faculty in Algorithm.jsx is", faculty);
    console.log("The sectiontimings in Algorithm.jsx is", sectiontimings);
    console.log("The facultytimings in Algorithm.jsx is", facultytimings);

    //for electives

    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        for (let i = 0; i < facultyArray.length; i++) {
          if (facultyArray[i][1] === s && facultyArray[i][2]) {
            let k = 0;
            while (k < 3) {
              let temp = electiveTimings[Year][k];
              console.log("electiveTimings is ", electiveTimings);
              console.log(
                "electiveTimings[Year][k] is ",
                electiveTimings[Year][k]
              );
              let newArrayy = [];
              let p = [];
              p.push(temp);
              newArrayy["timings"] = p;
              newArrayy["subject"] = facultyArray[i][0];
              newArrayy["subjectcode"] = courses[facultyArray[i][0]][2];
              newArrayy["section"] = s;
              newArrayy["Branch"] = Branch;
              newArrayy["Year"] = Year;
              facultytimings[facultyName].push(newArrayy);
              k = k + 1;
              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              newArray.push(facultyName);
              newArray.push(courses[facultyArray[i][0]][2]);
              sectiontimings[s].push(newArray);
            }
          }
        }
      }
    }
    //for labs
    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        console.log("facultyname in Algorithm", facultyName);
        console.log("facultyArray in Algorithm", facultyArray);
        for (let i = 0; i < facultyArray.length; i++) {
          if (
            facultyArray[i][1] === s &&
            !facultyArray[i][2] &&
            courses[facultyArray[i][0]][0] === 2
          ) {
            let p = 0;
            while (p < 1) {
              let temp = randompicker(AvailbleTimings[s]);
              if (!nonlabtimings.includes(temp)) {
                let z = 0;
                while (z < 2) {
                  let newArray2 = [];
                  let k = [];
                  k.push(temp);
                  //k.push(parseFloat((temp + 0.1).toFixed(1)));
                  newArray2["timings"] = k;
                  newArray2["subject"] = facultyArray[i][0];
                  newArray2["subjectcode"] = courses[facultyArray[i][0]][2];
                  newArray2["section"] = s;
                  newArray2["Branch"] = Branch;
                  newArray2["Year"] = Year;

                  console.log("Allocation of ", facultyArray[i][0]);

                  facultytimings[facultyName].push(newArray2);

                  let newArray = [];
                  newArray.push(temp);
                  newArray.push(facultyArray[i][0]);
                  newArray.push(facultyName);
                  newArray.push(courses[facultyArray[i][0]][2]);
                  sectiontimings[s].push(newArray);
                  temp = parseFloat(temp);
                  temp = (temp + 0.1).toFixed(1);
                  z = z + 1;
                }

                AvailbleTimings[s] = AvailbleTimings[s].filter(
                  (el) => el !== parseFloat(temp + 0.1).toFixed(1)
                );
                p = p + 1;
              }
            }
          }
        }
      }
    }

    for (const s of sections) {
      for (const [facultyName, facultyArray] of Object.entries(faculty)) {
        for (let i = 0; i < facultyArray.length; i++) {
          if (
            facultyArray[i][1] === s &&
            !facultyArray[i][2] &&
            courses[facultyArray[i][0]][0] === 1
          ) {
            if (
              courses[facultyArray[i][0]][1] === 4 ||
              courses[facultyArray[i][0]][1] === 3
            ) {
              let k = 0;
              while (k < courses[facultyArray[i][0]][1]) {
                let temp = randompicker(AvailbleTimings[s]);
                let tempfacultyArray = facultytimings[facultyName].map((ele) =>
                  ele["subject"] === facultyArray[i][0]
                    ? Math.floor(ele["timings"][0])
                    : undefined
                );

                if (!tempfacultyArray.includes(Math.floor(temp))) {
                  let newArray2 = [];
                  let p = [];
                  p.push(temp);
                  newArray2["timings"] = p;
                  newArray2["subject"] = facultyArray[i][0];
                  newArray2["subjectcode"] = courses[facultyArray[i][0]][2];
                  newArray2["section"] = s;
                  newArray2["Branch"] = Branch;
                  newArray2["Year"] = Year;
                  facultytimings[facultyName].push(newArray2);
                  k = k + 1;

                  let newArray = [];
                  newArray.push(temp);
                  newArray.push(facultyArray[i][0]);
                  newArray.push(facultyName);
                  newArray.push(courses[facultyArray[i][0]][2]);
                  sectiontimings[s].push(newArray);
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
              newArray2["subjectcode"] = courses[facultyArray[i][0]][2];
              newArray2["section"] = s;
              newArray2["Branch"] = Branch;
              newArray2["Year"] = Year;
              facultytimings[facultyName].push(newArray2);

              let newArray = [];
              newArray.push(temp);
              newArray.push(facultyArray[i][0]);
              newArray.push(facultyName);
              newArray.push(courses[facultyArray[i][0]][2]);
              sectiontimings[s].push(newArray);
            }
          }
        }
      }
    }

    console.log(facultytimings);
    console.log(sectiontimings);
    console.log("Selected Option is", selectedOption["branch"]);
    if (selectedOption["branch"] === "BSH") {
      setCollegeTimings((prevtimings) => {
        const temporary = prevtimings;
        temporary["BSH"] = sectiontimings;
        return temporary;
      });
      setCollegeSubjects((prevSubjects) => {
        const tempsub = prevSubjects;
        tempsub["BSH"] = courses;
        return tempsub;
      });
    } else {
      setCollegeTimings((prevTimings) => {
        const TempTimings = prevTimings;
        TempTimings[Branch][Year] = sectiontimings;
        return TempTimings;
      });

      setCollegeSubjects((prevSubjects) => {
        const tempSubjects = prevSubjects;
        tempSubjects[Branch][Year] = courses;
        return tempSubjects;
      });
    }

    setsectiontimings({});
    setsubjects({});
    if (selectedOption["branch"] === "BSH") {
      setcount(0);
      setsections([]);
      setisfacultyalloted((el) => !el);
      setissectionalloted((el) => !el);
      setfacultyarraytable([]);
      setsubjects({});
      settableofsubjects([]);
      setissubjectsallocated((el) => !el);
      setdisplayingtimetable((el) => !el);
    } else {
      setdata((el) => !el);
      setBranch("");
      setYear("");
      setcount(0);
      setsections([]);
      setisfacultyalloted((el) => !el);
      setissectionalloted((el) => !el);
      setfacultyarraytable([]);
      setsubjects({});
      settableofsubjects([]);
      setissubjectsallocated((el) => !el);
      setdisplayingtimetable((el) => !el);
      // setiselectivetabledisplayed((el) => !el);
      setissetbuttonClicked(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={(e) => handleAllocation(e)}>
        Allocate
      </button>
    </div>
  );
}

export default Algorithm;
