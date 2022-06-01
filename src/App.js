import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import List from "./Components/List";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [allList, setList] = useState([
    { descricao: "NU Kenzie.CO ", valor: "7300", categoria: "Entradas" },
    { descricao: "Lojas.SA", valor: "520", categoria: "Saidas" }
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={WelcomePage()}></Route>
        <Route path="/AllInfos" element={List(setList, allList)}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
