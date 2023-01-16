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



// 'scroll' 이벤트에 대한 badges의 표시여부 설정 + to-top 버튼 추가
//-------------------------------------------------------------------------------------------------


// to-top버튼 기능 추가
//===============================================
const toTopEl = document.querySelector("#to-top");  // HTML문서 내의 id가 "to-top"인 요소를 찾아
toTopEl.addEventListener("click", function(){       // "click"에 대한 이벤트 핸들러 추가
    gsap.to(window, 0.7, {      // window(현재 보고있는 창)을 0.7초동안
        scrollTo: 0             // 스크롤 위치를 0으로 이동
    });
});
//===============================================

// HTML(document)에서 header 내부의 class 'badges'인 요소를 찾아 badgeEl에 저장
const badgeEl = document.querySelector("header .badges");

// window : Browser의 하나의 Tap(browser 창)
// window에 'scroll' event 추가
// lodash.js의 _throttle 함수 사용 : 'scroll' 이벤트에 대한 함수 실행이 0.3초 간격으로 실행되게 설정
window.addEventListener('scroll', _.throttle(function(){  // 'scroll' 이밴트 발생 시 실행 될 함수
    // window.scrollY : 현재 스크롤의 Y축 위치
    // gsap을 통한 애니메이션 효과 : gsap.to(요소, 지속시간, 옵션)
    if(window.scrollY > 500){   // 스크롤의 Y축 위치가 500보다 크면 : badge요소 숨김
        gsap.to(badgeEl, 0.6, {
            opacity: 0,         // opacity를 0.6초에 걸쳐 0으로 만든 뒤
            display : "none"    // display의 값을 "none"으로 주어 'click'이 불가능 하게 만듬"
        });
        // badgeEl.style.display = "none"  // style을 사용하여 CSS속성 "display"에 "none" 부여

        // to-top 버튼 제어
        gsap.to(toTopEl, 0.2, {
            x: 0,                   // 원래 위치로 돌아오게해서 나타나게 함
        });

    }
    else{                       // 스크롤의 Y축 위치가 500보다 작거나 같으면 : badge요소 표시
        gsap.to(badgeEl, 0.6, {
            opacity: 1,         // opacity를 0.6초에 걸쳐 1로 만든 뒤
            display : "block"   // display의 값을 "block"으로 주어 'click'이 가능 하게 만듬"
        });
        // badgeEl.style.display = "block" // style을 사용하여 CSS속성 "display"에 "block" 부여
        
        // to-top 버튼 제어
        gsap.to("#to-top", 0.2, {   // 굳이 요소를 찾아 변수로 설정 안해도 됨!
            x: 100,                 // x축으로 100만큼 움직여서 숨김
        });

    }

}, 300));  // _throttle(funtion, time(ms))





// VISUAL의 요소에 Animation(Fade in)추가
//-------------------------------------------------------------------------------------------------

// HTML(document)에서 'visual' 내부의 class 'fade-in'인 요소를 모두 찾아 fadeEls에 저장
// querySelectorAll() : querySelector()와 달리 모든 해당요소를 찾음
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function(fadeEl, index){    // fadeEls의 개수 만큼 함수를 반복실행(like a iterator)
                                            // fadeEls의 요소가 하나씩 함수의 메게 변수(fadeEl)로 전달 됨
                                            // index는 반복 횟수를 나타냄
    // gsap을 통한 애니메이션 효과 : gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1,{                     // fadeEl에 gsap.to를 통해 opacity값을 1로 설정
        delay: (index + 1) * 0.7,           // delay를 index값(함수의 반복 횟수)을 통해 설정하면서
        opacity: 1                          // 각 요소들이 반복 순서에 맞추어 차례대로 보이게 됨
    });
});

//-------------------------------------------------------------------------------------------------



// Notice - Left Side - Swiper
//-------------------------------------------------------------------------------------------------
new Swiper(".notice-line .swiper", {    // Swiper 객체 생성(".notice-line .swiper") 및 객체의 옵션 부여
    direction: "vertical",              // 방향 : 수직
    autoplay: true,                     // 자동 재생 : true
    loop: true                          // 반복 : ture
});
//-------------------------------------------------------------------------------------------------



