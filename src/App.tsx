import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardDisease from "./pages/DiseaseList";
import { DiseaseDetailNew } from "./pages/DiseaseDetail";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route
              path="/disease-detail/:plantId/:diseaseId"
              element={<DiseaseDetailNew />}
            />
            <Route path="/card-disease/:plantId" element={<CardDisease />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
