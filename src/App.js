import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import Article from "./article";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my_profile" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
