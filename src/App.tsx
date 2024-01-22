import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bingo from "./pages/Bingo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="bingo" element={<Bingo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
