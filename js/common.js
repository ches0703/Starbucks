// Sub Menu의 Search icon에 대한 focus 설정
//-------------------------------------------------------------------------------------------------

// HTML(document)에서 class가 search인 요소를 찾아 searchEl에 저장
const searchEl = document.querySelector(".search");

// 위에서 찾은 search클래스의 내부 요소 중 input태그를 찾아 searchInputEl에 저장
const searchInputEl = searchEl.querySelector("input");

// searchEl에 대해 'click' 이벤트 추가 : icon을 클릭해도 input태그에 'focus'속성 부여가 가능하도록 하는 이벤트
searchEl.addEventListener("click", function(){  //  searchEl가 'click'될 시 실행될 함수
    searchInputEl.focus();  // search class내부의 input tag에 'focus'속성 부여
});

// searchInput에 대해 'focus'에 대한 이벤트 추가
searchInputEl.addEventListener("focus", function(){  // searchInputEl에 'focus'속성 추가 시 실행 될 함수
    searchEl.classList.add("focused");  // searchEL에 'focused' class 추가

    // searchInputEl에 HTML속성 지정 : 
    // placeholder : input태그에 대한 hint룰 추가하는 HTML속성
    searchInputEl.setAttribute("placeholder", "통합검색");
});

// searchInput에 대해 'blur'('focus' 해제 시)에 대한 이벤트 추가
searchInputEl.addEventListener("blur", function(){  // searchInputEl에 'blur'속성 추가 시 실행 될 함수
    searchEl.classList.remove("focused"); // searchEL에 'focused' class 제거

    // input태그의 hint룰 ""(blank)로 설정
    searchInputEl.setAttribute("placeholder", "");
});

//-------------------------------------------------------------------------------------------------



// Footer영역 현재 연도 출력
//-------------------------------------------------------------------------------------------------

const thisYear = document.querySelector(".this-year");   // HTML문서 내의 "this-year"클래스를 가진 요소를 찾음
thisYear.textContent = new Date().getFullYear();        // 새로운 Date객체를 생성한 후 Year에 관한 정보를 
                                                        // 위에서 찾은 요소에 텍스트 형태로 삽입

//-------------------------------------------------------------------------------------------------