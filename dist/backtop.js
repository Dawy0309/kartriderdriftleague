//回到頁首
$(function () {
    var $win = $(window);
    var $backToTop = $('.js-back-to-top');
    
    // 當用戶滾動到離頂部超過300像素時，展示回到頁首按鈕
    $win.scroll(function () {
        if ($win.scrollTop() > 200) {
            $backToTop.show();
        } else {
            $backToTop.hide();
        }
    });

    // 當用戶點擊按鈕時，通過動畫效果返回頭部
    $backToTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
});