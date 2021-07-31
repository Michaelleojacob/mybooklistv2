import dynamicUI from '../uiclass/dynamicui/dynamicui';

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
				console.log(event);
			}
		},
		listenForClickDelete: function () {
			document.addEventListener('click', this.handleDelete);
		},
	};
	listener.init();
}
