
import { useContext } from "react"
import FetchApi from "../Context/FetchApi"

function Users() {
    const data=useContext(FetchApi);
    console.log(data);
  return (
    <div>
        HI
      
    </div>
  )
}

export default Users
