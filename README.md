# Ridi Select CloneCoding 👊
 
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

### 2. 이미지 호버시 동시에 다른 이미지src를 바꿔주기  



## 5. 트러블 슈팅 


## 6. WHAT I LEARN
