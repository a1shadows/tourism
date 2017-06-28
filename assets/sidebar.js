function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('.glyph').delay('slow').hide();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.glyph').delay(500).fadeIn()
}
