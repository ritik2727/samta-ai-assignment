import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchHistory from "./components/SearchHistory";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/searchHistory" element={<SearchHistory />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
