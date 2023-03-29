
$(document).ready(function () {
// 폴다운 메뉴이벤트
$('.outer-menu').hover(function () {
$(this).find('.inner-menu').css('display', 'block');
}, function () {
$(this).find('.inner-menu').css('display', 'none');

});

//masonry layout + imageload plugin
$('#main-section').imagesLoaded(function () {
$('#main-section').masonry({
    itemSelector: '.paper',
    columnWidth: 220,
    isAnimated: true,
});
});

// 라이트 박스 동작
function showLightBox(obj) { //라이트 박스 보이기
var img_src = obj.getElementsByTagName('img')[0].src; // 선택한 이미지 가져오기
$('#random-image').attr('src', img_src);

$('#darken_background').show();
$('#darken_background').css('top', $(window).scrollTop());
$('body').css('overflow', 'hidden');
};
function hideLightBox() { //라이트 박스 숨기기
$('#darken_background').hide();
$('body').css('overflow', '');
};
$('.paper').click(function () {
showLightBox(this);
});
$('#darken_background').click(function () {
hideLightBox();
});
$('#lightbox').click(function (e) {
e.stopPropagation(); // 하위객체에 전달금지
});
});
