$(function () {

  const box = $(".boxesSlide .box");
  const heading = $(".box .heading");
  const contents = $(".box .contents");

  box.click(function(){
		$(heading).not(this).next(contents).slideUp();
    $(this).find(contents).stop(true).slideToggle();
  });

  $(function(){
    var pagetop = $('#pageTop');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
          } else {
            pagetop.fadeOut();
          }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

});