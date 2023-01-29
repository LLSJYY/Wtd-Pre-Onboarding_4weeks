import { useModal } from "../../util/hooks/useModal";
import styled from "styled-components";
import React from "react";
interface IButton {
  textAlign: string;
}

interface IProps {
  deleteCommentHandler: Function;
  close : Function;
}
const Button = styled.div<IButton>`
text-align: ${props => props.textAlign};
margin: 10px 0;
  & > a { 
    margin: 0.125rem;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
const Message = styled.p`
  text-align: center;
    
`
const MessageBox = styled.div`
  display :flex;
  flex-direction : column;
  justify-content: center;
  margin: auto 0;

`

const Confirmation = ({deleteCommentHandler,close}) => {  
  return (
    <MessageBox > 
      <Message>삭제하시겠습니까?</Message>
      <Button textAlign={'center'} >
        <a onClick={(e) => {deleteCommentHandler(e)}}>네</a>
        <a onClick={close}>아니오</a>
      </Button >
    </MessageBox>)
}

export default Confirmation;