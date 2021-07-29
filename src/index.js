import './index.css';
import header from './header/header';
import input from './inputArea/input';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.runHeader();
			this.renderInput();
		},
		cacheDom: function () {
			this.parent = document.querySelector('#main');
		},
		runHeader: function () {
			header(app.parent);
		},
		renderInput: function () {
			input(app.parent);
		},
	};
	app.init();
})();
