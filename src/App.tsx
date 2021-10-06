import { Pairings } from "./components/Pairings";
import names from "./names.json"
function App(): JSX.Element {
  return (
    <>
    <Pairings names={names}/>
    </>
  );
}

export default App;
