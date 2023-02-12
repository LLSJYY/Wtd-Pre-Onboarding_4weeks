import styled from "styled-components";
import React, { useRef } from "react";
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
  const { onSubmit } = Vprops;
  const inputRefs = useRef([]);
  const formRef = useRef<HTMLFormElement>(null);
  const inputNames = ["profile_url", "author", "content", "createdAt"];

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // const form = new FormData(formRef.current);
    // let formData = Object.fromEntries(form);
    // onSubmit(formData);

    const form = inputRefs.current.reduce(
      (acc: Tcomments, curr: HTMLInputElement) => {
        acc[curr.name] = curr.value;
        curr.value = "";
        return acc;
      },
      {}
    );
    onSubmit(form);
  };
  return (
    <>
      <FormStyle key="form">
        <form key={"form"} ref={formRef} onSubmit={(e) => onSubmitHandler(e)}>
          {inputNames.map((name, index) => {
            if (name !== "content") {
              return (
                <React.Fragment key={index}>
                  <input
                    type="text"
                    name={name}
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
