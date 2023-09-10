import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages";
import { AppGlobalProvider } from "@/contexts/appGlobal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
const App = () => {
  return (
    // <AppGlobalProvider>
    <RouterProvider router={router} />
    // </AppGlobalProvider>
  );
};

export default App;
