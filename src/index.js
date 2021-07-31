import './index.css';
import myheader from './header/header';
import myInput from './inputArea/input';
import handleEventLogic from './addBookEventLogic/eventLogic';
import UI from './uiclass/uiclass';
import myDocListeners from './documentlisteners/doclisteners';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.renderHeader();
			this.renderInput();
			this.addSubmitEventToForm();
			this.renderUI();
			this.addDocListeners();
		},
		cacheDom: function () {
			this.parent = document.querySelector('#main');
		},
		renderHeader: function () {
			myheader(app.parent);
		},
		renderInput: function () {
			myInput(app.parent);
		},
		addSubmitEventToForm: function () {
			handleEventLogic();
		},
		renderUI: function () {
			UI.init(app.parent);
		},
		addDocListeners: function () {
			document.addEventListener('DOMContentLoaded', () => {
				myDocListeners();
			});
		},
	};
	app.init();
})();
