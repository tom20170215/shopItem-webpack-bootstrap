const tpl = require('./jnProitem.html');
require('./jnProitem.css');
require('./thickbox.css');
require('jquery-zoom');
require('../../js/jquery.thickbox.js');

function jnProitem() {
	return {
		tpl,
		init: function() {
			let imgArray = [];
			imgArray.push(require('../../images/pro_img/blue_one_big.jpg'));
			imgArray.push(require('../../images/pro_img/blue_two_small.jpg'));
			imgArray.push(require('../../images/pro_img/blue_two_big.jpg'));
			imgArray.push(require('../../images/pro_img/blue_three_small.jpg'));
			imgArray.push(require('../../images/pro_img/blue_three_big.jpg'));
			$("#zoom1").zoom({
				url: $("#thickImg").attr("href"),
				magnify: '0.7'
			});
			//小图切换大图
			$("#jnProitem ul.imgList li a").bind('click', function() {
				var imgSrc = $(this).find('img').attr('src');
				var i = imgSrc.lastIndexOf('.');
				var unit = imgSrc.substring(i);
				imgSrc = imgSrc.substring(0, i);
				var imgBig = imgSrc + "_big" + unit;
				var imgSmall = imgSrc + "_small" + unit;
				$("#thickImg").attr("href", imgBig);
				$("#bigImg").attr("src", imgSmall);
				$("#zoom1").zoom({
					url: $("#thickImg").attr("href"),
					magnify: '0.7'
				});
				return false;
			});
			var $div_li = $("div.tab_menu ul li");
			$div_li.click(function() {
				$(this).addClass("selected").siblings().removeClass("selected");
				var index = $(this).index();
				$("div.tab_box > p").eq(index).show().siblings().hide();
			}).hover(function() {
				$(this).addClass("hover");
			}, function() {
				$(this).removeClass("hover");
			});
		}
	};
}



export default jnProitem;