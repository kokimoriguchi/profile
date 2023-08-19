import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import TopPage from "./components/pages/TopPage";
import FavoriteDetail from "./components/pages/FavoriteDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/FavoriteDetail" element={<FavoriteDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
