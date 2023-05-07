import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import UseCallback from "./Components/UseCallback"
import DemoPage from "./Pages/DemoPage"
import Counter from "./Components/useMemo/Counter"


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>}>
        <Route path="usecallback" element={<UseCallback/>}/>
        <Route path="demo-page-useCallback" element={<DemoPage/>}/>
        <Route path="demo-page-useMemo" element={<Counter/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
   
  )
}

export default App
