import { MouseEvent } from "react";
import styled from "styled-components";


interface IButton {
  textAlign: string;
}

interface IProps {
  onClose?: Function;
  event?: Function
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

const Confirmation = ({ onClose, event }: IProps ) => {  
  
  const cancelHandler = () => {
    onClose();
  }
  
  const confirmHandler = event === undefined ? 
  () => {onClose()} : 
  () => {event(); onClose()}

  return (
    <MessageBox>
      <Message>삭제하시겠습니까?</Message>
      <Button textAlign={'center'} >
        <a onClick={confirmHandler}>네</a>
        <a onClick={cancelHandler}>아니오</a>
      </Button >
    </MessageBox>)
}

export default Confirmation;