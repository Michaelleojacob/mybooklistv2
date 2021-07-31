import dynamicUI from '../uiclass/dynamicui/dynamicui';
import Storage from '../storage/storage';

export default function myDocListeners() {
	const listener = {
		init: function () {
			this.loadBooksFromStorage();
			this.listenForClickDelete();
			this.listenForCompletedChange();
		},
		loadBooksFromStorage: function () {
			dynamicUI.displayBooks();
		},
		handleDelete: function (event) {
			if (event.target.className.includes('deletebtn')) {
				const getTitle = event.target.parentNode.childNodes[0].textContent;
				event.target.parentNode.parentNode.remove();
				Storage.removeBook(getTitle);
			}
		},
		listenForClickDelete: function () {
			document.addEventListener('click', this.handleDelete);
		},
		handleCompletedChange: function (event) {
			if (event.target.className.includes('dyncompleted')) {
				const targetIsTrueOrFalse = event.target.checked;
				const gettingTitleForCompletedChange =
					event.target.parentNode.parentNode.childNodes[0].textContent;
				Storage.changeCompletedStatus(
					gettingTitleForCompletedChange,
					targetIsTrueOrFalse
				);
			}
		},
		listenForCompletedChange: function () {
			document.addEventListener('click', this.handleCompletedChange);
		},
	};
	listener.init();
}
