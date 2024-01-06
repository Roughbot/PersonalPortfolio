import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { Contacts } from "./components/Contacts/Contacts";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
