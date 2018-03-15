import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/modal';
const tpl = require('./jndetail.html');
require('./custom.scss');
require('./jndetail.css');


function jndetail() {
	return {
		tpl,
		init: function() {
			let imgArray = [];
			imgArray.push(require('../../images/pro_img/yellow_one_small.jpg'));
			imgArray.push(require('../../images/pro_img/yellow_one_big.jpg'));
			imgArray.push(require('../../images/pro_img/yellow_two_small.jpg'));
			imgArray.push(require('../../images/pro_img/yellow_two_big.jpg'));
			imgArray.push(require('../../images/pro_img/yellow_three_small.jpg'));
			imgArray.push(require('../../images/pro_img/yellow_three_big.jpg'));
			imgArray.push(require('../../images/pro_img/green_one_small.jpg'));
			imgArray.push(require('../../images/pro_img/green_one_big.jpg'));
			imgArray.push(require('../../images/pro_img/green_two_small.jpg'));
			imgArray.push(require('../../images/pro_img/green_two_big.jpg'));
			//颜色切换
			$(".color_change ul li img").click(function() {
				$(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
				var imgSrc = $(this).attr("src");
				var i = imgSrc.lastIndexOf(".");
				var unit = imgSrc.substring(i);
				imgSrc = imgSrc.substring(0, i);
				var imgSrc_small = imgSrc + "_one_small" + unit;
				var imgSrc_big = imgSrc + "_one_big" + unit;
				$("#bigImg").attr("src", imgSrc_small);
				$("#thickImg").attr("href", imgSrc_big);
				var title = $(this).attr("alt");
				$(".color_change strong").text(title);
				var newImgSrc = imgSrc.replace("../images/", "");
				$("#jnProitem .imgList li").hide();
				$("#jnProitem .imgList").find(".imgList_" + newImgSrc).show();
				//防止切换颜色后，放大图片还是原来的颜色
				$("#jnProitem .imgList").find(".imgList_" + newImgSrc).eq(0).find("a").click();
			});
			//尺寸选择
			$(".pro_size li").click(function() {
				$(this).addClass("cur").siblings().removeClass("cur");
				$(this).parents("ul").siblings("strong").text($(this).text());
			});
			//数量和价格联动
			var $span = $(".pro_price strong");
			var price = $span.text();
			$("#num_sort").change(function() {
				var num = $(this).val();
				var amount = num * price;
				$span.text(amount);
			});
			//打星评分
			$("ul.rating li a").click(function() {
				var level = $(this).parent().attr("class");
				$(this).parent().parent().removeClass().addClass("rating " + level + "star");
				return false;
			});
			var $product = $("#jnDetails");
			$("#cart").click(function() {
				var pro_name = $product.find('h4:first').text();
				var pro_size = $product.find('.pro_size strong').text();
				var pro_color = $product.find('.color_change strong').text();
				var pro_num = $product.find('.pro_num #num_sort').val();
				var pro_price =$product.find('.pro_price strong').text();
				var content =  "感谢您的购买。<div style = 'font-size:12px;font-weight:400;'>您购买的产品是：" + pro_name + "；尺寸是：" + pro_size + "；颜色是：" + pro_color + "；数量是" + pro_num + "；总价是：" + pro_price + "元。</div>";
				$('#jnDialogContent').html(content);
				$('#myModal').on('shown.bs.modal',function(){
					$('.modal-footer button').focus();
				});				
				$("#myModal").modal({
					backdrop:'static'
				});

			});
		}
	}
}

export default jndetail;