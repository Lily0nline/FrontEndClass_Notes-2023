import { createBrowserRouter } from "react-router-dom";

//v6 
//import를 하기위해 해당 모듈(컴포넌트)를 export 하는 방법
//1. export const router = createBrowserRouter([ 
 const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  // 2. export default router(which value you'll export)

  export default router