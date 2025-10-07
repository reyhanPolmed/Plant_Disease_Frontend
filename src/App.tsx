import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiseaseDetail from "./components/diseaseDetail";
import DiseasesPage from "./pages/DiseasePage";
import HomePage from "./pages/Home";
import Card from "./components/card";
import CardDisease from "./components/cardDisease";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disease/:plantId" element={<DiseasesPage />} />
        <Route path="/disease-detail/:plantId/:diseaseId" element={<DiseaseDetail />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card-disease" element={<CardDisease />} />
      </Routes>
    </Router>
  );
}

export default App;
