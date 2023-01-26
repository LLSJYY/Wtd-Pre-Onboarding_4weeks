import React from "react";
import PageListContainer from "./containers/PageListContainer";
import CommentList from "./components/commentList/CommentList";

function App() {
  return (
    <div>
      <CommentList/>
      <PageListContainer/>
    </div>
  );
}

export default App;
