$(document).ready(function(){

//DropDown 
$(".dropdown-heading").click(function(){
var n = $(".has-sub").find("span:hover + ul li").length;
var dropdown = 37*n;
var _todrop = $(".has-sub").find("span:hover + ul");
var nodrop = $(".has-sub ul");
$(this).toggleClass("down");
$(_todrop).animate({"height" : dropdown}, 100);
if ($(_todrop).height() == dropdown){
  $(_todrop).animate({"height" : 0}, 100);
}
 if ($(nodrop).height(dropdown)){
$(nodrop).not(_todrop).height(0);
$(".dropdown-heading").not(this).removeClass("down");}
});

// SHOW/HIDE NAV
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight && !$(".codehim-nav").hasClass("show-menu")){
$('header').removeClass('show-nav').addClass('hide-nav');
$(".openswipe").css({'display' : 'none'});

    } else {
        if(st + $(window).height() < $(document).height()) {
$('header').removeClass('hide-nav').addClass('show-nav');
$(".openswipe").css({'display' : 'block'});
        }
    }

    lastScrollTop = st;
}

$(".search-text").on('keydown', function(){
      if ($(this).val() == ""){
    $(".search-now").attr('disabled', true);}
    else{
   $(".search-now").attr('disabled', false);}
});

$(".codehim-search-trigger").click(function(){
   $(".codehim-search").addClass("show-search"); 
$(".search-text").focus();
$(".back-arrow").addClass("show-back-arrow");
$(".dim-overlay").fadeIn();
$(".logo").fadeOut();
$(this).addClass("splash");
});

$(".back-arrow").click(function(){
   $(".codehim-search").addClass("fadeOutLeft").removeClass("show-search");
$(this).removeClass("show-back-arrow");
$('.myprofile-icons').removeClass('hide').addClass('show');
$(".codehim-search-trigger").removeClass("splash");

if ($(".nav-icon").hasClass("open")){
    // do not remove overlayer 
} else { $(".dim-overlay").fadeOut(); }
$(".logo").fadeIn(1000);
});

$(".nav-icon").click(function(){

$(this).toggleClass("open");
$(".codehim-nav").toggleClass("show-menu");

$(".tab-container").toggleClass("showme");

$(".dim-overlay").fadeIn();

if ($(".nav-icon").hasClass("open")){
//nothing to do
} else { $(".dim-overlay").fadeOut();}


if ($(".openswipe").hasClass("closeswipe")){
$("#swipezone").removeClass("closeswipe");} 
else { $("#swipezone").addClass("closeswipe");} 

});



var el = document.getElementById('swipezone');
swipedetect(el, function(swipedir){
    
if (swipedir == "right"){
closeMenu();  }
if (swipedir == "left"){
openMenu();
    }



});

function closeMenu(){
 $(".nav-icon").removeClass("open");

$(".codehim-nav").removeClass("show-menu");
$(".dim-overlay").fadeOut();
$("#swipezone").removeClass("closeswipe");

}
function openMenu(){
$(".nav-icon").addClass("open");

$(".codehim-nav").addClass("show-menu");
$(".dim-overlay").fadeIn();
$("#swipezone").addClass("closeswipe");
}

$(".updates").click(function(){
$(".popup-subscribe").addClass("show-popup");
$(".mail-text").focus();
$("body").addClass("jam");
});
$(".close-popup").click(function(){
$(".popup-subscribe").removeClass("show-popup");
$("body").removeClass("jam");
});


$(".help").click(function(){
$(".popup-feedback").addClass("show-popup");
$("body").addClass("jam");
});
$(".close-popup").click(function(){
$(".popup-feedback").removeClass("show-popup");
$("body").removeClass("jam");

});


var tab = [ 
  $('.tab-name').eq(0),
  $('.tab-name').eq(1),
  $('.tab').eq(0),
  $('.tab').eq(1),
  "tab-name1-active",
  "tab-active SlideLeft",
  "tab-active SlideRight",
   "tab-name2-active"
  ];

 $(tab[0]).click(function(){
  $(this).addClass(tab[4]); 
$(tab[3]).removeClass(tab[6]);
$(tab[2]).addClass(tab[5]);
 if ($(tab[1]).hasClass(tab[7]))
{$(tab[1]).removeClass(tab[7]);}
});

$(tab[1]).click(function(){
  $(this).addClass(tab[7]); 
$(tab[2]).removeClass(tab[5]);
$(tab[3]).addClass(tab[6]);
 if ($(tab[0]).hasClass(tab[4]))
{$(tab[0]).removeClass(tab[4]);}
});

$(tab[2]).mouseenter(function(){
$(tab[0]).addClass("tab-name1-active");
$(tab[1]).removeClass("tab-name2-active");
});
$(tab[3]).mouseenter(function(){
$(tab[1]).addClass("tab-name2-active");
$(tab[0]).removeClass("tab-name1-active");
});

$(".dim-overlay").hide();


});
function swipedetect(el, callback){
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 1000, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
