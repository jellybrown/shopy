$(function () {
    //상품상세 이미지 변경
    const $pictures = $('.product_pictures');
    const $bigImg = $pictures.find('.big_img');
    const $thumImg = $pictures.find('.thum_img li');

    $thumImg.click(function () {
        $thumImg.removeClass('active');
        $(this).addClass('active');
        const src = $(this).find('img').attr('date-target');
        $bigImg.attr('src', src);
    })

    //상품 수량, 가격 변경
    const $quantity = $('.quantity');
    const $unitPrice = $quantity.attr('data-unitprice')
    const $qttBtn = $quantity.find('div');
    const $price = $('.price');

    $qttBtn.click(function () {
        let $totalQtt = $quantity.find('input').val();
        if ($(this).hasClass('plus')) {
            $quantity.find('input').val(++$totalQtt);
        } else {
            if ($totalQtt > 1) {
                $quantity.find('input').val(--$totalQtt);
            }
        }
        const $totalprice = ($unitPrice * $totalQtt).toLocaleString('en');

        $price.text($totalprice + '$');


    })




})