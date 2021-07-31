import Book from '../bookClass/bookClass';
import dynamicUI from '../uiclass/dynamicui/dynamicui';
import Validation from '../cacheValuesAndValidate/validation';

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
				this.title = document.querySelector('.title').value;
				this.author = document.querySelector('.author').value;
				this.pages = document.querySelector('.pages').value;
				this.completed = document.querySelector('.completed').checked;
				event.preventDefault();
				if (Validation.runAllChecks() === false) {
					return;
				} else {
					const book = new Book(
						this.title,
						this.author,
						this.pages,
						this.completed
					);
					dynamicUI.init(book);
					addBookEventLogic.clearInputFields();
					return book;
				}
			},
			clearInputFields: function () {
				this.title = document.querySelector('.title').value = '';
				this.author = document.querySelector('.author').value = '';
				this.pages = document.querySelector('.pages').value = '';
				this.completed = document.querySelector('.completed').checked = false;
			},
			addEventListener: function () {
				this.form.addEventListener('submit', this.submitLogic);
			},
		};
		addBookEventLogic.init();
	})();
}
