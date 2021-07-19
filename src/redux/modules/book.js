import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/API"


// Action
const LOAD_BOOKS = "articles/LOAD_BOOKS";

// ActionCreator
const loadBooks = createAction(LOAD_BOOKS, (book_list) => ({
    book_list,
  }));

// initailState
const initialState = {
  book_list: [{bookname: "보바리 부인",
  category:110,
 imgurl : "https://img.ridicdn.net/cover/998000060/xxlarge#1?dpi=xxhdpi",
 bgColor : "background-color: rgba(114, 61, 33, 0.95);",
 categoryDetail : "소설프랑스 > 소설소설서양 > 고전문학",
 bookDetailElements: "귀스타브 플로베르 저, 민희식 역 · 문예출판사 출판EPUB · 13.3MB · 약 28.1만 자",
 bookIntro : "책 소개 \n 근대 사실주의 소설의 초석, 《보바리 부인》평범한 일상생활에 환멸을 느끼고 공상에 사로잡혀 허영과 불륜으로 자신을 파멸로 몰아넣는 한 여인의 비극적 종말을 리얼하게 묘사한 플로베르의 대표작. 작가가 30세에서 35세까지 5년 동안 완성시킨 고심의 역작으로 빈틈없는 조사와 치밀하고 정확한 연구, 다듬고 다듬은 아름다운 문체가 돋보이는, 프랑스 사실주의 문학의 효시로 평가받는 작품이다.출판 당시 사회 윤리와 종교를 모독하는 내용이라는 이유로 재판에까지 회부되었으나 무죄 판결을 받았으며 미풍양속을 헤치는 악덕 소설이라는 평을 받았다. 이는 플로베르의 예술지상주의를 이해하지 못한 데서 기인한 해프닝이었다. 출판 후 1세기가 지난 오늘날, 종래의 줄거리 형식의 소설 기법 대신 장면으로 작품을 구성한 구조의 특이성과 성격 대신 기질을 인간이 구성 요소로 도입시킨 인간 분석의 탁월함 등을 인정받아 사실주의 문학의 최고봉으로 평가 받는다.",
 writerIntro: "저자 소개 저자 - 귀스타브 플로베르 아버지가 외과부장으로 있던 프랑스 루앙 시립병원에서 태어났다. 어린 플로베르는 병원에서 주로 시간을 보냈는데 이때의 경험으로 염세적인 사고를 갖게 된다. 세르반테스의 《돈키호테》는 셰익스피어와 더불어 그가 가장 사랑하는 책이었고, 이들에 대한 존경심이 그의 정신을 뒷받침하는 양식이 되었다. 염세주의와 해학 정신은 자동차의 두 바퀴처럼 두 축을 이루며 끝까지 플로베르의 사고 밑바탕에 존재한다. 고등학교에 입학한 플로베르는 당시의 우울한 낭만주의의 영향을 받고 ‘광기와 자살 사이에서 방황하는’소년이 되어 많은 습작을 한다.플로베르는 파리의 법과대학에 등록하나 적성에 맞지 않아 낙제를 하였고, 1844년 간질로 추정되는 신경발작을 계기로 학업을 그만두고 루앙으로 돌아와 요양을 하며 집필에 전념했다. 1851년 집필을 시작하여 하루 12시간씩 고된 작업",
 bookIndex: "목차",
 publicationDate:"출간일"}]
}

const loadBookSV = () => {
  return function (dispatch, getState, { history }) {

    api
      .get(`/book`)
      .then((res) => {
        dispatch(loadBooks(res.data))
      })
      .catch((err) => {
        console.log("list load error!", err);
      });
  };

};

// Reducer
export default handleActions(
    {
      [LOAD_BOOKS]: (state, action) =>
        produce(state, (draft) => {
          draft.book_list = action.payload.book_list;
        }),
      },
    initialState
  );

  const actionCreators = {
    loadBooks,
    loadBookSV,
  };
  export { actionCreators };

// ActionCreator export