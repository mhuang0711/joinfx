// Top Navigation Scroll Animation
var lastScrollPosition = 0;
window.onscroll = function () {
  var newScrollPosition = window.scrollY;
  if (newScrollPosition < lastScrollPosition || newScrollPosition == 0) {
    document.getElementById("myTopnav").style.height = "100px";
    document.getElementById("headerBox").style.height = "100px";
    document.getElementById("header-nav").style.top = "100px";
    document.querySelector("#headerBox > .header-logo").style.top = "0px";
    document.querySelector("#headerBox > .header-buttons").style.top = "0px";
  } else {
    document.getElementById("myTopnav").style.height = "0px";
    document.getElementById("headerBox").style.height = "0px";
    document.getElementById("header-nav").style.top = "0px";
    document.querySelector("#headerBox > .header-logo").style.top = "-35px";
    document.querySelector("#headerBox > .header-buttons").style.top = "-35px";

  }
  lastScrollPosition = newScrollPosition;
}


// For Scroll-Triggered Animations
var $window = $(window);

//First Page Two Buttons Animation
function first_page_animation() {
  var $real_account_btn = $("#realAccount");
  var $demo_account_btn = $("#demoAccount");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var real_account_btn_height = $real_account_btn.outerHeight();
  var real_account_btn_top_position = $real_account_btn.offset().top;
  if ((real_account_btn_top_position < window_bottom_position) && (real_account_btn_top_position >= window_top_position)) {
    $real_account_btn.removeClass("about-hamster-left-anim-out");
    $real_account_btn.addClass("about-hamster-left-anim-in");
    $demo_account_btn.removeClass("about-hamster-right-anim-out");
    $demo_account_btn.addClass("about-hamster-right-anim-in");

  } else {
    $real_account_btn.removeClass("about-hamster-left-anim-in");
    $real_account_btn.addClass("about-hamster-left-anim-out");
    $demo_account_btn.removeClass("about-hamster-right-anim-in");
    $demo_account_btn.addClass("about-hamster-right-anim-out");

  }
}


// second About Hamster Animation
function second_page_animation() {
  var $about_illustration_two = $("#about-illustration-2");
  var $about_illustration_one = $($("#secondPage").find(".about-illustration-box"));
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_illustration_two_height = $about_illustration_two.outerHeight();
  var about_illustration_two_top_position = $about_illustration_two.offset().top;

  if ((about_illustration_two_top_position < window_bottom_position) && (about_illustration_two_top_position >= window_top_position)) {

    $about_illustration_one.removeClass("about-illustration-box-anim-out");
    $about_illustration_one.addClass("about-illustration-box-anim-in");

  } else {

    $about_illustration_one.removeClass("about-illustration-box-anim-in");
    $about_illustration_one.addClass("about-illustration-box-anim-out");
  }
}

// Sixth Page Animation
function sixth_page_animation() {
  var $animate_container = $("#contact-us-animation");
  var $animate_impact_top = $($("#sixthPage").find(".top-border"));
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var animate_container_height = $animate_container.outerHeight();
  var animate_container_top_position = $animate_container.offset().top;

  if ((animate_container_top_position < window_bottom_position) && (animate_container_top_position >= window_top_position)) {

    $animate_impact_top.removeClass("contact-us-anim-out");
    $animate_impact_top.addClass("contact-us-anim-in");

  } else {

    $animate_impact_top.removeClass("contact-us-anim-in");
    $animate_impact_top.addClass("contact-us-anim-out");
  }
}

// Third Page Animation
function third_page_animation() {
  var $animate_container = $("#thirdPage").find(".entry-content");
  var $animate_impact_header = $($("#thirdPage").find(".entry-title"));
  var $animate_impact_p = $($("#thirdPage").find(".entry-content p"));
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var animate_container_height = $animate_container.outerHeight();
  var animate_container_top_position = $animate_container.offset().top;

  if ((animate_container_top_position < window_bottom_position) && (animate_container_top_position >= window_top_position)) {

    $animate_impact_header.removeClass("desc-anim-out");
    $animate_impact_header.addClass("desc-anim-in");
    $animate_impact_p.removeClass("desc-anim-out");
    $animate_impact_p.addClass("desc-anim-in");

  } else {
    $animate_impact_header.removeClass("desc-anim-in");
    $animate_impact_header.addClass("desc-anim-out");
    $animate_impact_p.removeClass("desc-anim-in");
    $animate_impact_p.addClass("desc-anim-out");
  }
}

