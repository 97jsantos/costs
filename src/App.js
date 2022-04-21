import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

import Container from "./components/layout/Container";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Container customClass='min_height'>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/projects" element={<Projects/>}>
          </Route>
          <Route path="/company" element={<Company/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
          <Route path="/newproject" element={<NewProject/>}>
          </Route>
          <Route path="/project/:id" element={<Project/>}>
          </Route>
        </Routes>
      </Container>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
