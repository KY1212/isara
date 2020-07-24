$(function () {

  const box = $(".boxesSlide .box");
  const heading = $(".box .heading");
  const contents = $(".box .contents");
  const icon = $(".boxesSlide .fas");
  let rotateIcon = 180;


  box.click(function(){

		$(heading).not(this).next(contents).slideUp();
    $(this).find(contents).stop(true).slideToggle();

    $(this).find(icon).css("transform",`rotate(${rotateIcon}deg)`),
    $(this).find(icon).css("transition","transform 0.6s");

    console.log("終"+rotateIcon);

    if(rotateIcon==0){
      rotateIcon= rotateIcon+180;
      console.log("0 "+rotateIcon);
    }else if(rotateIcon>=180){
      rotateIcon=0;
      console.log("180 "+rotateIcon);
    }
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