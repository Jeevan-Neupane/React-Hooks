import ConditionalUpdate from "./Component/ConditionalUpdate";
import DataFetching from "./Component/Fetch/DataFetching";
import HookMouse from "./Component/HookMouse";
import MouseContainer from "./Component/MouseContainer";
import Navbar from "./Component/Navbar";
import NotFound from "./Component/NotFound";
import UpdateTitle from "./Component/UpdateTitle"
import './App.css'
import { createBrowserRouter,Route,RouterProvider,createRoutesFromElements } from "react-router-dom";
import SingleDataFetching from "./Component/Fetch/FetchingSingleUser";
import FetchingOnButtonClick from "./Component/Fetch/FetchingOnButtonClick";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>} >
        <Route path="update-title" element={<UpdateTitle/>}/>
        <Route path="conditional-upadate" element={<ConditionalUpdate/>}/>
        <Route path="mouse-position" element={<MouseContainer/>}/>

        <Route path="data-fetch" element={<DataFetching/>}/>
        <Route path="single-data-fetch" element={<SingleDataFetching/>}/>
        <Route path="button-click-data-fetch" element={<FetchingOnButtonClick/>}/>
        <Route path="*" element={<NotFound/>}/>
        

      </Route>
    )

  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
