import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "lodash";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const response = axios.get("https://jsonplaceholder.typicode.com/posts");

    response
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const renderedListOfPost = posts.map((post) => {
    return <li key={post.id} className="post-items">{post.title}</li>;
  });

  return (
    <div >
      <ul>{renderedListOfPost}</ul>
    </div>
  );
}

export default DataFetching;
