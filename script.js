$(document).ready(function(){
   var flipCard = 0
    
    $("sl-tab").on("click", function (){
        console.log("click")
        $('html,body').scrollTop(0);
        var panel = $(this).attr("panel")
        $("section").each(function(){
            var section = $(this).attr("id")
            if(section === panel){
                console.log()
                $(`#${section}`).removeClass("hidden").siblings().addClass("hidden")
            }
        })
    })

    $(".animation-sandbox").on("click", function (){
        var animationDiv = $("<sl-animation class='flipCard' iterations='1' name='flip-2-ver-left-1' duration='500'>")
        var content = $(".biz-card")
        if(flipCard===0){
            $(".flipCard").remove()
            animationDiv.append(content);
            setTimeout(function(){content.children().removeClass("cardback") },350);
            $(".animation-sandbox").append(animationDiv)
            flipCard ++
        }else if (flipCard===1){
            $(".flipCard").remove()
            animationDiv.append(content);
            setTimeout(function(){content.children().addClass("cardback") },350);
            $(".animation-sandbox").append(animationDiv)
            flipCard --

        }
        $(".real-contact").removeClass("hidden")
        console.log($(this));
        
        
    })
    $(".date-since").each(function(){
        $(this).text((moment($(this).text(), "YYYYMMDD").fromNow()));
    })

    
        // navBar();
})
// function navBar () {
//     console.log("hey")
//     var menu = document.getElementById('menu'),
//         rollback,
//         WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

//     function toggleHorizontal() {
//         menu.classList.remove('closing');
//         [].forEach.call(
//             document.getElementById('menu').querySelectorAll('.custom-can-transform'),
//             function(el){
//                 el.classList.toggle('pure-menu-horizontal');
//             }
//         );
//     };

//     function toggleMenu() {
//         // set timeout so that the panel has a chance to roll up
//         // before the menu switches states
//         if (menu.classList.contains('open')) {
//             menu.classList.add('closing');
//             rollBack = setTimeout(toggleHorizontal, 500);
//         }
//         else {
//             if (menu.classList.contains('closing')) {
//                 clearTimeout(rollBack);
//             } else {
//                 toggleHorizontal();
//             }
//         }
//         menu.classList.toggle('open');
//         document.getElementById('toggle').classList.toggle('x');
//     };

//     function closeMenu() {
//         if (menu.classList.contains('open')) {
//             toggleMenu();
//         }
//     }

//     document.getElementById('toggle').addEventListener('click', function (e) {
//         toggleMenu();
//         e.preventDefault();
//     });

//     window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
//     }