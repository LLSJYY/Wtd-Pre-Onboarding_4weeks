import View from "./View";
import { useGetCommentByPageQuery } from "../../Api";
import { useSelector, useDispatch } from "react-redux";
import { selectedPageNumber } from "../../redux/page/pageCount";

const PageList = () => {
  const { pageNumber } = useSelector((state: any) => state.pageNumberSlice);
  const { data, isLoading, isError } = useGetCommentByPageQuery({ pageNumber });
  const dispatch = useDispatch();
  const currentPage = pageNumber;
  if (isLoading) {
    //TODO: loading handling
    return;
  }
  if (isError) {
    //TODO: error handling
    return;
  }
  if (data) {
    const { totalComment } = data;
    const pageLength = Math.ceil(totalComment / 4);
    const pageGroup = 5;
    const totalPage = [];
    let pagination = [];

    for (let i = 1; i <= pageLength; i++) {
      totalPage.push(i);
    }

    if (currentPage <= (Math.ceil(pageGroup / 2))) {
      pagination = totalPage.slice(0, pageGroup);
    } else if (currentPage + (Math.ceil(pageGroup / 2)) > pageLength) {
      pagination = totalPage.slice(pageLength - pageGroup, pageLength);
    } else {
      pagination = totalPage.slice(currentPage - (Math.ceil(pageGroup / 2)), currentPage + ((Math.floor(pageGroup / 2))));
    }

    const Vprops = {
      pageClickHandler: (number) => { dispatch(selectedPageNumber(number)) },
      pagination,
    }

    return <View {...Vprops} />;
  }
}
export default PageList;