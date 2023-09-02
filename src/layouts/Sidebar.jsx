import { NavLink } from "react-router-dom";


function Sidebar() {

    const SidebarLink = ({ to, title }) => (
      <NavLink
        to={to}
        className={
          `block px-2 py-3 font-medium ` +
          `text-blue-600 dark:text-blue-500 hover:text-blue-200 hover:bg-slate-500`
        }
      >
      { title }
    </NavLink>
  )

  return (
    
  
    <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
      <div className="sticky top-0 p-4 w-full">

        <ul className="flex flex-col overflow-hidden bg-slate-800 p-4 rounded-md shadow-md">

         <li>
            <SidebarLink
              to="/"
              title="Home"
            />
          </li>
          
          <li>
            <SidebarLink
              to="/people"
              title="People"
            />
          </li>
          
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;
