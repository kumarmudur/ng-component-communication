import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  outerName: string = '';
  @Input() names;
  @Output() eventFromOuter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  eventFromInnerValue(passed: string) {
    this.outerName = passed;
    this.eventFromOuter.emit(this.outerName);
  }
}
