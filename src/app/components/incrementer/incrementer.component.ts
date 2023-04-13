import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {

  @Input('value') progress: number = 50;
  @Input() btnClass: string = "btn-primary";

  @Output()
    outputValue: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  get getPercent() {
    return `${this.progress}%`;
  }

  changeValue(value: number) {

    if (this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && value < 0) {
      this.outputValue.emit(0);
      return this.progress = 0;
    }

    let total: number = this.progress += value;

    this.outputValue.emit(total);
    return total;
  }

  onChange( newValue: number ){

    if( newValue >= 100 ){
      this.progress = 100;
    } else if (newValue <= 0 ) {
      this.progress = 0
    } else {
      this.progress = newValue;
    }

    this.outputValue.emit(this.progress);
    
  }

}
