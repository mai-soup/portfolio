import Footer from "./Footer";
import HomePage from "./HomePage";
import LinksContainer from "./LinksContainer";
import { Routes, Route } from "react-router-dom";
import ProjectDetailsPage from "./ProjectDetailsPage";

function App() {
  console.log(`
  ██╗  ██╗███████╗██╗   ██╗    ████████╗██╗  ██╗███████╗██████╗ ███████╗██╗
  ██║  ██║██╔════╝╚██╗ ██╔╝    ╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝██║
  ███████║█████╗   ╚████╔╝        ██║   ███████║█████╗  ██████╔╝█████╗  ██║
  ██╔══██║██╔══╝    ╚██╔╝         ██║   ██╔══██║██╔══╝  ██╔══██╗██╔══╝  ╚═╝
  ██║  ██║███████╗   ██║          ██║   ██║  ██║███████╗██║  ██║███████╗██╗
  ╚═╝  ╚═╝╚══════╝   ╚═╝          ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝
  `);

  return (
    <div className="bg-darkest-grey w-full h-full min-h-screen overflow-x-hidden flex flex-col">
      <span id="top" />
      <LinksContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectDetailsPage />} />
        <Route
          path="/projects/personal-website"
          element={<ProjectDetailsPage title="Personal website" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
