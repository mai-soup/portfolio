import HomePage from "./HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetailsPage from "./ProjectDetailsPage";
import PersonalWebsite from "./projects/PersonalWebsite";

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
  ]);

  return (
    <div className="bg-darkest-grey w-full h-full min-h-screen overflow-x-hidden flex flex-col">
      <span id="top" />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
