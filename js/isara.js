$(function () {

  const box = $(".boxesSlide .box");
  const heading = $(".box .heading");
  const contents = $(".box .contents");

  box.click(function(){
		$(heading).not(this).next(contents).slideUp();
    $(this).find(contents).stop(true).slideToggle();
  });

});