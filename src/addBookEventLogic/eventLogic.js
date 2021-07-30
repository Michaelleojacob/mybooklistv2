import Book from '../bookClass/bookClass';

export default function handleEventLogic() {
	(function () {
		const addBookEventLogic = {
			init: function () {
				this.cacheDom();
				this.addEventListener();
			},
			cacheDom: function () {
				this.form = document.querySelector('.table');
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
			addEventListener: function () {
				this.form.addEventListener('submit', this.submitLogic);
			},
		};
		addBookEventLogic.init();
	})();
}
