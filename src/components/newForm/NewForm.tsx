import View from "./View";
import { useAddCommentMutation } from "../../Api";
import { useDispatch } from "react-redux";
import { Tcomments } from "../../util/types/types";
import { selectedPageNumber } from "../../redux/page/pageCount";
interface IVprops {
  onSubmit: Function;
}
const NewForm = () => {
  const dispatch = useDispatch();
  const [addComment] = useAddCommentMutation();

  const addCommentHandler = (newComment: Tcomments) => {
    addComment({ newComment });
    dispatch(selectedPageNumber(1));
  };
  const Vprops: IVprops = {
    onSubmit: (formData: Tcomments) => {
      addCommentHandler(formData);
    },
  };
  return <View {...Vprops} />;
};

export default NewForm;
