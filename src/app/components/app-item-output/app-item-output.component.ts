import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-item-output',
  templateUrl: './app-item-output.component.html',
})
export class AppItemOutputComponent implements OnInit  {
  constructor() { }

    ngOnInit(): void {
    }

    @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
        console.log(value);
    }
}
