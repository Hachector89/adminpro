import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress1: number = 25;
  progress2: number = 85;

  get getProgress1(){
    return `${ this.progress1 }%`;
  }

  get getProgress2(){
    return `${ this.progress2 }%`;
  }

  changedChildValue( value: number) {
    console.log("Hey!", value);
    
  }


}
