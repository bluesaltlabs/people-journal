import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from '../routes/routes';


import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from './Footer';

function Layout() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4 overflow-hidden">
          <Header />
          <Sidebar />
        
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <Routes>
              { Object.keys(routes).map((route, index) => (
                <Route key={index} path={routes[route].path} element={routes[route].element} />
              ))}
            </Routes>
          </main>

        </div>
      </div>

      <Footer />

    </BrowserRouter>
  );
}


export default Layout;


/* https://dev.to/codeply/helpful-page-layouts-using-tailwind-css-1a3k */
