import { useGetCommentByPageQuery } from "../../Api";
import { useSelector } from 'react-redux';
import { useModal } from "../../util/hooks/useModal";
import { Tcomments } from "../../util/types/types"
import { useState } from "react";
import View from "./View";
import Confirmation from "../../modal/confirmation";
import Form from "../form/Form";

interface IModal {
  ev ?: React.MouseEvent;
  mode : '수정' | '삭제';
  commentId : Tcomments["id"];
}

const CommentList = (): any => {
  const pageNumber = useSelector((state: any) => state.pageNumber);
  const { data } = useGetCommentByPageQuery(pageNumber);
  const [modal, setModal] = useState<IModal>({mode: null,commentId: null})
  const { open,PortalModal } = useModal();

  if (!data) return <>someThing wrong</>;
  const comments = data.apiResponse.filter((comment) => comment.title !== 'pending');
  const modalComment : Tcomments = comments.filter((el)=> el.id === modal.commentId)[0];

  const Vprops = {
    ModalTrigger: ({ ev, commentId, mode }: IModal) => {
      setModal({
        mode: mode,
        commentId: commentId,
      });
      open(ev);
    },
    PortalModal: PortalModal,
    mode: modal.mode,
  }

  return (
    <>
      {comments.map((comment) =>
        <View key={comment.id} {...Vprops} comment={comment} />)}
      <PortalModal>
        {modal.mode === '수정' ? <Form comment={modalComment} /> : <Confirmation />}
      </PortalModal>
    </>
  )


}

export default CommentList;