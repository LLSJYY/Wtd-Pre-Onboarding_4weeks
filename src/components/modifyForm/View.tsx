import styled from "styled-components";
import { Tcomments } from "../../util/types/types";

const FormStyle = styled.div`
  width: 100%;
  height: 100%;
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;


const View = ({ ...Vprops }) => {
  const { comment, onSubmit, ViewRef, onChange } = Vprops;
  return (
    <>
      <FormStyle key={comment.id}>
        <form onSubmit={(e) => onSubmit(e,ViewRef)}>
          <input
            type="text"
            name="profile_url"
            defaultValue={comment.profile_url}
            required
            onChange={(e) => onChange(e, ViewRef.current.profile_url)}
            ref={ref => ViewRef.current.profile_url = ref}
          />
          <br />
          <input
            type="text"
            name="author"
            defaultValue={comment.author}
            ref={ref => ViewRef.current.author = ref}
            onChange={(e) => onChange(e, ViewRef.current.author)}
          />
          <br />
          <textarea
            name="content"
            defaultValue={comment.content}
            required
            ref={ref => ViewRef.current.content = ref}
            onChange={(e) => onChange(e, ViewRef.current.content)}
          ></textarea>
          <br />
          <input
            type="text"
            name="createdAt"
            defaultValue={comment.createdAt}
            required
            ref={ref => ViewRef.current.createdAt = ref}
            onChange={(e) => onChange(e, ViewRef.current.createdAt)}
          />
          <br />
          <button type="submit">등록</button>
        </form>
      </FormStyle>
    </>
  );
}

export default View;
