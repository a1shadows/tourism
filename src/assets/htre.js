$(document).ready(function(){
  $('.mnd').show();
  $('.abc').bind('focus', function(){
            $('.backgroundimg').css({
                  '-moz-filter': ' grayscale(70%)',
                  '-webkit-filter': ' grayscale(70%)',
                  '-ms-filter': ' grayscale(70%)',
                  '-o-filter': ' grayscale(70%)',
                  'filter': ' grayscale(70%)',
                  '-webkit-transition': '0.3s -webkit-filter linear',
                  '-moz-transition': '0.3s -moz-filter linear',
                  '-moz-transition': '0.3s filter linear',
                  '-ms-transition': '0.3s -ms-filter linear',
                  '-o-transition': '0.3s -o-filter linear',
                  'transition': '0.3s filter linear'
  });
});

$('.abc').bind('blur', function(){
  $('.backgroundimg').css({'-webkit-filter': 'grayscale(0%)',
                '-moz-filter': 'grayscale(50%)',
                '-ms-filter': 'grayscale(50%)',
                '-o-filter': 'grayscale(50%)',
                'filter': 'grayscale(50%)',
});
});

});

function openModal() {
    $("#myModal").show();
  };


  function closeModal(){
  $("#myModal").hide();
};

$(document).ready(function(){
    $(".abc").focus(function(){
        $(".panel").slideDown(300);
        $(".arrow-up").slideDown(300);
        $(".abc").attr("placeholder"," Enter hotel or present location.");
    });

    $(".abc").blur(function(){
        $(".panel").slideUp("slow");
        $(".abc").attr("placeholder","Click for more information.");
    });
});
