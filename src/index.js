import './index.css';
import header from './header/header';
import input from './inputArea/input';
import handleEventLogic from './addBookEventLogic/eventLogic';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.renderHeader();
			this.renderInput();
			this.addSubmitEventToForm();
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
		addSubmitEventToForm: function () {
			handleEventLogic();
		},
	};
	app.init();
})();
