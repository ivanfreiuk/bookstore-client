import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() minValue: number = 1;
  @Input() maxValue: number = 100;
  @Input() currentValue: number = 1;
  @Output() counterValue = new EventEmitter<number>();
  counterControl: FormControl;

  constructor() {
    this.counterControl = new FormControl(this.currentValue,
      [Validators.min(this.minValue - 1),
      Validators.max(this.maxValue + 1)])
  }

  ngOnInit() {
  }

  increase() {
    if (this.currentValue >= this.maxValue)
      return;
    this.counterValue.emit(++this.currentValue);
  }

  decrease() {
    if (this.currentValue <= this.minValue)
      return;
    this.counterValue.emit(--this.currentValue)
  }

}
