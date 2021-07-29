import './index.css';
import header from './header/header';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.runHeader();
		},
		cacheDom: function () {
			this.parent = document.querySelector('#main');
		},
		runHeader: function () {
			header(app.parent);
		},
	};
	app.init();
})();
