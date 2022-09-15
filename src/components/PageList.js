import React from "react";
import styled from "styled-components";

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
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

function PageList() {
  const pageArray = [];

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <Page key="1">1</Page>
  );

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
