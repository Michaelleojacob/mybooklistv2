import './dynamicui.css';

const myobj = {
	title: 'bookone',
	author: 'me',
	pages: 12,
	completed: false,
};

export default class dynamicUI {
	static init(obj) {
		this.cacheDom(obj);
		this.renderPieces();
	}
	static cacheDom(obj) {
		this.parent = document.querySelector('.uiwrap');
		this.title = obj.title;
		this.author = obj.author;
		this.pages = obj.pages;
		this.completed = obj.completed;
	}
	static renderPieces() {
		this.makeUIDivWrap();
		this.makeDynamicParentDiv();
		this.makeChildElement(this.title);
		this.makeChildElement(this.author);
		this.makeChildElement(this.pages);
		this.makeChildElement(this.completed);
		this.makeChildElement('X');
	}
	static makeUIDivWrap() {
		this.dynamicUIDivWrap = document.createElement('div');
		this.dynamicUIDivWrap.classList.add('dynamicUIDivWrap');
		this.parent.appendChild(this.dynamicUIDivWrap);
	}
	static makeDynamicParentDiv() {
		this.dynParentDiv = document.createElement('div');
		this.dynParentDiv.classList.add('dynParentDiv');
		this.dynamicUIDivWrap.appendChild(this.dynParentDiv);
	}
	static makeChildElement(elementName) {
		this.elementName = document.createElement('div');
		this.elementName.classList.add('objproperty');
		this.elementName.textContent = elementName;
		this.dynParentDiv.appendChild(this.elementName);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	dynamicUI.init(myobj);
});
