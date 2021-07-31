import './dynamicui.css';
import Storage from '../../storage/storage';

export default class dynamicUI {
	static displayBooks() {
		const books = Storage.getBooks();
		books.forEach(book => {
			dynamicUI.init(book);
		});
	}
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
		this.bookid = obj.bookid;
	}
	static renderPieces() {
		this.makeUIDivWrap();
		this.makeDynamicParentDiv();
		this.makeChildElement(this.title);
		this.makeChildElement(this.author);
		this.makeChildElement(this.pages);
		this.makeCompletedSlider(this.completed);
		this.makeDeleteBtn();
		this.giveThisDomElementItsID(this.bookid);
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
		this.elementName.classList.add(elementName);
		this.elementName.textContent = elementName;
		this.dynParentDiv.appendChild(this.elementName);
	}
	static makeCompletedSlider(booleanValue) {
		this.dynsliderLabel = document.createElement('label');
		this.dynsliderLabel.classList.add('dynswitch');
		this.dynsliderInput = document.createElement('input');
		this.dynsliderInput.classList.add('dyncompleted');
		this.dynsliderInput.setAttribute('type', 'checkbox');
		this.dynsliderSpan = document.createElement('dynspan');
		this.dynsliderSpan.classList.add('dynslider', 'dynround');
		if (booleanValue === true) {
			this.dynsliderInput.checked = true;
		} else {
			this.dynsliderInput.checked = false;
		}
		this.dynsliderLabel.appendChild(this.dynsliderInput);
		this.dynsliderLabel.appendChild(this.dynsliderSpan);
		this.dynParentDiv.appendChild(this.dynsliderLabel);
	}
	static makeDeleteBtn() {
		this.deleteBtn = document.createElement('button');
		this.deleteBtn.classList.add('deletebtn');
		this.deleteBtn.textContent = 'X';
		this.dynParentDiv.appendChild(this.deleteBtn);
	}
	static giveThisDomElementItsID(elementId) {
		this.domElid = document.createElement('div');
		this.domElid.classList.add(elementId);
		this.dynParentDiv.appendChild(this.domElid);
	}
}
