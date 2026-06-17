import { BrowserRouter } from "react-router-dom";
import Routing from "./shared/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
