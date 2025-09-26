import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DiseaseDetail from "./components/diseaseDetail";
import DiseasesPage from "./pages/DiseasePage";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disease" element={<DiseasesPage />} />
        {/* <Route path="/disease-detail" element={<DiseaseDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
