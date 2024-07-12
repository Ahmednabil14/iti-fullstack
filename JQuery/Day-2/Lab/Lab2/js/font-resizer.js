$(document).ready(function () {
  $('#increase').click(function (e) {
    const pSize = Number(($('.content').css('fontSize')).slice(0, -2));
    if (pSize > 40) {
      $('.error').text('you achieved to maximum value');
    } else {
      $('.content').animate({
        fontSize: '+=5px'
      });
      $('.error').text('');
    }
  });
  $('#decrease').click(function (e) {
    const pSize = Number(($('.content').css('fontSize')).slice(0, -2));

    if (pSize <= 6) {
      $('.error').text('you achieved to minimum value');
    } else {
      $('.content').animate({
        fontSize: '-=5px'
      });
      $('.error').text('');
    }
  });
});
