import staticUI from './staticui/staticui';
import dynamicUI from './dynamicui/dynamicui';

export default class UI {
	static init(parent) {
		staticUI.init(parent);
		this.parentElement = document.querySelector('.uitableRow');
		dynamicUI.init(this.parentElement);
	}
}
