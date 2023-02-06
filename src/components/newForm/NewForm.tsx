import View from "./View";
import { useAddCommentMutation } from "../../Api";
import { useDispatch } from "react-redux";
import { selectedPageNumber } from "../../redux/page/pageCount";
interface IVprops {
  onSubmit: Function;
}
const NewForm = () => {
  const dispatch = useDispatch();
  const [addComment] = useAddCommentMutation();

  const addCommentHandler = ({ newComment }) => {
    addComment({ newComment });
    dispatch(selectedPageNumber(1));
  };
  const Vprops: IVprops = {
    onSubmit: (formData) => {
      addCommentHandler({
        newComment: formData,
      });
    },
  };
  return <View {...Vprops} />;
};

export default NewForm;
