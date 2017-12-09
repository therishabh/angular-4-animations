import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
	todoItems : any[] = [{
		id: 1,
		title : "this is first Item"
	},{
		id: 2,
		title : "this is second Item"
	},{
		id: 3,
		title : "this is third Item"
	}];

	constructor() { }

	ngOnInit() {
	}

	addItem(item : HTMLInputElement) {
		let newId = this.todoItems.length;
		let newItem = {
			id : newId,
			title : item.value
		}
		item.value = '';
		this.todoItems.unshift(newItem);
	}

	removeItem(item) {
		let indexNo = this.todoItems.indexOf(item);
		this.todoItems.splice(indexNo,1);
	}

}