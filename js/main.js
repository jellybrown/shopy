$(function () {
    const $searchBtn = $('.shopping_nav .search_btn');
    const $form = $('header form');

    // 검색버튼 활성화
    $searchBtn.click(function (e) {
        e.preventDefault();
        $form.toggleClass('active');
    })

    // bx_slide 옵션
    $('.bx_slide').bxSlider({
        controls: false,
        mode: 'vertical',
        auto: true,
        pause: 2500,
    })



})