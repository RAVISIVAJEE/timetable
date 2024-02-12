function Algorithm(subjects, setdisplayingtimetable, displayingtimetable) {
  const courses = subjects["subjects"];
  const sections = subjects["sections"];
  const faculty = subjects["faculty"];
  const sectiontimings = subjects["sectiontimings"];
  const facultytimings = subjects["facultytimings"];
  const Timings = [
    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1,
    3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 5.1, 5.2,
    5.3, 5.4, 5.5, 5.6, 5.7, 6.1, 6.2, 6.3, 6.4,
  ];
  const nonlabtimings = [1.4, 1.7, 2.4, 2.7, 3.4, 3.7, 4.4, 4.7, 5.4, 5.7, 6.4];
  let dupt = Timings;
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
        if (facultyArray[i][1] === s && courses[facultyArray[i][0]][0] === 2) {
          let p = 0;
          while (p < 1) {
            console.log("p value in classes is ", p);
            let temp = randompicker(dupt);
            if (!nonlabtimings.includes(temp)) {
              let newArray2 = [];
              newArray2.push(temp);
              newArray2.push(temp + 0.1);
              newArray2.push(facultyArray[i][0]);
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
              sectiontimings[s].push(newArray);
              console.log(
                " after Assigning the lab  facultytimings",
                sectiontimings
              );
              dupt = dupt.filter((el) => el !== temp + 0.1);
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
        if (facultyArray[i][1] === s && courses[facultyArray[i][0]][0] === 1) {
          if (
            courses[facultyArray[i][0]][1] === 4 ||
            courses[facultyArray[i][0]][1] === 3
          ) {
            let k = 0;
            while (k < courses[facultyArray[i][0]][1]) {
              console.log("K value in classes", k);
              let temp = randompicker(dupt);
              let tempfacultyArray = [];
              // dayArray = dupt.map((ele) => Math.floor(ele));
              tempfacultyArray = facultytimings[facultyName].map((ele) =>
                ele[1] === facultyArray[i][0] ? Math.floor(ele[0]) : undefined
              );

              if (!tempfacultyArray.includes(Math.floor(temp))) {
                let newArray2 = [];
                newArray2.push(temp);
                newArray2.push(facultyArray[i][0]);
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
                sectiontimings[s].push(newArray);
                console.log(
                  " after Assigning the classes  sectiontimings",
                  sectiontimings
                );
              } else {
                dupt.push(temp);
              }
            }
          }
          if (courses[facultyArray[i][0]][1] === 1) {
            let temp = randompicker(dupt);
            let newArray2 = [];
            newArray2.push(temp);
            newArray2.push(facultyArray[i][0]);
            facultytimings[facultyName].push(newArray2);
            let newArray = [];
            newArray.push(temp);
            newArray.push(facultyArray[i][0]);
            sectiontimings[s].push(newArray);
          }
        }
      }
    }
  }

  console.log(facultytimings);
  console.log(sectiontimings);

  return <div>{}</div>;
}

export default Algorithm;
