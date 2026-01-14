import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  parentDataInParentComponent = 'Sonu';

  thisData: number = 10;

  childDataInParentComponent = '';

  getDataFromChild = (data: string) => {
    this.childDataInParentComponent = data;
  };

}
