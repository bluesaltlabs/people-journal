import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BaseLayout from '../Layout/Base/BaseLayout';

import HomePage from '../pages/home';
import Error404Page from '../pages/error404';

function App() {

  // todo: create pages directory, add pages/routes. Also, create routes js file? 
  const routerConfig = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <Error404Page />,
    },
  ]

  const router = createBrowserRouter(routerConfig);


  return (
    <RouterProvider router={router}>
      <BaseLayout>
        <span>App Component</span>
      </BaseLayout>
      </RouterProvider>
  )
}

export default App;
