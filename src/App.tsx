import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import Blogs from "./pages/blogs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
