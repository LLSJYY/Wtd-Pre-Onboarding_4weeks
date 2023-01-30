import React from "react";
import styled from 'styled-components';

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
`;

const View  = ({...Vprops}) =>  {
  const {pageLength,pageClickHandler} = Vprops;
  const pageArray = [];
  
  for(let i = 0; i < pageLength; i++) {
    pageArray.push(i+1);
  } 
  
  return (
    <PageListStyle>
      {
        pageArray.map((pageNumber) =>
          <Page 
          key={pageNumber}
          onClick={()=> pageClickHandler(pageNumber)}>
            {pageNumber}
            </Page>)
      }
    </PageListStyle>
  )
}

export default View;
