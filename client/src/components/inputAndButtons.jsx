import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { postContext } from "../context/posts";

const InputAndButtons = () => {
  const { post, getposts, getPostByUser } = useContext(postContext);

  const [postUserId, setPostUserId] = useState("");

  return (
    <div style={{ margin: "1vh" }}>
      <div class="input-group">
        <button
          className="btn btn-outline-info"
          onClick={() => {
            getPostByUser(postUserId);
            console.log(postUserId);
            console.log(post);
          }}
        >
          get all user posts
        </button>
        <input
          className="form-control"
          onChange={(ev) => {
            setPostUserId(ev.target.value);
          }}
          placeholder="user id..."
        />
        <button
          className="btn btn-outline-info"
          onClick={() => {
            getposts();
          }}
        >
          get all posts
        </button>
      </div>
    </div>
  );
};

export default InputAndButtons;
