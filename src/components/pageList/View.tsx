import styled from 'styled-components';
const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<IPage>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: ${props => props._currentPage}
  margin-right: 3px;
`;

interface IPage {
  readonly _currentPage: string;
}

const View = ({ ...Vprops }) => {
  const {  pageClickHandler, pagination,currentPage } = Vprops;
  
  return (
    <PageListStyle>
      {
        pagination.map((pageNumber, index) =>
          <Page
            _currentPage={pageNumber === currentPage ? 'none' : '1px solid lightgray;'}
            key={pageNumber}
            onClick={() => pageClickHandler(pageNumber)}>
            {pageNumber}
          </Page>)
      }
    </PageListStyle>
  )
}

export default View;
