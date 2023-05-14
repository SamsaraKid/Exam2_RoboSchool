// $(document).ready($('.textField').val(''))
let forma = document.getElementById('form')
let menuIsOpen = false

forma.onsubmit = getData


// Изменение стиля плавающего меню в зависимости от прокрутки
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
consoleStyle()

// Показать-скрыть меню
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

// Показать скрыть длинное описание
function showHideLongDesc(){

    if ($('#longDesc').prop('hidden')){
        $('#longDesc').attr("hidden", false)
    } else {
        $('#longDesc').attr("hidden", true)
    }

}



// Забираем данные формы
function getData(){
    let string = ''
    let elems = forma.elements
    for (e in elems) {
        if (elems[e].type == 'checkbox' && elems[e].checked) {
            string += elems[e].name
            string += ': Согласие получено' + '\n'
        }
        if (elems[e].type == 'radio' && elems[e].checked) {
            string += elems[e].name
            string += ': ' + elems[e].value + '\n'
        }


        if (e == forma.elements.length-1) {break}
        if (elems[e].name == '') {continue}
        if (elems[e].value == undefined) {continue}

        if (elems[e].type != 'checkbox' && elems[e].type != 'radio') {
            string += elems[e].name
            string += ': ' + elems[e].value + '\n'
        }
    }
    console.log(string)
    saveToPC(string)
    return false

}

function saveToPC(str){
    let blob = new Blob([str], {type: "text/plain"});
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "Client_Data.txt");
    link.click();
}



$(window).scroll(consoleStyle)
$(window).resize(consoleStyle)

$('#menuBut').click(showHideMenu)
$('#moreBut').click(showHideLongDesc)




