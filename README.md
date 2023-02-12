## 구현 사항 
  1. API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
  2. 페이지네이션
  3. 댓글 작성, 수정, 삭제 후 동작
   - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
   - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
   - 삭제하고 난 뒤: 1페이지로 이동

  예시 이미지와 같이 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현
     ![https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif](https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif)
     

## 사용기술

### ReactJS with VAC PATTERN

  
```
  1.View 로직(UI 기능, 상태 관리)과 렌더링(JSX)의 관심사 분리를 해보고싶어서 적용해봤습니다.
   - View componnent는 오직 props를 통해서만 제어되며 스스로의 상태를 관리하거나 변경하지 않는 stateless 컴포넌트입니다.
   - 반복이나 조건부 노출, 스타일 제어와 같은 렌더링과 관련된 처리만을 수행합니다. 
  2.VAC debugger의 도움을 받아 보다 쉬운 설계를 할 수 있습니다.
  
```

### ReactJS with styled-Component


```
  디자인..감각이 그렇게 좋지않아서 자주 CSS를 바꿨어야 했는데,VAC 패턴 적용으로 어느 컴포넌트에서
  스타일을 바꿔야할지 바로 알 수 있어 용이했습니다.
```

### ReactJS with Redux Toolkit
  
```
  1. 필수 기술중, Redux-Devtools,Redux-Logger의 적용을 보다 편리하게 할수 있었습니다.
  2. RTK QUERY를 사용할 수 있습니다.
```

### Redux Toolkit with RTK Query

```
  1. 서버 상태와 프론트 상태를 분리해서 관리할 수 있기 때문에 다양한 방식을 적용할 수 있었습니다.
     comment를 수정할때, 수정이 다 완료가 된 후 onSubmit이벤트를 통해 서버로 보내거나
     onChange 이벤트를 이용해 keyboard Event가 일어날 때 마다 서버에 데이터를 보내는 두가지 방식을 적용해보았습니다.
      
  2.Query가 제공하는 isLoading, isError등을 이용하여 통신 관련 상태 관리를 할 수 있었습니다.
```

### TypeScriptt

```
  1.런타임 단계가 아닌, 컴파일 단계에서 오류 확인이 가능하기 때문에 사용했습니다.
  2.Type Restriction을 두어서 발생할 수 있는 Human Error를 사전에 방치 할 수 있습니다.
```
  
## 구조
```
src
├── Api
│   └── index.tsx
├── App.tsx
├── components
│   ├── commentList
│   ├── modifyForm
│   ├── newForm
│   └── pageList
├── index.tsx
├── modal
│   ├── PortalModal.tsx
│   └── confirmation
├── redux
│   ├── page
│   └── store.tsx
└── util
    ├── hooks
    └── types
```

  ## 프로젝트 진행시 주안점
  - devTools 충분히 사용해보기
    Redux Devtools 와 VAC Debugger를 이용한 개발 경험을 해보기 위해 노력했습니다.
  
  - 라이브러리의 작동원리와 관심사 분리
    처음 사용하는 라이브러리다 보니 안티패턴을 사용할 수 있기 때문에 해당라이브러리에 대한 Docs나 내부구조를 많이 공부하며
    찾아 보았습니다. 관심사 분리를 위해 어떤 함수가 어떤 역할을 하는지 정확히 알아야할 필요가 있었습니다.
    
  - 재사용 가능한 포탈 모달 컴포넌트 
    해당 프로젝트에서 모달을 포탈기능을 활용하고, 또 재사용 가능하게 커스텀 훅으로 작성했습니다.
    
  
  ## 프로젝트 하면서 느낀 한계점
   - Git 활용도 부족
     부족한 커밋 관리로 인해, 오류를 해결 했지만 이후 회고록을 작성할떄
     오류 해결을 위해 어떻게 접근했고, 어떤식으로 해결 했고 등등의 방식이 기억이 나질 않아 깃 관리
     의 중요성을 깨달았습니다.
   
   - Typescript any 
      무분별한 any Type 남용은 안티패턴입니다
      
   - 중복된 Modal 로직
     NewForm 과 ModifyForm의 로직이 공통된 사항이 많은데, modify Form의 특정 관심사를 따로 빼낼 수가 없었습니다.  
     조금 더 고민을 해본다면 , 더 좋은 구조를 만들 수 있을것 같습니다. (리팩토링 완료)
    <details>
    <summary>리팩토링</summary>
    https://github.com/LLSJYY/Wtd-Pre-Onboarding_4weeks/pull/2#issue-1572174304

</details>
   - query 의 isLoading , isError 등의 비동기 관련 기능과 캐싱기능
     해당 기능에 대한 충분한 숙지가 되지 않아서 사용하지 못했는데, 아쉬웠습니다.
     
     
   ### 과제 NOTION
      - 만들면서 어려웠던 점
      - 다른사람이 궁금했던 점
      - 인턴쉽이 끝나고 난후 동료평가 
      
   https://www.notion.so/WTD-4-978a7f1be0314cc28997b576635e5bc5