// Second About Hamster Animation
function check_if_about_hamster_two_in_view() {
  var $about_hamster_two = $("#about-hamster-2");
  var $about_hamster_two_element = $about_hamster_two;
  var $about_illustration_two = $("#about-illustration-2");
  var $about_talkbubble_two = $("#about-talkbubble-2");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_hamster_two_element_height = $about_hamster_two_element.outerHeight();
  var about_hamster_two_element_top_position = $about_hamster_two_element.offset().top;

  if ((about_hamster_two_element_top_position < window_bottom_position) && (about_hamster_two_element_top_position >= window_top_position)) {
    $about_hamster_two_element.removeClass("about-hamster-right-anim-out");
    $about_hamster_two_element.addClass("about-hamster-right-anim-in");
    $about_illustration_two.removeClass("about-illustration-box-anim-out");
    $about_illustration_two.addClass("about-illustration-box-anim-in");

    setTimeout(function () {
      if ($about_hamster_two_element.hasClass("about-hamster-right-anim-in")) {
        $about_talkbubble_two.addClass("talkbubble-anim");
        //$about_hamster_mouth_two.addClass("six-second-talk-anim");
        //        $(".hamster-head").addClass("head-talk-anim");
      }
    }, 800);
  } else {
    $about_hamster_two_element.removeClass("about-hamster-right-anim-in");
    $about_hamster_two_element.addClass("about-hamster-right-anim-out");
    $about_talkbubble_two.removeClass("talkbubble-anim");
    //    $(".hamster-head").removeClass("head-talk-anim");
    // $about_hamster_mouth_two.removeClass("six-second-talk-anim");
    $about_illustration_two.removeClass("about-illustration-box-anim-in");
    $about_illustration_two.addClass("about-illustration-box-anim-out");
  }
}

// // Third About Hamster Animation
// function check_if_about_hamster_three_in_view() {
//   var $about_hamster_three = $("#about-hamster-3");
//   var $about_hamster_three_element = $about_hamster_three;
//   var $about_illustration_three = $("#about-illustration-3");
//   var $about_talkbubble_three = $("#about-talkbubble-3");
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
//   var about_hamster_three_element_height = $about_hamster_three_element.outerHeight();
//   var about_hamster_three_element_top_position = $about_hamster_three_element.offset().top;

//   if ((about_hamster_three_element_top_position < window_bottom_position) && (about_hamster_three_element_top_position >= window_top_position)) {
//     $about_hamster_three_element.removeClass("about-hamster-left-anim-out");
//     $about_hamster_three_element.addClass("about-hamster-left-anim-in");
//     $about_illustration_three.removeClass("about-illustration-box-anim-out");
//     $about_illustration_three.addClass("about-illustration-box-anim-in");

//     setTimeout(function () {
//       if ($about_hamster_three_element.hasClass("about-hamster-left-anim-in")) {
//         $about_talkbubble_three.addClass("talkbubble-anim");
//         //$about_hamster_mouth_three.addClass("six-second-talk-anim");
//         //$(".hamster-head").addClass("head-talk-anim");
//       }
//     }, 800);
//   } else {
//     $about_hamster_three_element.removeClass("about-hamster-left-anim-in");
//     $about_hamster_three_element.addClass("about-hamster-left-anim-out");
//     $about_talkbubble_three.removeClass("talkbubble-anim");
//     //$(".hamster-head").removeClass("head-talk-anim");
//     //$about_hamster_mouth_three.removeClass("six-second-talk-anim");
//     $about_illustration_three.removeClass("about-illustration-box-anim-in");
//     $about_illustration_three.addClass("about-illustration-box-anim-out");
//   }
// }

// Third About Hamster Animation
function check_if_about_hamster_four_in_view() {
  var $about_hamster_three = $("#about-hamster-4");
  var $about_hamster_three_element = $about_hamster_three;
  var $about_illustration_three = $("#about-illustration-4");
  var $about_talkbubble_three = $("#about-talkbubble-4");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_hamster_three_element_height = $about_hamster_three_element.outerHeight();
  var about_hamster_three_element_top_position = $about_hamster_three_element.offset().top;

  if ((about_hamster_three_element_top_position < window_bottom_position) && (about_hamster_three_element_top_position >= window_top_position)) {
    $about_hamster_three_element.removeClass("about-hamster-left-anim-out");
    $about_hamster_three_element.addClass("about-hamster-left-anim-in");
    $about_illustration_three.removeClass("about-illustration-box-anim-out");
    $about_illustration_three.addClass("about-illustration-box-anim-in");

    setTimeout(function () {
      if ($about_hamster_three_element.hasClass("about-hamster-left-anim-in")) {
        $about_talkbubble_three.addClass("talkbubble-anim");
        //$about_hamster_mouth_three.addClass("six-second-talk-anim");
        //$(".hamster-head").addClass("head-talk-anim");
      }
    }, 800);
  } else {
    $about_hamster_three_element.removeClass("about-hamster-left-anim-in");
    $about_hamster_three_element.addClass("about-hamster-left-anim-out");
    $about_talkbubble_three.removeClass("talkbubble-anim");
    //$(".hamster-head").removeClass("head-talk-anim");
    //$about_hamster_mouth_three.removeClass("six-second-talk-anim");
    $about_illustration_three.removeClass("about-illustration-box-anim-in");
    $about_illustration_three.addClass("about-illustration-box-anim-out");
  }
}

