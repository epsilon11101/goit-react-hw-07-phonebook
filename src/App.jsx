import { RouterProvider, createBrowserRouter } from "react-router-dom";

//PAGES

import "./App.css";
import RootPage from "./pages/RootPage";
import DirectoryRoot from "./pages/DirectoryRoot";
import ContactCard from "./components/contactCard/ContactCard";
import AddContact from "./pages/AddContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "directory",
        element: <DirectoryRoot />,
        children: [
          {
            path: ":contactId",
            element: <ContactCard />,
          },
        ],
      },
      {
        path: "addContact",
        element: <AddContact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
