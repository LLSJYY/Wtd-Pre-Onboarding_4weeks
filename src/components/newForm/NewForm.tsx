import View from "./View"
import { useRef } from "react";
import { useAddCommentMutation } from "../../Api";
import { useDispatch } from "react-redux";
import { selectedPageNumber } from "../../redux/page/pageCount";
interface IVprops {
  onChange: Function;
  onSubmit: Function;
  ViewRef: any;
}
const NewForm = () => {
  const dispatch = useDispatch();
  let newComment = null; //해결하고싶습니다.
  const [addComment] = useAddCommentMutation();

  const ViewRef = useRef<any>({
    profile_url: '',
    author: '',
    content: '',
    createdAt: ''
  })
  const addCommentHandler = ({ newComment }) => {
    addComment({ newComment })
    dispatch(selectedPageNumber(1))
  }
  const Vprops: IVprops = {
    onChange: (e, ref) => {ref.value = e.target.value; },
    onSubmit: (e, ViewRef) => {
      e.preventDefault();
      newComment = {
        profile_url: ViewRef.current.profile_url.value,
        author: ViewRef.current.author.value,
        content: ViewRef.current.content.value,
        createdAt: ViewRef.current.createdAt.value
      }
      ViewRef.current.profile_url.value = '';
      ViewRef.current.author.value = '';
      ViewRef.current.content.value = '';
      ViewRef.current.createdAt.value = '';
      // 마음에 안들어요 ..
      addCommentHandler({
        newComment: newComment,
      })

    },
    ViewRef: ViewRef,
  }
  return (<View {...Vprops} />
  )
}

export default NewForm;