import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  //v6 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App;