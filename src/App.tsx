import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Superheroes from "./components/Superheroes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
