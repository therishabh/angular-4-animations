import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate   } from '@angular/animations';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
	animations : [
		trigger('fade',[
			state('void',style({opacity : 0})),

			
			transition(':enter, :leave',[ // this is equal to 'void <=> *'
				animate(3000)
			]),	

			// transition('void <=> *',[
			// 	animate(3000)
			// ]),			

			// we can remove this line and use above trasition with bydirectional state..
			// transition('void => *, * => void',[
			// 	animate(3000)
			// ]),

			// we can use this transition into above transition.. 
			// transition('* => void', [
			// 	animate(2000)
			// ])
		])
	]
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
