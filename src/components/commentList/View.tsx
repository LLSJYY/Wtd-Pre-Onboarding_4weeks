import styled from "styled-components";

interface IButton {
  textAlign: string;
}


const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;
const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

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

const View = ({ ...Vprops }: any) => {
  const { comment, ModalTrigger, PortalModal, mode } = Vprops;
 return <>
    <Comment key={comment.id}>
      <img src={comment.profile_url} alt="" />{comment.author}
      <CreatedAt>{comment.createdAt}</CreatedAt>
      <Content>{comment.content}</Content>
      <Button textAlign={'right'} >
        <button onClick={(ev) => ModalTrigger({ ev, commentId: comment.id, mode: '수정' })}>수정</button>
        <button onClick={(ev) => ModalTrigger({ ev, commentId: comment.id, mode: '삭제' })}>삭제</button>
      </Button>
      <hr />
    </Comment>
  </>
}


export default View;
