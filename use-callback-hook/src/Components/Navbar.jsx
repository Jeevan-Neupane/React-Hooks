import { NavLink } from "react-router-dom";

function Navbar() {
   const activeStyle=({isActive,isPending})=>{
    return    {
        fontWeight: isActive?'bold':"",
        textDecoration:isActive?"underline":"",
      };
   }
    
  return (
    <header className="bg-slate-800 text-white px-10 py-3 ">
      <nav className="flex justify-between items-center">
        <h1 className="text-5xl flex-1">Hooks</h1>
        <ul className="flex gap-4 items-center flex-1">
          <li className="text-2xl">
            <NavLink to='/' style={activeStyle}>Home</NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to='usecallback' style={activeStyle} >UseCallBack</NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to='demo-page-useCallback' style={activeStyle} >useCallback Demo</NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to='demo-page-useMemo' style={activeStyle} >useMemo Demo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
