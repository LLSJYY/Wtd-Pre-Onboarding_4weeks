import View from "./View";
import { Tcomments } from "../../util/types/types";
import { useRef } from "react";
interface IVprops {
  onChange: (e :  React.ChangeEvent<HTMLInputElement>, ref : any) => void;
  onSubmit: any;
  comment: Tcomments;
  ViewRef : any
}

const Form = ({ comment,updateCommentHandler } ) => {
  let newComment = null;
  const ViewRef = useRef<any>({
    profile_url : '',
    author : '', 
    content : '',
    createdAt : ''
  })
  
  const Vprops: IVprops = {
    onChange: (e,ref) => {  ref.value = e.target.value;},
    onSubmit: (e,ViewRef) => {
       newComment = {
        profile_url : ViewRef.current.profile_url.value,
        author : ViewRef.current.author.value,
        content : ViewRef.current.content.value,
        createdAt : ViewRef.current.createdAt.value
      }
      updateCommentHandler({
        newComment: newComment,
        e,
      })
    },
    comment: comment,
    ViewRef : ViewRef,
  }
  return (<View {...Vprops}   />)
}

export default Form;