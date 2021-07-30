import './index.css';
import header from './header/header';
import input from './inputArea/input';
import handleEventLogic from './addBookEventLogic/eventLogic';
import UI from './uiclass/uiclass';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.renderHeader();
			this.renderInput();
			this.addSubmitEventToForm();
			this.renderUI();
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
		renderUI: function () {
			UI.init(app.parent);
		},
	};
	app.init();
})();
