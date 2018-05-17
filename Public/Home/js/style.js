

$(function(){
	$(".nav-ul").children("li").hover(function(){
		$(this).find(".nav-two").slideDown(200);
		},function(){
		$(this).find(".nav-two").slideUp(50);
	});
	
	$(".not-r").toggle(function(){
		$(".notice .conte").slideUp();
	},function(){
		$(".notice .conte").slideDown();
	}
	);
});
$(function(){
	$("#news-wh li").click(function(){
		$("#news-wh li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-wh .cont-wrap").hide().eq($(this).index()).show();
	});
	$("#news-hj li").click(function(){
		$("#news-hj li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-hj .cont-wrap").hide().eq($(this).index()).show();
	});
	$("#news-zj li").click(function(){
		$("#news-zj li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-zj .cont-wrap").hide().eq($(this).index()).show();
	});
	$("#news-gs li").click(function(){
		$("#news-gs li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-gs .cont-wrap").hide().eq($(this).index()).show();
	});
	$("#news-yh li").click(function(){
		$("#news-yh li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-yh .cont-wrap").hide().eq($(this).index()).show();
	});
	$("#news-zs li").click(function(){
		$("#news-zs li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-zs .cont-wrap").hide().eq($(this).index()).show();
	});
	$("#news-ny li").click(function(){
		$("#news-ny li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#news-ny .cont-wrap").hide().eq($(this).index()).show();
	});
});


$(function(){
	$("#price-date1 li").click(function(){
		$("#price-date1 li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#price-date1 table").hide().eq($(this).index()).show();
	});
	$("#price-date2 li").click(function(){
		$("#price-date2 li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$("#price-date2 table").hide().eq($(this).index()).show();
	});
});
$(function(){
	$(".wrap-nav li").click(function(){
		$(".wrap-nav li").eq($(this).index()).addClass("current02").siblings().removeClass("current02");
		$(".about-ny-wrap ul").hide().eq($(this).index()).show();
		$(".trend>div").hide().eq($(this).index()).show();
		$(".about-ny-wrap>.news-list").hide().eq($(this).index()).show();
		$(".about-ny-wrap>.school-wrap").hide().eq($(this).index()).show();
	});
});	
//下拉菜单效果
    $('.nav-bar-item').hover(function(){
        $(this).children('.item').show().siblings().children('.item').hide();
		
    },
     function(){
         $(this).children('.item').hide();
         $(this).find('.office-detail').eq(0).removeClass('hide');
            }
    );
    $('.item li').mouseover(function(){
        $(this).addClass('li-active')
                .siblings('.li-active')
                .removeClass('li-active');
                $(this).children('.office-detail')
                .removeClass('hide').parent()
                .siblings()
                .children('.office-detail')
                .addClass('hide');
    });