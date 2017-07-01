$(document).ready(function(){
  $('.mnd').show();

  $('.abc').bind('focus', function(){
            $('.backgroundimg').css({
                  '-moz-filter': ' grayscale(70%) blur(4px)',
                  '-webkit-filter': ' grayscale(70%) blur(4px)',
                  '-ms-filter': ' grayscale(70%) blur(4px)',
                  '-o-filter': ' grayscale(70%) blur(4px)',
                  'filter': ' grayscale(70%) blur(4px)',
                  '-webkit-transition': '0.2s -webkit-filter linear',
                  '-moz-transition': '0.2s -moz-filter linear',
                  '-moz-transition': '0.2s filter linear',
                  '-ms-transition': '0.2s -ms-filter linear',
                  '-o-transition': '0.2s -o-filter linear',
                  'transition': '0.2s filter linear'
  });
});

$('.abc').bind('blur', function(){
  $('.backgroundimg').css({'-webkit-filter': 'grayscale(20%)',
                '-moz-filter': 'grayscale(20%)',
                '-ms-filter': 'grayscale(20%)',
                '-o-filter': 'grayscale(20%)',
                'filter': 'grayscale(20%)',
                '-webkit-transition': '0.2s -webkit-filter linear',
                '-moz-transition': '0.2s -moz-filter linear',
                '-moz-transition': '0.2s filter linear',
                '-ms-transition': '0.2s -ms-filter linear',
                '-o-transition': '0.2s -o-filter linear',
                'transition': '0.2s filter linear'
});
});

    $(".abc").focus(function(){
      setTimeout(function(){
        $(".panel").fadeIn(300);
        $(".abc").attr("placeholder"," Enter hotel or present location.");
      }, 300);
    });

    $(".abc").blur(function(){
      setTimeout(function(){
        $(".panel").fadeOut(300);
        $(".abc").attr("placeholder","Click for more information.");
      }, 300);
    });
});
