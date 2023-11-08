import "./App.css";
import "./components/Button/button.css";
import "./components/InputField/InputField.css";
import View1 from "./View1";
import View2 from "./View2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<View1 />} />
            <Route path="/View-ID" element={<View2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
