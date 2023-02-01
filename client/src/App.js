import "./App.css";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { postContext } from "./context/posts";
import InputAndButtons from "./components/inputAndButtons";
function App() {
  const { post, getposts, getPostByUser } = useContext(postContext);
  const [postUserId, setPostUserId] = useState("");

  return (
    <div className="App-header">
      <InputAndButtons />
      {console.log(post)}
      {/* <AllPost /> */}
      <div class="App-header">
        <table>
          <thead>
            <tr>
              <th>user ID</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          {post.map((val) => (
            <tbody>
              <tr key={val.id}>
                <td>{val.userId}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
