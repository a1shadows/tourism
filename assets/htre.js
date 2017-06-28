$(document).ready(function(){
  $('.abc').bind('focus', function(){
            $('.backgroundimg').css({
                  '-moz-filter': ' grayscale(100%)',
                  '-webkit-filter': ' grayscale(100%)',
                  '-ms-filter': ' grayscale(100%)',
                  '-o-filter': ' grayscale(100%)',
                  'filter': ' grayscale(100%)',
                  '-webkit-transition': '0.5s -webkit-filter linear',
                  '-moz-transition': '0.5s -moz-filter linear',
                  '-moz-transition': '0.5s filter linear',
                  '-ms-transition': '0.5s -ms-filter linear',
                  '-o-transition': '0.5s -o-filter linear',
                  'transition': '0.5s filter linear'
  });
});

$('.abc').bind('blur', function(){
  $('.backgroundimg').css({'-webkit-filter': 'blur(0px)',
                '-moz-filter': 'blur(0px)',
                '-ms-filter': 'blur(0px)',
                '-o-filter': 'blur(0px)',
                'filter': 'blur(0px)',
});
});

});
