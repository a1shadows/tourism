$(document).ready(function(){
  $('.abc').bind('focus', function(){
    $('.back').css({'-webkit-filter': 'blur(5px) grayscale(100%)',
                  '-moz-filter': 'blur(5px) grayscale(100%)',
                  '-ms-filter': 'blur(5px) grayscale(100%)',
                  '-o-filter': 'blur(5px) grayscale(100%)',
                  'filter': 'blur(5px) grayscale(100%)',
                  '-webkit-transition': '0.5s -webkit-filter linear',
                  '-moz-transition': '0.5s -moz-filter linear',
                  '-moz-transition': '0.5s filter linear',
                  '-ms-transition': '0.5s -ms-filter linear',
                  '-o-transition': '0.5s -o-filter linear',
                  'transition': '0.5s filter linear'
  });
});

$('.abc').bind('blur', function(){
  $('.back').css({'-webkit-filter': 'blur(0px)',
                '-moz-filter': 'blur(0px)',
                '-ms-filter': 'blur(0px)',
                '-o-filter': 'blur(0px)',
                'filter': 'blur(0px)',
});
});

});
