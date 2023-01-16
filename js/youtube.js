// 유튜브 영상 출력
var tag = document.createElement('script');     // HTML문서 내에 넣을 script tag를 하나 생성함

tag.src = "https://www.youtube.com/iframe_api"; // 생성한 script tag의 url 설정

var firstScriptTag = document.getElementsByTagName('script')[0];    // 모든 script tag중 가장 처음에 있는 태그
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);        // 의 앞에 생성한 태그를 넣음(api의 실행을 위해)

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {           // "player"라는 ID를 찾아 옵션을 설정함
        videoId: 'BcUVLce3TOU',         // 최초 재생 할 비디오의 ID
        playerVars: {   // 비디오 재생 시 필요한 변수들
            autoplay: true,         // 자동 재생 여부
            loop: true,             // 반복 재생 여부
            playlist: "BcUVLce3TOU" // 반복 재생 시 재생할 비디오의 ID
        },
        events: {       // 비디오 재생 시 생기는 이벤트
            onReady: function(event){   // 비디오가 재생 될 준비가 된 경우
                event.target.mute()     // 음소거
            }
        }
    });
};