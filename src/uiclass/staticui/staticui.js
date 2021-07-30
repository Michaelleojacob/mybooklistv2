import './staticui.css';

export default class staticUI {
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
		this.makeFirstTableRow();
		this.bundleTableHeaders();
	}
	static makeFirstTableRow() {
		this.firstTableRow = document.createElement('div');
		this.firstTableRow.classList.add('uitableRow');
		this.uiwrap.appendChild(this.firstTableRow);
	}
	static makeTableHeaders(elementName) {
		this.elementName = document.createElement('div');
		this.elementName.classList.add(elementName, 'uitableheader');
		this.elementName.textContent = elementName;
		this.firstTableRow.appendChild(this.elementName);
	}
	static bundleTableHeaders() {
		this.makeTableHeaders('Title');
		this.makeTableHeaders('Author');
		this.makeTableHeaders('Pages');
		this.makeTableHeaders('Completed');
		this.makeTableHeaders('X');
	}
}
