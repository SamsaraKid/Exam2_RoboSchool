let menuIsOpen = false



function consoleStyle(){
    if ($(window).scrollTop() == 0 && $('header').css('position') == 'fixed'){
        $('#console').css('background', 'none')
        $('#logo').attr('src', 'img/logo_robots.png')
        $('#wideMenu a').css('color', 'white')
    } else {
        $('#console').css('background', 'white')
        $('#logo').attr('src', 'img/logo_robots_c.png')
        $('#wideMenu a').css('color', 'black')
    }
}

function showHideMenu(){

    if (!menuIsOpen) {
        $('#narrowMenuWrap').removeClass('menuUpAnim')
        $('#narrowMenuWrap').addClass('menuDownAnim')
        $('#narrowMenuWrap').css('height', '310px')
        menuIsOpen = true
    }   else {
        $('#narrowMenuWrap').removeClass('menuDownAnim')
        $('#narrowMenuWrap').addClass('menuUpAnim')
        $('#narrowMenuWrap').css('height', '0px')
        menuIsOpen = false
    }
    setTimeout(function () {
        $('#narrowMenuWrap').removeClass('menuUpAnim')
        $('#narrowMenuWrap').removeClass('menuDownAnim')
        }, 300)
}


consoleStyle()

$(window).scroll(consoleStyle)
$(window).resize(consoleStyle)

$('#menuBut').click(showHideMenu)