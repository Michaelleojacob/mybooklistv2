import './uiclass.css';

export default class UI {
	static init(parent) {
		this.cacheParent(parent);
		this.makeUIwrapper();
	}
	static cacheParent(parent) {
		this.parent = parent;
	}
	static makeUIwrapper() {
		this.uiwrap = document.createElement('div');
		this.uiwrap.classList.add('uiwrap');
		this.parent.appendChild(this.uiwrap);
		this.allTablePieces();
	}
	static allTablePieces() {
		this.makeTablehead();
		this.makeFirstTableRow();
		this.makeTableHeaders('Title');
		this.makeTableHeaders('Author');
		this.makeTableHeaders('Pages');
		this.makeTableHeaders('Completed');
		this.makeTableHeaders('X');
	}
	static makeTablehead() {
		this.tablehead = document.createElement('div');
		this.tablehead.classList.add('uitablehead');
		this.uiwrap.appendChild(this.tablehead);
	}
	static makeFirstTableRow() {
		this.firstTableRow = document.createElement('div');
		this.firstTableRow.classList.add('uitableRow');
		this.tablehead.appendChild(this.firstTableRow);
	}
	static makeTableHeaders(elementName) {
		this.elementName = document.createElement('div');
		this.elementName.classList.add(elementName, 'uitableheader');
		this.elementName.textContent = elementName;
		this.firstTableRow.appendChild(this.elementName);
	}
}
