import './addbookbtn.css';
import './../bookClass/bookClass';
import Book from './../bookClass/bookClass';

export default function myaddbookbtn(parent) {
	(function () {
		const addbookbtn = {
			init: function () {
				this.makeBtnWrap();
				this.addSubmitEventToParent();
			},
			makeBtnWrap: function () {
				this.addbookbtnwrap = document.createElement('div');
				this.addbookbtnwrap.classList.add('addbookbtnwrap');
				parent.appendChild(this.addbookbtnwrap);
				this.makeBtn();
			},
			makeBtn: function () {
				this.makeAddBookBtn = document.createElement('button');
				this.makeAddBookBtn.classList.add('makeAddBookBtn');
				this.makeAddBookBtn.textContent = 'add book';
				this.addbookbtnwrap.appendChild(this.makeAddBookBtn);
			},
			submitLogic: function (event) {
				event.preventDefault();
				this.title = document.querySelector('.title').value;
				this.author = document.querySelector('.author').value;
				this.pages = document.querySelector('.pages').value;
				this.completed = document.querySelector('.completed').checked;
				const book = new Book(
					this.title,
					this.author,
					this.pages,
					this.completed
				);
				console.log(book);
			},
			addSubmitEventToParent: function () {
				parent.addEventListener('submit', this.submitLogic);
			},
		};
		addbookbtn.init();
	})();
}
