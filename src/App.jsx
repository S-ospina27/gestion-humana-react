import "./assets/index.css";

import { Route, Routes } from "react-router-dom";
import NavbarNavigation from "./pages/components/NavbarNavigation";

function App() {
  return (
    <>
      <NavbarNavigation />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
}

export default App;