// Third About Hamster Animation
// function check_if_about_hamster_five_in_view() {
//   var $about_hamster_three = $("#about-hamster-5");
//   var $about_hamster_three_element = $about_hamster_three;
//   var $about_illustration_three = $("#about-illustration-5");
//   var $about_talkbubble_three = $("#about-talkbubble-5");
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
//   var about_hamster_three_element_height = $about_hamster_three_element.outerHeight();
//   var about_hamster_three_element_top_position = $about_hamster_three_element.offset().top;

//   if ((about_hamster_three_element_top_position < window_bottom_position) && (about_hamster_three_element_top_position >= window_top_position)) {
//     $about_hamster_three_element.removeClass("about-hamster-left-anim-out");
//     $about_hamster_three_element.addClass("about-hamster-left-anim-in");
//     $about_illustration_three.removeClass("about-illustration-box-anim-out");
//     $about_illustration_three.addClass("about-illustration-box-anim-in");

//     setTimeout(function () {
//       if ($about_hamster_three_element.hasClass("about-hamster-left-anim-in")) {
//         $about_talkbubble_three.addClass("talkbubble-anim");
//         //$about_hamster_mouth_three.addClass("six-second-talk-anim");
//         //$(".hamster-head").addClass("head-talk-anim");
//       }
//     }, 800);
//   } else {
//     $about_hamster_three_element.removeClass("about-hamster-left-anim-in");
//     $about_hamster_three_element.addClass("about-hamster-left-anim-out");
//     $about_talkbubble_three.removeClass("talkbubble-anim");
//     //$(".hamster-head").removeClass("head-talk-anim");
//     //$about_hamster_mouth_three.removeClass("six-second-talk-anim");
//     $about_illustration_three.removeClass("about-illustration-box-anim-in");
//     $about_illustration_three.addClass("about-illustration-box-anim-out");
//   }
// }



//$window.on("scroll resize", first_page_animation);
$window.on("scroll resize", second_page_animation);
$window.on("scroll resize", check_if_about_hamster_two_in_view);
$window.on("scroll resize", third_page_animation);
$window.on("scroll resize", check_if_about_hamster_four_in_view);
//$window.on("scroll resize", check_if_about_hamster_five_in_view);
$window.on("scroll resize", sixth_page_animation);
// $window.on("scroll resize", check_if_chart_in_view);
$window.trigger("scroll");


$("#indicators li:first-child").addClass("active");

function slide(target) {

  var current = target - 1;
  var next = target;
  if (next != 3) {
    $("#indicators li").removeClass("active").eq(target).addClass("active");
    $('#slide-' + current).removeClass('slide-opened').addClass('slide-childopened');
    // goto
    $('#slide-' + next).removeClass('slide-closed').addClass('slide-opened');
  }
  if (next == 3) {
    $("#indicators li").removeClass("active").eq(0).addClass("active");
    $('#slide-0').removeClass('slide-childopened').addClass("slide-opened");
    $('#slide-1').removeClass('slide-childopened').addClass('slide-closed');
    $('#slide-2').removeClass('slide-opened').addClass('slide-closed');
  }
}
$("#next").click(function () {
  var target = $("#indicators li.active").index();

  target = target + 1;

  slide(target);

  //Stopped auto slide when user clicked
  clearInterval(timer);
  //Then started auto slide again
  timer = setInterval(function () {
    $('#next').trigger('click');
  }, 2500);

});
var timer = setInterval(function () {
  $('#next').trigger('click');
}, 2500);
$("#indicators li").click(function () {
  var target = $(this).index();
  slide(target);

  //Stopped auto slide when user clicked
  clearInterval(timer);
  //Then started auto slide again
  timer = setInterval(function() {
    $('#next').trigger('click');
  }, 2500);

});
