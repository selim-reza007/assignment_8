import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Income from "./pages/income";
import Expense from "./pages/expense";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/income" element={ <Income /> } />
          <Route path="/expense" element={ <Expense /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}