var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;




// n번째 이미지를 화면에 출력하는 함수
function showSlides(n){
    for(var i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

// 이전 버튼
function prevSlide() {
    if(current > 0) current -= 1;
    //  0보다 크면 잊언 위치로
    else current = slides.length -1;
    //  그롷지 않다면 (첫번째 이미지임으로 마지막 위치로)
        showSlides(current);
        // 이동한 이미지 표시
}

function nextSlide() {
    if(current < slides.length -1) current +=1;
    // current 값이 2보다 작으면 다음 위치로
    else current =0;
    // 그렇지 않다면 (마지막 이미지임으로 첫번째 위치로)
        showSlides(current);
        //이동한 이미지 표시
}


// // 이미지 슬라이드 쇼를 자동으로 바꾸는 방법

//    var current = 0;
//    showSlides();  

// function showSlides(){
//     var slides = document.querySelectorAll("#slides > img");
//     for(let i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     current++;
//     if(current > slides.length)
//         current = 1;
//     slides[current - 1].style.display = "block";
//     setTimeout(showSlides, 2000);
// }