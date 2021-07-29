import './header.css';

export default function myheader(parent) {
	(function () {
		const header = {
			init: function () {
				this.makeHeaderWrap();
			},
			makeHeaderWrap: function () {
				this.hdwrap = document.createElement('div');
				this.hdwrap.classList.add('hdwrap');
				parent.appendChild(this.hdwrap);
				this.renderSpans();
			},
			renderSpans: function () {
				this.makeSpans('my');
				this.makeSpans('Book');
				this.makeSpans('list');
			},
			makeSpans: function (name) {
				this.name = document.createElement('span');
				this.name.textContent = name;
				this.name.setAttribute('id', name);
				this.hdwrap.appendChild(this.name);
			},
		};
		header.init();
	})();
}
