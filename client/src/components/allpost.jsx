import "../App.css";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { postContext } from "../context/posts";
import InputAndButtons from "./inputAndButtons";
function AllPost() {
  const { post, getposts, getPostByUser } = useContext(postContext);
  const [postUserId, setPostUserId] = useState("");

  return (
    <div className="App">
      <button
        onClick={() => {
          getposts();
        }}
      >
        get all posts
      </button>
      <input
        onChange={(ev) => {
          setPostUserId(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          getPostByUser(postUserId);
          console.log(postUserId);
          console.log(post);
        }}
      >
        get all user posts
      </button>
      <table>
        <thead>
          <tr>
            <td>userid</td>
            <td>titel</td>
          </tr>
        </thead>
        {post.map((val) => (
          <tbody>
            <tr key={val.id}>
              <td>{val.userId}</td>
              <td>{val.title}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {console.log(post)};
    </div>
  );
}

export default AllPost;
