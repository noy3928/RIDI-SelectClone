# Ridi Select CloneCoding📘
 
리디북스 리디셀렉트의 카테고리 페이지를 클론코딩하였습니다.    
http://ridiclone.shop/

<br>

## 👯‍♂️ 1. 제작 기간 & 팀원 소개
- 2021년 7월 16일 ~ 7월 22일
- 4인 1조 팀프로젝트
	+ 프론트엔드 (React) : 우지음, 노예찬
  + 백엔드 (Spring) : 박응수, 김인섭 (https://github.com/peses0326/Clone_Ridibooks_BE)
<br>

## 💼 2. 사용 패키지 

* **reduxjs/toolkit**
  - 데이터 전역 관리를 위한 리덕스 관리 패키지
* **styled-components**
  - 컴포넌트의 스타일을 설정하는 패키지
* **axios**
  - 서버 통신을 위한 패키지
* **connected-react-router, history**
  - 라우팅 및 페이지 이동을 위한 패키지
* **swiper**
  - 슬라이더를 구현하는 패키지
* **universal-cookie**
  - 쿠키 crud 관련 동작을 위한 패키지
* **jwt-decode**
  - 토큰의 payload 내용을 디코딩하기 위한 패키지
* **material-ui**
  - UI Framework 패키지
* **lodash**
  - 명료한 자바스크립트 함수 구현위한 패키지

<br>

## 🖥 3. 실행화면

<img src="https://ifh.cc/g/nItMMZ.gif">

자세한 영상 : https://www.youtube.com/watch?v=XP0aNfOb3n0

<br>

## 📱 4. 기능정보

### 1. 리디북스의 페이지네이션 구현 
<br>
<img src="https://ifh.cc/g/LMHnGt.gif">

- 클론할 리디북스와 99% 비슷한 페이지네이션을 구현했다.

- 페이지를 넘어가는 방식은 버튼을 클릭할 때마다, 페이지 정보를 api를 통해 요청했다.

- 한 카테고리 별로 포함하고 있는 전체 페이지 갯수를 받아오도록, api를 구성했다. 이 페이지 갯수 변수는 리덕스에서 관리하였으며, 값이 변할 때마다 버튼이 변하도록 버튼 UI를 만들었다. 한번에 보일 수 있는 버튼의 갯수는 10였기 때문에, 전체 갯수/10을 하면 페이지의 슬라이드 갯수를 구할 수 있을 것이라 판단했다. 예를 들어, 페이지 갯수가 10개보다 작은 경우 슬라이드는 1개이다.페이지 갯수가 33개인 경우엔 슬라이드가 4개가 된다. 이렇게 구해진 슬라이드를 통해서 버튼 UI를 3가지 조건으로 조건 렌더링하도록 만들었다. 1)페이지 갯수가 10개보다 작은 경우, 2)현재 슬라이드가 총 슬라이드 갯수 보다 작을 경우, 3)현재 슬라이드가 전체 슬라이드 갯수와 동일한 경우로 나누었다. 

```jsx
const totalPageNum = useSelector((state) => state.book.pageNum)
const lastSlideNum = Math.ceil(totalPageNum/10) // 전체 슬라이드의 갯수를 구하기 
}, []);

...

//페이지 전체 슬라이드가 10개가 넘지만, 마지막 슬라이드와 현재 슬라이드가 같지 않은 경우. 
    if(lastSlideNum !== currentSlideNum){
        const pages = _.range(startPage, startPage+10)
        return(
        <PaginationWrapper>
            {currentSlideNum > 1 ? <FirstPageButton onClick={()=>{
                moveToFirstPage()
            }}>처음</FirstPageButton> : ""}
            {currentSlideNum > 1 ? <DotBox><Dot src={DotImg}/></DotBox> : ""}
            {currentSlideNum > 1 ? <PrevButton onClick={()=>{clickPrevButton(); getBooksByPage(startPage-10)}}><PrevIcon src={PrevImg}/></PrevButton>: ""}
            <PaginationBox>
                {pages.map((page, idx)=>{
                    return(<PageButton key={idx} className={page === currentPage ? "active" : null} onClick={()=>{
                        getBooksByPage(page)
                    }}>{page}</PageButton>)
                })}
            </PaginationBox>
            <NextButton onClick={()=>{clickNextButton(); getBooksByPage(startPage + 10)}}>
               <NextIcon src={NextImg}/>
            </NextButton>
            <DotBox><Dot src={DotImg}/></DotBox>
            <LastPageButton onClick={()=>{
                moveToLastPage()
            }}>마지막</LastPageButton>
        </PaginationWrapper>)

    }
```

