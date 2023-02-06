import styled from "styled-components";
import React, { MutableRefObject, useRef } from "react";
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
  const inputRefs = useRef([]);
  const { comment, onSubmit } = Vprops;
  const inputNames = ["profile_url", "author", "content", "createdAt"];
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const form = inputRefs.current.reduce((acc, curr, index) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});
    onSubmit(e, form);
  };
  return (
    <>
      <FormStyle key="form">
        <form key={"form"} onSubmit={(e) => onSubmitHandler(e)}>
          {inputNames.map((name, index) => {
            if (name !== "content") {
              return (
                <React.Fragment key={index}>
                  <input
                    type="text"
                    name={name}
                    defaultValue={comment[name]}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    required
                  />
                  <br />
                </React.Fragment>
              );
            }
            if (name === "content") {
              return (
                <React.Fragment key={index}>
                  <textarea
                    name={name}
                    defaultValue={comment[name]}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    required
                  />
                  <br />
                </React.Fragment>
              );
            }
          })}
          <button type="submit">등록</button>
        </form>
      </FormStyle>
    </>
  );
};

export default View;
