import Counter from "./Components/Counter";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import "./App.css";
import PreviouState from "./Components/PreviouState";
import NavBar from "./Components/NavBar";
import UseStateWithObject from "./Components/UseStateWithObject";
import NotFound from "./Components/NotFound";
import UseStateWithArray from "./Components/UseStateWithArray";
function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar/>}>
        <Route path="counter" element={<Counter/>}/>
        <Route path="previoustate" element={<PreviouState/>}/>
        <Route path="stateObject" element={<UseStateWithObject/>}/>
        <Route path="stateArray" element={< UseStateWithArray/>}/>

        <Route path="*" element={<NotFound/>}></Route>
        

      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  )
  
 
}

export default App;
