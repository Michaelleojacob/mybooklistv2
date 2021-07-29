import './addbookbtn.css';

export default function myaddbookbtn(parent) {
	(function () {
		const addbookbtn = {
			init: function () {
				this.makeBtnWrap();
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
			// init:function(){},
		};
		addbookbtn.init();
	})();
}
