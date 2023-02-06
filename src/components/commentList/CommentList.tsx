import { useGetCommentByPageQuery } from "../../Api";
import { useSelector } from "react-redux";
import { useModal } from "../../util/hooks/useModal";
import { Tcomments } from "../../util/types/types";
import { useState } from "react";
import View from "./View";
import Confirmation from "../../modal/confirmation";
import Form from "../modifyForm/Form";
import { useDeleteCommentMutation, useUpdateCommentMutation } from "../../Api";
interface IModal {
  event?: React.MouseEvent;
  mode: "수정" | "삭제";
  commentId: Tcomments["id"];
}

const CommentList = () => {
  const { pageNumber } = useSelector((state: any) => state.pageNumberSlice);
  const { data } = useGetCommentByPageQuery(pageNumber);
  const { open, PortalModal, close } = useModal();
  const [deleteComment] = useDeleteCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [modal, setModal] = useState<IModal>({
    mode: null,
    commentId: null,
  });

  if (!data) return <>someThing wrong</>;

  const sortedComments = data.apiResponse.filter(
    (comment) => comment.title !== "pending"
  );
  const modalComment: Tcomments | undefined = sortedComments.filter(
    (el) => el.id === modal.commentId
  )[0]; //undefined 일수도 있음

  const updateCommentHandler = ({ e, newComment }) => {
    updateComment({ id: modal.commentId, newComment });
    close(e);
  };
  const deleteCommentHandler = (e) => {
    deleteComment({ id: modal.commentId });
    close(e);
  };
  const Vprops = {
    modalTrigger: ({ event, commentId, mode }: IModal) => {
      setModal({
        mode: mode,
        commentId: commentId,
      });
      open(event);
    },
  };
  return (
    <>
      {sortedComments.map((comment) => (
        <View key={comment.id} {...Vprops} comment={comment} />
      ))}
      <PortalModal>
        {modal.mode === "수정" ? (
          <Form
            comment={modalComment}
            updateCommentHandler={updateCommentHandler}
          />
        ) : (
          <Confirmation
            deleteCommentHandler={deleteCommentHandler}
            close={close}
          />
        )}
      </PortalModal>
    </>
  );
};

export default CommentList;
