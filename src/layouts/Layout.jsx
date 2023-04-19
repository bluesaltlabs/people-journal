import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from '../routes/routes';


import Header from '../layouts/Header';
import Footer from './Footer';

function Layout() {
  return (
    <BrowserRouter>
      <div className="flex-row">
        <div className="w-full flex flex-col lg:flex-row flex-grow overflow-hidden">
          <Header />
        
          <main>
            <Routes>
              { Object.keys(routes).map((route, index) => (
                <Route key={index} path={routes[route].path} element={routes[route].element} />
              ))}
            </Routes>
          </main>

        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default Layout;


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import BaseLayout from '../layouts/Base/BaseLayout';

// import HomePage from '../pages/home';
// import Error404Page from '../pages/error404';

// function App() {

//   // todo: create pages directory, add pages/routes. Also, create routes js file? 
//   const routerConfig = [
//     {
//       path: "/",
//       element: <HomePage />,
//       errorElement: <Error404Page />,
//     },
//   ]

//   const router = createBrowserRouter(routerConfig);


//   return (
//     <RouterProvider router={router}>
//       <BaseLayout>
//         <span>App Component</span>
//       </BaseLayout>
//       </RouterProvider>
//   )
// }

// export default App;
