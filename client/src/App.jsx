import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Features/Sidebar";
import { LoginPage } from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
