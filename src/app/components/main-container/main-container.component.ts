import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  names = [ 'Mahadeva', 'Shiva', 'Shankar' ];
  mainName: string = '';
  constructor() { }

  ngOnInit() {
  }

  eventFromOuterValue(passed: string) {
    this.mainName = passed;
  }

}
