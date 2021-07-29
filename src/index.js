import './index.css';
import header from './header/header';
import input from './inputArea/input';
import addbookbtn from './addbookbtn/addbookbtn';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.renderHeader();
			this.renderInput();
			// this.rednerAddbookbtn();
		},
		cacheDom: function () {
			this.parent = document.querySelector('#main');
		},
		renderHeader: function () {
			header(app.parent);
		},
		renderInput: function () {
			input(app.parent);
		},
		// rednerAddbookbtn: function () {
		// 	addbookbtn(app.parent);
		// },
	};
	app.init();
})();
