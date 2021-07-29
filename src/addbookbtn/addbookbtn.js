import './addbookbtn.css';

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
				console.log(event);
			},
			addSubmitEventToParent: function () {
				parent.addEventListener('submit', this.submitLogic);
			},
		};
		addbookbtn.init();
	})();
}
