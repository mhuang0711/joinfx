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
    document.getElementById("header-nav").style.top = "-65px";
    document.querySelector("#headerBox > .header-logo").style.top = "-35px";
    document.querySelector("#headerBox > .header-buttons").style.top = "-35px";

  }
  lastScrollPosition = newScrollPosition;
}


// For Scroll-Triggered Animations
var $window = $(window);


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
// Fourth Page Animation
function fourth_page_animation() {
  var $animate_container = $("#fourthPage").find(".fourthPage-middle");
  var $animate_impact = $($("#fourthPage").find(".thumbnail"));
  var $animate_impact_download = $($("#fourthPage").find(".download-container"));
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var animate_container_height = $animate_container.outerHeight();
  var animate_container_top_position = $animate_container.offset().top;

  if ((animate_container_top_position < window_bottom_position) && (animate_container_top_position >= window_top_position)) {

    $animate_impact.removeClass("fourthPage-animation-out");
    $animate_impact.addClass("fourthPage-animation-in");
    $animate_impact_download.removeClass("fourthPage-dl-animation-out");
    $animate_impact_download.addClass("fourthPage-dl-animation-in");

  } else {
    $animate_impact.removeClass("fourthPage-animation-in");
    $animate_impact.addClass("fourthPage-animation-out");
    $animate_impact_download.removeClass("fourthPage-dl-animation-in");
    $animate_impact_download.addClass("fourthPage-dl-animation-out");
  }
}
// Fifth Page Animation
function fifth_page_animation() {
  var $animate_container = $("#fifthPage-middle-line");
  var $animate_impact_half_right = $($("#fifthPage").find(".view-range__range__bg").find(".page-border-top-right"));
  var $animate_impact_half_left = $($("#fifthPage").find(".view-range__range__bg").find(".page-border-top-left"));
  var $animate_impact_full_right = $($("#fifthPage").find(".view-range__range__bg").find(".page-border-right"));
  var $animate_impact_full_left = $($("#fifthPage").find(".view-range__range__bg").find(".page-border-left"));
  var $animate_impact_bottom_right = $($("#fifthPage").find(".view-range__range__bg").find(".page-border-bottom-right"));
  var $animate_impact_bottom_left = $($("#fifthPage").find(".view-range__range__bg").find(".page-border-bottom-left"));
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var animate_container_height = $animate_container.outerHeight();
  var animate_container_top_position = $animate_container.offset().top;

  if ((animate_container_top_position < window_bottom_position) && (animate_container_top_position >= window_top_position)) {

    $animate_impact_half_right.removeClass("fifthPage-half-animation-out");
    $animate_impact_half_right.addClass("fifthPage-half-animation-in");
    $animate_impact_full_right.removeClass("fifthPage-half-animation-out");
    $animate_impact_full_right.addClass("fifthPage-full-animation-in");
    $animate_impact_half_left.removeClass("fifthPage-half-animation-out");
    $animate_impact_half_left.addClass("fifthPage-half-animation-in");
    $animate_impact_full_left.removeClass("fifthPage-half-animation-out");
    $animate_impact_full_left.addClass("fifthPage-full-animation-in");
    $animate_impact_bottom_right.removeClass("fifthPage-half-animation-out");
    $animate_impact_bottom_right.addClass("fifthPage-half-animation-in");
    $animate_impact_bottom_left.removeClass("fifthPage-half-animation-out");
    $animate_impact_bottom_left.addClass("fifthPage-half-animation-in");

  } else {
    $animate_impact_half_right.removeClass("fifthPage-half-animation-in");
    $animate_impact_half_right.addClass("fifthPage-half-animation-out");
    $animate_impact_full_right.removeClass("fifthPage-full-animation-in");
    $animate_impact_full_right.addClass("fifthPage-half-animation-out");
    $animate_impact_half_left.removeClass("fifthPage-half-animation-in");
    $animate_impact_half_left.addClass("fifthPage-half-animation-out");
    $animate_impact_full_left.removeClass("fifthPage-full-animation-in");
    $animate_impact_full_left.addClass("fifthPage-half-animation-out");
    $animate_impact_bottom_right.removeClass("fifthPage-half-animation-in");
    $animate_impact_bottom_right.addClass("fifthPage-half-animation-out");
    $animate_impact_bottom_left.removeClass("fifthPage-half-animation-in");
    $animate_impact_bottom_left.addClass("fifthPage-half-animation-out");
  }
}



$window.on("scroll resize", second_page_animation);
$window.on("scroll resize", third_page_animation);
$window.on("scroll resize", fourth_page_animation);
$window.on("scroll resize", fifth_page_animation);
// $window.on("scroll resize", sixth_page_animation);
$window.trigger("scroll");


/*
 * Firsrt Page slide
 */
$("#indicators li:first-child").addClass("active");

var timer = setInterval(function () {
  $('#next').trigger('click');
}, 5000);

$("#next").click(function () {
  var target = $("#indicators li.active").index();
  var current = target;
  var next = target + 1;

  if (next != 4) {
    $("#indicators li").removeClass("active").eq(next).addClass("active");
    $('#slide-' + current).removeClass('slide-opened').addClass('slide-childopened');
    // goto
    $('#slide-' + next).removeClass('slide-closed').addClass('slide-opened');
  }
  if (next == 4) {
    $("#indicators li").removeClass("active").eq(0).addClass("active");
    $('#slide-0').removeClass('slide-childopened').addClass("slide-opened");
    $('#slide-1').removeClass('slide-childopened').addClass('slide-closed');
    $('#slide-2').removeClass('slide-childopened').addClass('slide-closed');
    $('#slide-3').removeClass('slide-opened').addClass('slide-closed');
  }

  //Stopped auto slide when user clicked
  clearInterval(timer);
  //Then started auto slide again
  timer = setInterval(function () {
    $('#next').trigger('click');
  }, 5000);

});
$("#prev").click(function () {
  var target = $("#indicators li.active").index();
  var current = target;
  var pre = target - 1;
  if (pre != -1) {
    $("#indicators li").removeClass("active").eq(pre).addClass("active");
    $('#slide-' + current).removeClass('slide-opened').addClass('slide-closed');
    // goto
    $('#slide-' + pre).removeClass('slide-childopened').addClass('slide-opened');
  }
  if (pre == -1) {
    $("#indicators li").removeClass("active").eq(2).addClass("active");
    $('#slide-0').removeClass('slide-opened').addClass("slide-childopened");
    $('#slide-1').removeClass('slide-closed').addClass("slide-childopened");
    $('#slide-2').removeClass('slide-closed').addClass("slide-childopened");
    $('#slide-3').removeClass('slide-closed').addClass('slide-opened');
  }
});


$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    } else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});


$("body")
  .off("click", "#submit_msg")
  .on("click", "#submit_msg", function () {
    var name = $("#input_name ").val();
    var phone = $("#input_phone ").val();
    var email = $("#input_email ").val();
    var content = $("#input_content ").val();
    $.ajax({
      url: "/index.php/Index/user_sub ",
      data: {
        "name ": name,
        "phone ": phone,
        "email ": email,
        "content ": content
      },
      type: "post ",
      success: function (res) {
        alert("提交成功 ");
      }
    });
  });