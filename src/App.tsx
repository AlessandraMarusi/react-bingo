import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bingo from "./pages/Bingo";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="bingo" element={<Bingo />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
