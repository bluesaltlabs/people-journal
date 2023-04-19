// todo: recursive itteration of this? 
// Route Components
import Home from './home';
import Contacts from './contacts'
import NoMatch from './noMatch';


export const routes = {
  "home": {
    path: "/",
    element: <Home />,
  },
  "contacts": {
    path: "/contacts",
    element: <Contacts />,
  },

  // 

  "noMatch": {
    path: "*",
    element: <NoMatch />,
  }
};
