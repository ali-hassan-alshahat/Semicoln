import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Features/Sidebar";
import Routing from "./shared/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