- 현재 클릭한 버튼을 active한 상태로 바꾸기 : 클래스 네임에 active라는 값을 넣어두고, css 파일에 active에 대한 스타일 값을 정의내려두었다. useState로 currentPage라는 값을 만들어두고, 버튼을 클릭할 때마다 해당 값이 변하게 하였고, map을 통해서 버튼을 그릴 때마다 버튼의 번호와 currentPage와 같은지를 확인해서 클래스 네임에 active값을 주는 방식으로 만들었다. 

```jsx
const [currentPage, setcurrentPage] = useState(1)

//page number로 책 로드하기. 
const getBooksByPage = (pageNumber) => {
      dispatch(bookActions.loadBookAPI(pageNumber))
      setcurrentPage(pageNumber) //현재 페이지 넘버를 바꿔주기
    }
}, []);

...

{pages.map((page, idx)=>{
             return(
	     <PageButton key={idx} 
	     	className={page === currentPage ? "active" : null} 
	     	onClick={()=>{ getBooksByPage(page)}}>
	     {page}
	     </PageButton>)
                })}
```

#### 💥 트러블 슈팅 : 다른 카테고리로 넘어갔을 때, 현재 currentPage값과 startPage값이 초기화되지를 않아서 문제가 발생했다. 
- 카테고리가 바뀐다는 것은 전체 페이지 갯수가 바뀐다는 것이다. 그렇기 때문에 useEffect의 dependency Array를 활용해, 전체 페이지 갯수가 바뀔 때마다 현재 currentPage값과 startPage값을 초기화 시켜주었다. 

```jsx
useEffect(()=>{
        setcurrentPage(1)
        setCurrentSlideNum(1)
        setStartPage(1)
    },[categoryNum])
```
<br/>
<br/>

### 2. 별점 매기기  
<br/>
<img src="https://ifh.cc/g/54aGeA.gif">

- 별점을 클릭했을 때, 별점 값을 저장해서 댓글 api에 post요청을 보낸다.

- 별점을 등록할 때, 두가지 상황에 대한 체크가 필요했다.이 두가지 상황에 따라서 별점을 보여주는 방식이 달라져야 한다. 1)이 사람이 별점을 클릭했는 지, 2)이 사람이 댓글을 작성했는지. 첫번째부터 설명하자면, 1)이 사람이 별점을 클릭하지 않았을 때, 마우스를 올리면 호버 효과가 나타나도록 해야한다. 클릭했을경우에는 화면에 클릭한 별점이 기록되어 있어야 한다. 이를 위해 useState를 활용하며, 화면에 조건부 렌더링이 되도록했다. 그래서 별점을 클릭한 적이 있다면, 내가 기록한 별점이 화면에 남아있도록 만들었다. 2)이 사람이 댓글을 작성한 적이 있다면, 이전에 기록했던 글과 별점이 화면에 남아있도록해야한다. 이를 위해서 api get요청을 보내, 해당 댓글 id에 현재 로그인한 유저가 작성한 댓글이 있는지를 확인한다. 확인한 내용을 isEdit이라는 변수로 리덕스에서 관리했다. 로그인한 유저가 해당 게시글 내에 작성한 댓글이 있다면, isEdit값을 true로 바꿔준다. 이것을 리덕스에서 관리한 이유는 별점을 그려주는 RatingStar라는 컴포넌트와, 리뷰를 작성하는 ReviewWrite라는 컴포넌트가 따로 있었기 때문이다. 데이터를 더 예측 가능한 방향으로 관리하기 위해 리덕스를 사용해 사용자가 댓글을 작성한 적이 있는지 없는지를 확인했고, 이런 여부에 따라 화면에 그려지는 UI가 달라지도록 만들었다. 

