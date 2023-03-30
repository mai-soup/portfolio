import HomePage from "./HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetailsPage from "./ProjectDetailsPage";
import PersonalWebsite from "./projects/PersonalWebsite";
import YelpCamp from "./projects/YelpCamp";
import ColourPicker from "./projects/ColourPicker";

function App() {
  console.log(`
  ██╗  ██╗███████╗██╗   ██╗    ████████╗██╗  ██╗███████╗██████╗ ███████╗██╗
  ██║  ██║██╔════╝╚██╗ ██╔╝    ╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝██║
  ███████║█████╗   ╚████╔╝        ██║   ███████║█████╗  ██████╔╝█████╗  ██║
  ██╔══██║██╔══╝    ╚██╔╝         ██║   ██╔══██║██╔══╝  ██╔══██╗██╔══╝  ╚═╝
  ██║  ██║███████╗   ██║          ██║   ██║  ██║███████╗██║  ██║███████╗██╗
  ╚═╝  ╚═╝╚══════╝   ╚═╝          ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝
  `);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "projects",
      element: <ProjectDetailsPage />,
    },
    {
      path: "/projects/personal-website",
      element: (
        <ProjectDetailsPage
          title="Personal website"
          projectContents={<PersonalWebsite />}
        />
      ),
    },
    {
      path: "/projects/yelpcamp",
      element: (
        <ProjectDetailsPage title="YelpCamp" projectContents={<YelpCamp />} />
      ),
    },
    {
      path: "/projects/colour-picker",
      element: (
        <ProjectDetailsPage
          title="Colour picker"
          projectContents={<ColourPicker />}
        />
      ),
    },
  ]);

  return (
    <div className="bg-darkest-grey w-full h-full min-h-screen overflow-x-hidden flex flex-col">
      <span id="top" />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
