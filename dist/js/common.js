window.onload = function(){
    var burger = document.getElementById('burger');
    
    burger.addEventListener('click', function(event){
        var menu = document.getElementById('last__col');
        var classes = menu.classList.value;

        var opened = classes.indexOf('last__col--mobile');

        if(opened == -1){
            menu.classList.add('last__col--mobile');
        } else {
            menu.classList.remove('last__col--mobile');
        }
    }, true);

    burger.addEventListener('mouseenter', function(event){
        burger.classList.add('burger--hover');
    }, true);

    burger.addEventListener('mouseleave', function(event){
        burger.classList.remove('burger--hover');
    }, true);

    var links = document.querySelectorAll('.menu__line a');

    links.forEach(function(element, indx){
        element.addEventListener('mouseenter', function(event){
            element.classList.add('link--hover');
        }, true);
        element.addEventListener('mouseleave', function(event){
            element.classList.remove('link--hover');
        }, true);
    })
}

$(document).ready(function(){
    

    $('.menu__line__2 a').click(function(){
        var flag = $(this).css('opacity'); 
        
        if (flag == 1) {
            $(this).css({
                'background-color': '#ffee91',
                'opacity': 0.5
            });
        } else {
            $(this).css({
                'background-color': '',
                'opacity': 1
            });
        }
    })

})
// $(document).ready(function(){
    
//     var $menu = $('#last__col');
    
//     $('#burger').click(function(){
//         $('#last__col').hasClass('last__col--mobile') ? $('#last__col').removeClass('last__col--mobile') : $('#last__col').addClass('last__col--mobile');
//     })

// })

// $(document).ready(function(){
//     $('#burger').hover(function(){
//         $(this).toggleClass('burger--hover')
//     })
// })

var links2 = document.querySelectorAll('.menu__line__2 a');

    links2.forEach(function(element, indx){
        element.addEventListener('mouseenter', function(event){
            toggleAnimation(indx,links2,true);
        }, true);
        element.addEventListener('mouseleave', function(event){
            toggleAnimation(indx,links2,false);
        }, true);
    })

    function toggleAnimation(indx,links2,type){
        if(indx){
            for (var i=0; i<=indx; i++){
                type ? links2[i].classList.add('menu-animation') : links2[i].classList.remove('menu-animation');
            } 
        } else {
            type ? links2[i].classList.add('menu-animation') : links2[i].classList.remove('menu-animation');
        }
    }


var servicelinks = document.querySelectorAll('.services__item');

    servicelinks.forEach(function(element,index){
        element.addEventListener('mouseenter', function(event){
            element.classList.add('service-animation');
        },true);
        element.addEventListener('mouseleave', function(event){
            element.classList.remove('service-animation');
        },true);
    })

    // $(document).ready(function(){
    //     $('menu__line__2 li').mouseenter(function(){
    //         var listItems = $(this).prevAll();
    //         $(this).find('a').addClass('menu-animation');
    //         $(listItems).find('a').addClass('menu-animation');
    //     })
    // })

    // $('.menu__line__2 li').mouseenter(function(){ 
    //     $(this).addClass('menu_animation');
    //     $(this).prevAll().addClass('menu_animation');
    // })

// var header = document.getElementById('fix');

// window.onscroll = function(){
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     document.getElementById('showScroll').innerHTML = scrolled + 'px';
//     header.addEventListener('mousewheel', function(event){
//         console.log(scrolled);
//         header.classList.add('fixed-top');
//     })
// }

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if(scroll>300){

//             var headerHeight = $('header').height();
//             $('body').css('padding-top', headerHeight);

//             $('header').addClass('fixed-top');
//         } else {
//             $('body').css('padding-top', 0);
//             $('header').removeClass('fixed-top');
//         }
//     })
// })

