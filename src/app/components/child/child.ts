import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  childDataInChildComponent: string = 'Monu';

  @Input()
  parentDataInChildComponent: string = '';

  @Input()
  passHere = 0;


  @Output()
  pass = new EventEmitter<string>();

  sendDataToParent() {
    this.pass.emit(this.childDataInChildComponent);
  }




}
