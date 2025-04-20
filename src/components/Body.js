import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Movie from "./browse/Movie";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: <Movie />,
    },
  ]);

  return (
    <div className="h-full bg-black text-white-500">
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
