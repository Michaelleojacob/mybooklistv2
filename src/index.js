import './index.css';
import myheader from './header/header';
import myInput from './inputArea/input';
import handleEventLogic from './addBookEventLogic/eventLogic';
import UI from './uiclass/uiclass';
import myDocListeners from './documentlisteners/doclisteners';
import myAlert from './alertclass/alertclass';
import myfooter from './flair/flair';

(function myApp() {
	const app = {
		init: function () {
			this.cacheDom();
			this.renderHeader();
			this.renderAlerts();
			this.renderInput();
			this.renderUI();
			this.renderMyFooter();
			this.addSubmitEventToForm();
			this.addDocListeners();
		},
		cacheDom: function () {
			this.parent = document.querySelector('#main');
		},
		renderHeader: function () {
			myheader(app.parent);
		},
		renderAlerts: function () {
			myAlert.init(app.parent);
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
		renderMyFooter: function () {
			myfooter(app.parent);
		},
	};
	app.init();
})();
