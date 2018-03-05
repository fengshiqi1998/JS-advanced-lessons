$(function(){
	// 导航栏中的列表hover效果
	$('.ho').hover(function(){
		$(this).css({"border-top":"2px solid #ff6e3d","background-color":"#e7e7e7"});
	},
	function(){
		$(this).css({"border-top":"2px solid #f7f7f7","background-color":"#f7f7f7"});
	});
	// 导航栏中的搜索框
	$('input').focus(function(){
		if($('input').val()=="搜索课程、问答"){
			$('input').val('');
		}
	});
	$('input').blur(function(){
		if($('input').val()==""){
			$('input').val('搜索课程、问答');
		}
	});
	//图片切换效果
	var imgs=$('.banner>img');
	var imgnum=0;
	function Tabimg(){
		$('.bimg').css("left",-1347);
	}
	var timer=setInterval(Tabimg,2000);
	// 课程部分标题
	$('.list>li').hover(function(){
		$(this).css("background-color","#f1f1f1");
	},
	function(){
		$(this).css("background-color","#fff");
	});
	// 课程部分半透明
	$('.content>li').hover(function(){
		$(this).children().css("opacity","0.7");
	},
	function(){
		$(this).children().css("opacity","1");
	});
	//悬浮标
	$(window).scroll(function(){
		if($(window).scrollTop()>25){
			$('#fly').css('display','block');
		}else{
			$('#fly').css('display','none');
		}
	});
});