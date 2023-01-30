import View from "./View";
import { useGetCommentByPageQuery } from "../../Api";
import { useSelector,useDispatch } from "react-redux";
import { selectedPageNumber } from "../../redux/page/pageCount";

const PageList = () => {
  const pageNumber = useSelector((state: any) => state.pageNumberSlice);
  const { data, isLoading, isError } = useGetCommentByPageQuery({ pageNumber });
  const dispatch = useDispatch();
  console.log(pageNumber);
  if (isLoading) {
    //TODO: loading handling
    return;
  }

  if (isError) {
    //TODO: error handling
    return;
  }

  if (data) {
    const Vprops = {
      pageClickHandler: (number)=> {dispatch(selectedPageNumber(number))},
      pageLength : Math.ceil(data.totalComment / 4),
    } 

    return <View {...Vprops}/>;
  }
}
export default PageList;