- 별점 별 프로그래스바 만들기 : 각 별점별 통계를 그래프를통해서보여주고있다. 이것을 화면에 그리기 위해서 전체 댓글 작성자의 수와 각 별점별 갯수를 api설계에 추가했다. 그래서 받아온 값을 통해 (별점별갯수/전체댓글작성자수) * 100 이런식으로 각 별점별 퍼센트를 구했다. 이것을 그래프의 width값에 적용시켰다. 



## 5. 트러블 슈팅 





## 6. WHAT I LEARN

### 노예찬: 
- 리덕스의 장점에 대해서 더 많이 느낄 수 있는 시간이 되었다. 데이터를 컴포넌트끼리 주고받을 때, 여러가지 값이 주고 받는 상황이 되면, 데이터가 예측불가능해지는 상황이 생겨 내가 원하지 않는 그림이 화면에 구성될 때가 있었다. 이를 위해 고민을 하다가, 데이터를 리덕스에 넘기기로 결정했는데, 이렇게하니 데이터가 훨씬 예측이 가능해졌고, 통일성있게 이루어진다는 느낌을 받았다. 아직은 다른 상태관리 라이브러리를 사용해보지 않았지만, context api와 mobX도 공부를 해보면서, 특정한 상황에서 어떤 방식의 데이터 관리법을 사용하는 것이 좋은지 공부를 해볼 필요성을 느꼈다. 리덕스의 편리함을 느꼈지만, 좋다고 이것만 사용하게 될 경우의 위험성도 생각해보게 되는 시간이었다. 
- 스타일 컴포넌트를 사용하는 이유에 대해서 같은 프론트 팀원과 함께 토론해보고 공부할 수 있는 시간을 가졌었다. 제대로 된 스타일 컴포넌트의 사용방식은 무엇인지, 굳이 다른 라이브러리를 사용하지 않고 스타일 컴포넌트를 사용하는 이유는 무엇인지에 대해서 고민해보고 자료를 찾아보는 시간을 가졌다.
  - 스타일 컴포넌트의 장점 : 1) react의 개발 방식과 조화가 이루어진다 - react는 컴포넌트 단위로 구성된다. 이를 css파일로 따로 빼서 className을 주는 방식으로 스타일링을 하는 것이 아닌, 나의 스타일 컴포넌트를  구성해서 만들어나가는 방식은 react와 비슷하다. 2) 컴포넌트의 props값을 받아올 수 있다. - props의 값에 따라 다양한 스타일링이 가능하다. 3) CSS가 컴포넌트 스코프에서만 적용되기 때문에 우선순위에 따른 문제가 발생하지 않는다. 4) 한 컴포넌트 안에서 작성을 하기 때문에 개발자가 작성하기에 편리하다.
  - 스타일 컴포넌트의 단점 : 1)인터렉션이 늦다 - JS의 CSS 코드를 읽어와서 파싱하는 단계부터 시작하기 때문에 아무래도 늦어질 수 밖에 없다. css-in-css의 경우에는 모든 상태에 대한 값을 미리 만들어두기 때문에 더 빠르다. 이런 차이가 확연히 나타나는 곳은 인터렉션이 활발한 사이트의 경우이다. 애플 사이트 같은 경우, 인터렉션이 굉장히 활발한데, 이때 css-in-js로 작성할 경우 아무래도 css-in-css보다 느려질 수 밖에 없다.
  - 결론 : 많이들 사용하는 방식이라고해서, 사용하는 것은 좋지 않다. 스스로 장단점을 따져보고, 내가 하려는 프로젝트의 상황과 알맞는지 판단하는 것이 필요하다는 것을 배울 수 있었다. 

 










