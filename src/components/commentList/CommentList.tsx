import { useGetCommentByPageQuery } from "../../Api";
import { useSelector } from 'react-redux';
import { useModal } from "../../util/hooks/useModal";
import { Tcomments } from "../../util/types/types"
import { useState } from "react";
import View from "./View";
import Confirmation from "../../modal/confirmation";
import Form from "../form/Form";
import { comment } from "../../redux/comment";

interface IParam {
  ev: React.MouseEvent;
  commentId: number;
  mode: '수정' | '삭제'

}

interface IModalComment {
  mode: '수정' | '삭제' | null,
  commentId: number
}
const CommentList = (): any => {
  const pageNumber = useSelector((state: any) => state.pageNumber);
  const { data } = useGetCommentByPageQuery(pageNumber);
  const { open, close, PortalModal } = useModal();
  const [modalComment, setModalComment] = useState<any>({ mode: null, comment: null })
  
  if (!data) return <>someThing wrong</>;
  const comments = data.apiResponse.filter((comment) => comment.title !== 'pending');

  const Vprops = {
    ModalTrigger: ({ ev, commentId, mode }: IParam) => {
      setModalComment({
        mode: mode,
        commentId: commentId,
      });
      open(ev);
    },
    PortalModal: PortalModal,
    mode: modalComment.mode,
  }
  const modalComment1 :any= comments.filter((el)=> el.id === modalComment.commentId)[0];

  return (
    <>
      {comments.map((comment) =>
        <View key={comment.id} {...Vprops} comment={comment} />)}
      <PortalModal>
        {modalComment.mode === '수정' ? <Form comment={modalComment1} /> : <Confirmation />}
      </PortalModal>
    </>
  )


}

export default CommentList;