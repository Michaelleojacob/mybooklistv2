import dynamicUI from '../uiclass/dynamicui/dynamicui';
import Storage from '../storage/storage';

export default function myDocListeners() {
	const listener = {
		init: function () {
			this.loadBooksFromStorage();
			this.listenForClickDelete();
		},
		loadBooksFromStorage: function () {
			dynamicUI.displayBooks();
		},
		handleDelete: function (event) {
			if (event.target.className.includes('deletebtn')) {
				// console.log(event);
				const itemToRemove = event.target.parentNode;
				const getTitle = event.target.parentNode.childNodes[0].textContent;
				event.target.parentNode.remove();
				// console.log(getTitle);
				// console.log(itemToRemove);
				Storage.removeBook(getTitle);
				return { itemToRemove, getTitle };
			}
		},
		listenForClickDelete: function () {
			document.addEventListener('click', this.handleDelete);
		},
	};
	listener.init();
}
