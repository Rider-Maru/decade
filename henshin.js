var ClickNum = 0;
var AutorizeNum = 0;

var isPushKey = false;
var isAuthorizable = false;
var onStandBy = false;
var onStandByMetal = false;
var onAuthorize = false;

var releaseCamera = true;

var srcsKey = new Array("picture/braveDragon_0p.png", "picture/braveDragon_1p.png", "picture/braveDragon_2p.png");
var srcsKeyLight = new Array("picture/braveDragon_0p.png", "picture/braveDragon_1p_light.png", "picture/braveDragon_2p_light.png");
//var mySwiper.realIndex = 0;

var threshold = 23;
//videoタグを取得
var video = document.getElementById("video");
//取得するメディア情報を指定
var medias = { audio: false, video: {} };

var mySwiper = new Swiper('.swiper-container', {
    loop: false,
});

function finishAudioLoading() {

}


function JudgeAutorize(value) {
 
    
}

// ========================================
// 効果音を鳴らす（★今回のメインはこれ★）
// ========================================
function ring() {
    isAuthorizable = !isAuthorizable;
    SEstandbyStop();
    if (isAuthorizable==false) {
        playSECallKey(1)
    } else {
        AutorizeNum = 1;
        playSECallKey(0);
    }
}


function ringByCamera(callNum) {

}



function SEstandbyStop() {
    
  
    
}


//-----------------------------------------------------------

