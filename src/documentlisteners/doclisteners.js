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
				const getid = event.target.parentNode.childNodes[5].className;
				event.target.parentNode.parentNode.remove();
				Storage.removeBook(getid);
			}
		},
		listenForClickDelete: function () {
			document.addEventListener('click', this.handleDelete);
		},
		handleCompletedChange: function (event) {
			if (event.target.className.includes('dyncompleted')) {
				const targetIsTrueOrFalse = event.target.checked;
				const getid =
					event.target.parentNode.parentNode.childNodes[5].className;
				Storage.changeCompletedStatus(getid, targetIsTrueOrFalse);
			}
		},
		listenForCompletedChange: function () {
			document.addEventListener('click', this.handleCompletedChange);
		},
	};
	listener.init();
}
