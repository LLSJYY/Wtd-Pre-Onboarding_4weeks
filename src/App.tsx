import React from "react";
import CommentList from "./components/commentList/CommentList";
import NewForm from "./components/newForm/NewForm";
import PageList from "./components/pageList/PageList";

function App() {
  return (
    <div>
      <CommentList/>
      <PageList/>
      <NewForm/>
    </div>
  );
}

export default App;
