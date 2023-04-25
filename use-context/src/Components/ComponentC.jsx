
import UserContext from "../Context/UserContext"
import { useContext } from "react"
import ChannelContext from "../Context/ChannelContext";


function ComponentC() {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);

    

  return (
    <div>
        <div>The user value from the Context is  {user}</div>
        <div>The channel value from the Context is  {channel}</div>

      
    </div>
  )
}

export default ComponentC
