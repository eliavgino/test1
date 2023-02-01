import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Alert from "@mui/material/Alert";

export const postContext = createContext();
function Postrovider(props) {
  const { children } = props;
  const urlpostpage = " https://jsonplaceholder.typicode.com/posts";
  const urlpostintodata = "http://localhost:4000/api/v1/post";
  const [post, setpost] = useState([]);

  const getposts = async () => {
    try {
      const posts = await axios.get(urlpostpage, {});
      console.log(posts.data);
      console.log(posts.data.length);
      const addingdatarespone = await axios.post(
        urlpostintodata,
        posts.data,
        {}
      );
      setpost(posts.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostByUser = async (userId) => {
    try {
      const userpost = await axios.post(
        `http://localhost:4000/api/v1/post/getPostByUser`,
        { userId: userId },
        {}
      );
      console.log(userpost.data);
      setpost(userpost.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <postContext.Provider
        value={{
          getposts,
          post,
          setpost,
          getPostByUser,
        }}
      >
        {children}
      </postContext.Provider>{" "}
    </div>
  );
}
export default Postrovider;
