const fiction = [
    "소설 전체",
    "한국소설",
    "영미소설",
    "일본소설",
    "기타 국가 소설",
    "추리/미스터리/스릴러",
    "독일 소설",
    "프랑스 소설", 
    "북유럽 소설",
    "중국 소설",
    "국내 역사소설",
    "해외 역사소설",
]

const essay = [
    "에세이/시 전체",
    "에세이",
    "시",
]

const swiperCategoryList = (num) => {
    if(num < 200){
        return fiction
    }else if(num < 300){
        return essay
    }else if(num<400){
        return "자기계발"
    }else if(num<500){
        return "인문/사회/역사"
    }
}

const WholeCategory = [
    {"categoryNum":100, "categoryName":"소설"},
    {"categoryNum":200, "categoryName":"시/에세이"},
    {"categoryNum":300, "categoryName":"자기계발"},
    {"categoryNum":400, "categoryName":"경제경영"},
    {"categoryNum":500, "categoryName":"인문/사회/역사"},
]

export const giveCurrentCategoryName = (num)=>{
    if(num < 200){
        return "소설"
    }else if(num < 300){
        return "시/에세이"
    }else if(num<400){
        return "자기계발"
    }else if(num<500){
        return "인문/사회/역사"
    }
}
   


export {swiperCategoryList, WholeCategory }