import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./routes/About";
import Services from "./routes/Services";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import Service1 from "./components/Service1";
// import Service2 from "./components/Service2";
// import Service3 from "./components/Service3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/service/*" element={<Services />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
