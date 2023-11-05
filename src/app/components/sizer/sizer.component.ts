import { Component , EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
})
export class SizerComponent  {
  @Output() emitValue = new EventEmitter<string>();

  addNewItem(item : string){
    this.emitValue.emit(item)
  }

}
