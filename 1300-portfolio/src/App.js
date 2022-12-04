import './App.css';
import NavBar from "./NavBar/NavBar";
import TitleArea from "./TitlePage/TitleArea";
import AboutArea from "./AboutArea/AboutArea";
import ProjectsArea from "./ProjectsArea/ProjectsArea";
import ContactArea from "./ContactArea/ContactArea";
import FooterArea from "./FooterArea/FooterArea";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <TitleArea/>
        <AboutArea/>
        <hr/>
        <ProjectsArea/>
        <hr/>
        <ContactArea/>
        <hr/>
        <FooterArea/>
    </div>
  );
}

export default App;
