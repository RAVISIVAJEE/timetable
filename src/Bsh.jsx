import App from "./App";
import Header from "./Header";
function Bsh({ CollegeTimings, setCollegeTimings }) {
  return (
    <div>
      <Header />
      <App
        CollegeTimings={CollegeTimings}
        setCollegeTimings={setCollegeTimings}
      />
    </div>
  );
}

export default Bsh;
