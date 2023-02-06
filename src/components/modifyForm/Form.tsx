import View from "./View";
import { Tcomments } from "../../util/types/types";
interface IVprops {
  onSubmit: any;
  comment: Tcomments;
}

const Form = ({ comment, updateCommentHandler }) => {
  const Vprops: IVprops = {
    onSubmit: (e, form) => {
      updateCommentHandler({
        newComment: form,
        e,
      });
    },
    comment: comment,
  };
  return <View {...Vprops} />;
};

export default Form;
