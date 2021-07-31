export default class Storage {
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}
	static addBook(book) {
		const books = Storage.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}
	static removeBook(id) {
		const books = Storage.getBooks();
		books.forEach((book, index) => {
			if (book.id === id) {
				books.splice(index, 1);
			}
		});
		localStorage.setItem('books', JSON.stringify(books));
	}
	static changeCompletedStatus(id, trueOrFalseValue) {
		const books = Storage.getBooks();
		books.forEach(book => {
			if (book.bookid === id) {
				book.completed = trueOrFalseValue;
			}
		});
		localStorage.setItem('books', JSON.stringify(books));
	}
}
