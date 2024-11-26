import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
///import AdminDashboard from "./components/AdminDashboard";
import Admin from './components/Admin';
import ArticleDetail from "./components/ArticleDetail";  
import Navbar from "./components/Navbar";  

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

