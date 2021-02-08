import InfoForm from "./components/InfoForm";
import PersonalForm from "./components/PersonalForm";

function App(): JSX.Element {
  return (
    <>
      <h1>React + Typescript</h1>
      <h2>custom Hooks</h2>
      <h3>Personal Form</h3>
      <PersonalForm />
      <br/>
      <h3>Info Form</h3>
      <InfoForm/>
    </>
  );
}

export default App;
