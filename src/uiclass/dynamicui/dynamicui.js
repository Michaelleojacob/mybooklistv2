import './dynamicui.css';

const myobj = {
	title: 'bookone',
	author: 'me',
	pages: 12,
	completed: false,
};

document.addEventListener('DOMContentLoaded', e => {
	(function () {
		const wrapObj = {
			init: function (myobj) {
				this.cacheDom(myobj);
				this.parentElement();
				this.childElements(this.title);
				this.childElements(this.author);
				this.childElements(this.pages);
				this.childElements(this.completed);
				this.childElements('X');
			},
			cacheDom: function (obj) {
				this.testingparent = document.querySelector('.uiwrap');
				console.log(this.testingparent);
				this.title = obj.title;
				this.author = obj.author;
				this.pages = obj.pages;
				this.completed = obj.completed;
			},
			parentElement: function () {
				this.mydiv = document.createElement('div');
				this.mydiv.classList.add('mydiv');
				this.testingparent.appendChild(this.mydiv);
			},
			childElements: function (elementName) {
				this.elementName = document.createElement('div');
				this.elementName.classList.add(elementName, 'objproperty');
				this.elementName.textContent = elementName;
				this.mydiv.appendChild(this.elementName);
			},
		};
		wrapObj.init(myobj);
	})();
});

export default class dynamicUI {
	static init(parent) {
		// console.log(myobj);
	}
}
