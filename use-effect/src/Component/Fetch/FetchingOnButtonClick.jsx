import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "lodash";

function FetchingOnButtonClick() {
  const [post, setPost] = useState({});
  const [id,setId]=useState(1);
  const [buttonId,setButtonId]=useState(1);




  useEffect(() => {
    const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
   

    response
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [buttonId]);


const changeId=(events)=>{
    setId(events.target.value);

}
const handleClick=()=>{
    setButtonId(id);
}
 

  return (
    <div >
      <input type="text" value={id} onChange={changeId}/>
      <button onClick={handleClick}>Change Id</button>
      <li>{post.title}</li>
    </div>
  );
}

export default FetchingOnButtonClick;
