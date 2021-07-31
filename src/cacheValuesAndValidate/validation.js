import myAlert from './../alertclass/alertclass';

export default class Validation {
	static cacheValues() {
		this.title = document.querySelector('.title');
		this.author = document.querySelector('.author');
		this.pages = document.querySelector('.pages');
		this.completed = document.querySelector('.completed');
	}
	static checkTitle() {
		if (this.title.value === '') {
			myAlert.alertTextContent('title is empty', 'red');
			return false;
		} else {
			return true;
		}
	}
	static checkAuthor() {
		if (this.author.value === '') {
			myAlert.alertTextContent('author is empty', 'red');
			return false;
		} else {
			return true;
		}
	}
	static checkPages() {
		if (this.pages.value === '') {
			myAlert.alertTextContent('pages is empty', 'red');
			return false;
		}
		if (isNaN(this.pages.value) === true) {
			myAlert.alertTextContent('pages is not a number', 'red');
			return false;
		} else {
			return true;
		}
	}
	static runAllChecks() {
		this.cacheValues();
		if (
			this.checkTitle() === true &&
			this.checkAuthor() === true &&
			this.checkPages() === true
		) {
			return true;
		} else {
			return false;
		}
	}
}
