import { Component , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() text ='';
  @Output() buttonClick : EventEmitter<string> = new EventEmitter<string>()

  onBtnClick =() =>{
    this.text= "Change input"
    this.buttonClick.emit(this.text);
    
  }
}
