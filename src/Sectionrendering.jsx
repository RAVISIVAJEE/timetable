import { useEffect } from "react";
function Sectionrendering({
  sections,
  setsections,
  setissectionalloted,
  sectiontimings,
  setsectiontimings,
}) {
  function handleSection(index, value) {
    const newsections = [...sections];
    newsections[index] = value;
    setsections(newsections);
    setsectiontimings((prevtimings) => {
      const updatedtimings = { ...prevtimings };
      if (!prevtimings[value]) {
        updatedtimings[value] = [];
      }
      return updatedtimings;
    });
  }
  useEffect(() => {
    console.log("after updating sectiontimings", sectiontimings);
  }, [sectiontimings]);

  function handleAllocation(e, somefunction) {
    e.preventDefault();
    somefunction(true);
  }
  return (
    <div>
      {sections.map((value, index) => (
        <div key={index}>
          <label>{`Section ${index + 1}:`}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleSection(index, e.target.value)}
          />

          <br />
        </div>
      ))}
      <button onClick={(e) => handleAllocation(e, setissectionalloted)}>
        Done
      </button>
    </div>
  );
}

export default Sectionrendering;
