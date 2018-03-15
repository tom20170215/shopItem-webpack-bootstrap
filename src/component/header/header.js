const tpl = require('./header.html');
require('./header.css');
require('../../js/jquery.cookie.js');

function switchSkin(skinName) {
	$("#" + skinName).addClass("selected")
		.siblings().removeClass("selected");
	switch (skinName) {
		case "skin_0":
			$(".mainNav").css("background", "#4A4A4A");
			$("#jnCatalog h2").css("background", "#4A4A4A");
			break;
		case "skin_1":
			$(".mainNav").css("background", "#BE46D8");
			$("#jnCatalog h2").css("background", "#BE46D8");
			break;
		case "skin_2":
			$(".mainNav").css("background", "#E44072");
			$("#jnCatalog h2").css("background", "#E44072");
			break;
		case "skin_3":
			$(".mainNav").css("background", "#37C7D4");
			$("#jnCatalog h2").css("background", "#37C7D4");
			break;
		case "skin_4":
			$(".mainNav").css("background", "#F9AF2A");
			$("#jnCatalog h2").css("background", "#F9AF2A");
			break;
		case "skin_5":
			$(".mainNav").css("background", "#B1D410");
			$("#jnCatalog h2").css("background", "#B1D410");
			break;
	}
	$.cookie("MyCssSkin", skinName, {
		path: '/',
		expires: 10
	});
}

function header() {
	return {
		tpl,

		init: function() {
			//nav显示、隐藏
			$("#nav li").hover(function() {
				$(this).find(".jnNav").show();
			}, function() {
				$(this).find(".jnNav").hide();
			});


			//搜索框
			$("#inputSearch").focus(function() {
				$(this).addClass("focus");
				if ($(this).val() == this.defaultValue) {
					$(this).val("");
				}
			}).blur(function() {
				if ($(this).val() === "") {
					$(this).removeClass("focus");
					$(this).val(this.defaultValue);
				}
			}).keyup(function(e) {
				if (e.which == 13) {
					alert("正在搜索！");
				}
			});

			$("#skin li").click(function() {
				switchSkin(this.id);
			});
			var cookie_skin = $.cookie("MyCssSkin");
			if (cookie_skin) {
				switchSkin(cookie_skin);
			}
		}
	}
}


export default header;