// Promotion Swiper
//-------------------------------------------------------------------------------------------------
new Swiper(".promotion .swiper", {      // Swiper 객체 생성(".promotion .swiper") 및 객체의 옵션 부여
    //direction: "horizontal",          // 방향 : 수평(defalte값이므로 따로 명시 X)
    slidesPerView: 3,                   // 한번에 보여지는 슬라이드의 수 : 3
    spaceBetween: 10,                   // 슬라이드 사이간의 거리 : 10px
    centeredSlides: true,               // 현제 슬라이드가 중앙에 위치하도록 하는 옵션: true
    loop: true,                         // 반복 설정 : true
    autoplay: {                         // 자동 재생에 대한 옵션 설정
        delay: 5000                     // 자동 제셍의 딜레이 시강 : 5000ms(= 5s)
    },
    pagination: {                       // 페이지 번호 요소 선택자
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {                       // 이전 슬라이드, 다음 슬라이드를 선택할수 있는 요소
        nextEl: ".promotion .swiper-button-next",
        prevEl: ".promotion .swiper-button-prev",
    },
});
//-------------------------------------------------------------------------------------------------



// Toggle Promotion 기능 추가
//-------------------------------------------------------------------------------------------------

const promotionEl = document.querySelector(".promotion");                   // HTNL문서 내의 "promotion" 클래스
const promotionToggleBtn = document.querySelector(".toggle-promotion");     // 프로모션을 토글하는 버튼
let isHidePromotion = false;  // 프로모션이 숨겨져 있는지에 대한 Bool값
// isHidePromotion = true -> Promtion이 숨겨짐, false -> Promtion이 나타나 있음

promotionToggleBtn.addEventListener("click", function(){  // 토글 버튼에 대한 "click" 이벤트 추가
    if(isHidePromotion){    // Promotion이 숨겨져 있는 경우 -> Promotion을 나타내게 함
        promotionEl.classList.remove("hide");   // "toggle-promotion"클래스에 "hide"클래스 제거
    }
    else{                   // Promotion이 나타나 있는경우 -> Promotion을 숨김 처리 
        promotionEl.classList.add("hide");      // "toggle-promotion"클래스에 "hide"클래스 추가
    }
    isHidePromotion = !(isHidePromotion);       // Bool값을 반전 시킴
});

//-------------------------------------------------------------------------------------------------



// Floating Animation
//-------------------------------------------------------------------------------------------------

// 랜덤 함수 : 소수점 2자리를 가지는 랜덤한 실수를 반환
function random(min, max){
    return parseFloat((Math.random() * (min - max) + min).toFixed(2));
}

// "floating"클래스를 가지는 요소에 에니메이션을 추가하는 함수
function floatingObject(selector, delay, size){
    // gsap을 통한 애니메이션 효과 : gsap.to(요소, 지속시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {   // 랜덤한 시간만큼 애니메이션이 실행 됨
        delay: random(0, delay),            // 0부터 매개변수로 받은 delay사이의 랜덤한 값 만큼 대기 후 gsap모션 실행
        y: size,                            // y축으로 size만큼 이동
        yoyo: true,                         // yoyo : 특정 방향으로 이동 후 다시 원래위치로 돌아오는 속성
        ease: Power1.easeInOut,             // gsap easing을 사용하여 애니메이션의 모션 속도 그래프를 설정
        repeat: -1                          // repeat : 반복 설정, -1일 경우 무한반복
    });
};

// floatingObject()함수를 이용아여 "floating"이라는 클래스 가진 요소에 에니메이션 추가
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

//-------------------------------------------------------------------------------------------------



// 스크롤의 위치에 따른 "section"출력
//-------------------------------------------------------------------------------------------------

// HTML문서 내의 "section"이면서 "scroll-spy"클래스를 모두찾아 spyEls에 저장
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){     // spyEls를 통한 반복문 실행, 
                                    // 익명함수에 spyEls의 요소 spyEl가 차례대로 매게변수로 전달 됨

    // ScrollMaginc라이브러리 : 화면에 보이는 요소를 감시하는 객체 생성
    // setClassToggle() : 특정 클래스를 토글 메소드
    // addTo() : ScrollMaginc라이브러리를 사용하기 위해 컨트롤러를 추가하는 메소드
    new ScrollMagic.Scene({
            triggerElement: spyEl,      // 화면에 보이는지를 검사할 요소 지정
            triggerHook: 0.8            // 보이는지를 검사할 때의 기준 지점(0: 맨위, 1 :맨 아래 )
        }).setClassToggle(spyEl, "show").addTo(new ScrollMagic.Controller());    // <- 메소드 체이닝(여러 메소드를 마치 체인처럼 연결)
});

//-------------------------------------------------------------------------------------------------



// Awards Swiper
//-------------------------------------------------------------------------------------------------

new Swiper(".awards .swiper", {     // ".awrads"내부의 "swiper"를 Swiper객체로 생성
    autoplay: true,     // 자동재생
    loop: true,         // 반복
    spaceBetween: 30,   // 슬라이드 간 간격
    slidesPerView: 5,   // 한번 보이는 슬라이드의 수
    navigation: {       // 이전 슬라이드, 다음 슬라이드를 선택할수 있는 요소
        nextEl: ".awards .swiper-button-next",
        prevEl: ".awards .swiper-button-prev",
    },
});

//-------------------------------------------------------------------------------------------------



// Footer영역 현재 연도 출력
//-------------------------------------------------------------------------------------------------

const thisYear = document.querySelector(".this-year");   // HTML문서 내의 "this-year"클래스를 가진 요소를 찾음
thisYear.textContent = new Date().getFullYear();        // 새로운 Date객체를 생성한 후 Year에 관한 정보를 
                                                        // 위에서 찾은 요소에 텍스트 형태로 삽입

//-------------------------------------------------------------------------------------------------