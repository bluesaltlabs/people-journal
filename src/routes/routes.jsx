// todo: recursive itteration of this? 
// Route Components
import Home from './home';
import Contacts from './contacts'
import NoMatch from './noMatch';
import TestForm from './testForm';
import { default as PeopleList } from './People/List';
import { default as PeopleShow } from './People/Show';
import { default as PeopleEdit } from './People/Edit';
import { default as PeopleCreate } from './People/Create';

export const routes = {
  "home": {
    path: "/",
    element: <Home />,
  },
  "contacts": {
    path: "/contacts",
    element: <Contacts />,
  },
  "test-form": {
    path: "/test-form",
    element: <TestForm />,
  },
  "people-list": {
    path: "/people",
    element: <PeopleList />,
  },
  "people-show": {
    path: "/people/:id",
    element: <PeopleShow />,
  },
  "people-edit": {
    path: "/people/:id/edit",
    element: <PeopleEdit />,
  },
  "people-create": {
    path: "/people/create",
    element: <PeopleCreate />,
  },

  // 

  "noMatch": {
    path: "*",
    element: <NoMatch />,
  }
};
