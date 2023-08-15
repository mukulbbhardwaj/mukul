import "./App.css";
import Nav from "./components/misc/Nav";
import Home from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/project/Projects";
import Blogs from "./components/sections/blogs/Blogs";
import About from "./components/sections/About";
import Footer from "./components/misc/Footer";
import "@fontsource/rammetto-one";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Contact />
      <About />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
