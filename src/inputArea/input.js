import './input.css';
import addbookbtn from './../addbookbtn/addbookbtn';

export default function myInput(parent) {
	(function () {
		const input = {
			init: function () {
				this.makeInputWrapper();
				this.addBookBtnToForm();
			},
			makeInputWrapper: function () {
				this.inwrap = document.createElement('div');
				this.inwrap.classList.add('inwrap');
				parent.appendChild(this.inwrap);
				this.renderTable();
			},
			renderTable: function () {
				this.makeTable();
				this.makeTableRow('firstrow', 'Title:', 'title');
				this.makeTableRow('secondrow', 'Author:', 'author');
				this.makeTableRow('thirdrow', 'Pages:', 'pages');
				this.makeCompletedRow();
			},
			makeTable: function () {
				this.table = document.createElement('form');
				this.table.classList.add('table');
				this.table.setAttribute('style', 'width:100%');
				this.inwrap.appendChild(this.table);
			},
			makeTableRow: function (tableDataName, text, inputName) {
				this.tablerow = document.createElement('tr');
				this.makeTableDataCell(tableDataName, text);
				this.makeTableInput(inputName);
				this.table.appendChild(this.tablerow);
			},
			makeTableDataCell: function (tableDataName, text) {
				this.tableDataName = document.createElement('td');
				this.tableDataName.classList.add('tdata', tableDataName);
				this.tableDataName.textContent = text;
				this.tablerow.appendChild(this.tableDataName);
			},
			makeTableInput: function (inputName) {
				this.inputName = document.createElement('input');
				this.inputName.classList.add('rowinput', inputName);
				this.tablerow.appendChild(this.inputName);
			},
			makeCompletedRow: function () {
				this.completed = document.createElement('td');
				this.completed.textContent = 'Completed';
				this.table.appendChild(this.completed);
				this.makeSlider();
			},
			makeSlider: function () {
				this.sliderLabel = document.createElement('label');
				this.sliderLabel.classList.add('switch');
				this.sliderInput = document.createElement('input');
				this.sliderInput.classList.add('completed');
				this.sliderInput.setAttribute('type', 'checkbox');
				this.sliderSpan = document.createElement('span');
				this.sliderSpan.classList.add('slider', 'round');
				this.sliderLabel.appendChild(this.sliderInput);
				this.sliderLabel.appendChild(this.sliderSpan);
				this.completed.appendChild(this.sliderLabel);
			},
			addBookBtnToForm: function () {
				addbookbtn(this.table);
			},
		};
		input.init();
	})();
}
