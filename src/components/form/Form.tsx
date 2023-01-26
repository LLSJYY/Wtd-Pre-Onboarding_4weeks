import View from "./View";
import { Tcomments } from "../../util/types/types";
import { useUpdateCommentMutation } from "../../Api";
import { HtmlHTMLAttributes } from "react";
import { useRef } from "react";
interface IVprops {
  onChange: (e :  React.ChangeEvent<HTMLInputElement>, ref : any) => void;
  onSubmit: any;
  comment: Tcomments;
  ViewRef : any
}

interface IProps {
  comment: Tcomments
} // 이거 안해주면 왜 any라고 뜰까 ?
const Form = ({ comment }: IProps) => {
  let newComment = null;
  const [
    updateComment, // This is the mutation trigger
    { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useUpdateCommentMutation();
  console.log(comment);
  const ViewRef = useRef<any>({
    profile_url : '',
    author : '', 
    content : '',
    createdAt : ''
  })
  
  const Vprops: IVprops = {
    onChange: (e,ref) => {  ref.value = e.target.value; console.log(ViewRef.current.profile_url.value);},
    onSubmit: (e,ViewRef) => {
      e.preventDefault();
       newComment = {
        profile_url : ViewRef.current.profile_url.value,
        author : ViewRef.current.author.value,
        content : ViewRef.current.content.value,
        createdAt : ViewRef.current.createdAt.value
      }
      updateComment({ id: comment.id, newComment: newComment })
    },
    comment: comment,
    ViewRef : ViewRef,
  }
  return (<View {...Vprops} />)
}

export default Form;