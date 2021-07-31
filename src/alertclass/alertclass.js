import './alertclass.css';

export default class myAlert {
	static init(parent) {
		this.makeAlertAreaWrapper(parent);
		this.makeAlert();
	}
	static makeAlertAreaWrapper(parent) {
		this.aawrap = document.createElement('div');
		this.aawrap.classList.add('aawrap');
		parent.appendChild(this.aawrap);
	}
	static makeAlert() {
		this.alertarea = document.createElement('div');
		this.alertarea.classList.add('alertarea');
		this.alertarea.textContent = '';
		myAlert.aawrap.appendChild(this.alertarea);
	}
	static alertTextContent(displaymessage, color) {
		this.clearTextContent();
		this.clearSetTimeOut();
		this.alertarea.style.color = color;
		this.alertarea.textContent = displaymessage;
		this.addSetTimeOut();
	}
	static clearTextContent() {
		this.alertarea.style.color = 'black';
		this.alertarea.textContent = '';
	}
	static addSetTimeOut() {
		this.textSetTimeOut = setTimeout(() => {
			myAlert.clearTextContent();
		}, 3000);
	}
	static clearSetTimeOut() {
		clearTimeout(this.textSetTimeOut);
	}
}
