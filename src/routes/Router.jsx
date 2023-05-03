import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function Routes() {
  const mockedRotes = [
    {
      path: "/",
      element: <h1>Home</h1>,
    },
    {
      path: "profile",
      element: <h1>profile</h1>,
    },
    {
      path: "profile/:id",
      element: <h1>profile-friend</h1>,
    },
    {
      path: "about",
      element: <h1>about</h1>,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const router = createBrowserRouter(mockedRotes);

  return <RouterProvider router={router} />;
}

export default Routes;
