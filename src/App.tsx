import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardDisease from "./pages/DiseaseList";
import {DiseaseDetailNew} from "./pages/DiseaseDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disease-detail/:plantId/:diseaseId" element={<DiseaseDetailNew />} />
        <Route path="/card-disease/:plantId" element={<CardDisease />} />
      </Routes>
    </Router>
  );
}

export default App;
