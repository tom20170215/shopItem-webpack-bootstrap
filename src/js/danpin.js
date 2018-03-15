import 'jquery'
import Header from '../component/header/header.js'
import footer from '../component/footer/footer.js'
import leftlist from '../component/leftlist/leftlist.js'
import JnProitem from '../component/jnProitem/jnProitem.js'
import Jndetail from '../component/jndetail/jndetail.js'
require('../css/danpin.css');
require('../css/base.css');



function App(){
	var header = new Header();
	var jnProitem = new JnProitem();
	var jndetail = new Jndetail();
	$(header.tpl).insertBefore($("#content"));
	header.init();
	$("body").append($(footer.tpl));
	$(leftlist.tpl).appendTo($(".janeshop"));
	$(jnProitem.tpl).appendTo($(".janeshop"));
	jnProitem.init();	
	$(jndetail.tpl).appendTo($(".janeshop"));
	jndetail.init();
}

new App();