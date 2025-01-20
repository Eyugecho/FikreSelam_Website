import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { RouterProvider } from "react-router";

import Footer from "./components/Footer";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
  
    ],
  },
]);

const App = () => {

  
  return <RouterProvider router={router} />;
};

export default App;
