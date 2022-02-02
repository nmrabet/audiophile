import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
      </Routes>
    </Layout>
  );
}

export default App;
