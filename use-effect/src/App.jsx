import ConditionalUpdate from "./Component/ConditionalUpdate";
import HookMouse from "./Component/HookMouse";
import MouseContainer from "./Component/MouseContainer";
import Navbar from "./Component/Navbar";
import NotFound from "./Component/NotFound";
import UpdateTitle from "./Component/UpdateTitle"
import { createBrowserRouter,Route,RouterProvider,createRoutesFromElements } from "react-router-dom";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>} >
        <Route path="update-title" element={<UpdateTitle/>}/>
        <Route path="conditional-upadate" element={<ConditionalUpdate/>}/>
        <Route path="mouse-position" element={<MouseContainer/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Route>
    )

  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
