import dynamicUI from '../uiclass/dynamicui/dynamicui';

export default function myDocListeners() {
	(function () {
		const listener = {
			init: function () {
				this.loadBooksFromStorage();
			},
			loadBooksFromStorage: function () {
				dynamicUI.displayBooks();
			},
		};
		listener.init();
	})();
}
