import { useState, useEffect } from "react";
import axios from "axios";


function SingleDataFetching() {
  const [post, setPost] = useState({});
  const [id,setId]=useState(1);
  useEffect(() => {
    const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(response)

    response
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


const changeId=(events)=>{
    setId(events.target.value);

}
 

  return (
    <div >
      <input type="text" value={id} onChange={changeId}/>
      <li>{post.title}</li>
    </div>
  );
}

export default SingleDataFetching;
