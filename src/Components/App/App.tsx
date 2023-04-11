import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BaseLayout from '../../Layout/BaseLayout/BaseLayout';
import Root from '../../routes/root';
import Error404 from '../../routes/error404';

function App() {

  // todo: create pages directory, add pages/routes. Also, create routes js file? 
  const routerConfig = [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error404 />,
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
