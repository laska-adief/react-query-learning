import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Superheroes from "./components/Superheroes";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/superheroes" element={<Superheroes />}>
            Superheroes
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
