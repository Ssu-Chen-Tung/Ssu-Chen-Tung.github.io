$(document).ready(function() {
  // 滑動視窗後，主選單的位置固定
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      /* 要滑動到選單的距離 */
      $(".main_menu").addClass("navFixed"); /* 幫選單加上固定效果 */
    } else {
      $(".main_menu").removeClass("navFixed"); /* 移除選單固定效果 */
    }
  });
  // top置頂按鈕
    $('.fixed .top').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    });

    

});
