import 'jquery';
import leftlist from '../component/leftlist/leftlist.js';
import Header from '../component/header/header.js';
import footer from '../component/footer/footer.js';


require('../css/index.css')
require('../css/base.css')
$(function() {
	var header = new Header();
	$(leftlist.tpl).insertBefore($("#jnImageroll"));
	$(header.tpl).insertBefore($("#content"));
	$("body").append($(footer.tpl));
	header.init();
	
	//首页大屏广告效果
	var $Rolls = $("#jnImageroll div a");
	var index = 0;
	var len = $Rolls.length;
	var adTimer = null;
	$Rolls.mouseover(function() {
		index = $Rolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	var imgroll = $("#jnImageroll");
	imgroll.hover(function() {
		if (adTimer) {
			clearTimeout(adTimer);
		}
	}, function() {
		adTimer = setInterval(function() {
			showImg(index);
			index++;
			if (index == len) {
				index = 0;
			}
		}, 3000);
	}).trigger("mouseleave");

	//brandlist的滚动显示
	$("#jnBrandTab li a").click(function() {
		$(this).parent().addClass("chos").siblings().removeClass("chos");
		var index = $("#jnBrandTab li a").index(this);
		showbrandList(index);
		return false;
	}).eq(0).click();
});


//显示不同的幻灯片
function showImg(index) {
	var rollist = $("#jnImageroll div a");
	var newhref = rollist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href", newhref).find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();
	rollist.eq(index).addClass("chos").css("opacity", "1").siblings().removeClass("chos");
}


//显示不同的Brand
function showbrandList(index) {
	var $brandlist = $("#jnBrandList");
	var itemwidth = $brandlist.find("li").outerWidth();
	itemwidth = itemwidth * 4; //一个版面的宽度
	$brandlist.stop(true, false).animate({
		left: -itemwidth * index
	}, 1000);
}