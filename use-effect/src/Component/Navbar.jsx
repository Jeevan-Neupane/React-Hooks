import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
   const changeColor=({isActive})=>{
    return {
       background:isActive?"blue":"red"
    }
   }
  return (
    <div>
    <nav>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
      useEffect
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to='/update-title' style={changeColor}>Update Title</NavLink>
          </li>
          <li>
            <NavLink style={changeColor} to='conditional-upadate' >Conditional Upadate</NavLink>
          </li>
          <li>
            <NavLink style={changeColor} to='mouse-position' >MouseContainer</NavLink>
          </li>
          <li>
            <NavLink style={changeColor} to='data-fetch' >Data Fetching</NavLink>
          </li>
          <li>
            <NavLink style={changeColor} to='single-data-fetch' >Single Data Fetching</NavLink>
          </li>
          <li>
            <NavLink style={changeColor} to='button-click-data-fetch' >Button Data Fetching</NavLink>
          </li>
        </ul>
      </div>
      
    </nav>
    <main className="container">
        <Outlet/>

    </main>
    </div>
  );
}

export default Navbar;
