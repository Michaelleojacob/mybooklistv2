export default class Book {
	constructor(title, author, pages, completed) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.completed = completed;
		this.bookid = Book.myfunc();
	}
	static myfunc() {
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return (
			S4() +
			S4() +
			'-' +
			S4() +
			'-' +
			S4() +
			'-' +
			S4() +
			'-' +
			S4() +
			S4() +
			S4()
		);
	}
}
