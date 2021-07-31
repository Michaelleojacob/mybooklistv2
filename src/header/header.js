import './header.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

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
				this.makeIcon();
				this.makeSpans('My');
				this.makeSpans('Book');
				this.makeSpans('List');
			},
			makeSpans: function (name) {
				this.name = document.createElement('span');
				this.name.textContent = name;
				this.name.setAttribute('id', name);
				this.hdwrap.appendChild(this.name);
			},
			makeIcon: function () {
				this.bookicon = document.createElement('div');
				this.bookicon.classList.add('bookicon');
				this.bookicon.innerHTML = `<i class="fas fa-book"></i>`;
				this.hdwrap.appendChild(this.bookicon);
			},
		};
		header.init();
	})();
}
