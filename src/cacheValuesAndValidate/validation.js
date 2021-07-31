export default class Validation {
	static init() {
		this.cacheValues();
		this.checkTitle();
		this.checkAuthor();
		this.checkPages();
	}
	static cacheValues() {
		this.title = document.querySelector('.title');
		this.author = document.querySelector('.author');
		this.pages = document.querySelector('.pages');
		this.completed = document.querySelector('.completed');
	}
	static checkTitle() {
		if (this.title.value === '') {
			console.log('title is not filled out');
			return false;
		} else {
			return true;
		}
	}
	static checkAuthor() {
		if (this.author.value === '') {
			console.log('author is not filled out');
			return false;
		} else {
			return true;
		}
	}
	static checkPages() {
		if (this.pages.value === '') {
			console.log('pages is not filled out');
			return false;
		}
		if (isNaN(this.pages.value) === true) {
			console.log('pages is not a number');
			return false;
		} else {
			return true;
		}
	}
	static runAllChecks() {
		this.init();
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
