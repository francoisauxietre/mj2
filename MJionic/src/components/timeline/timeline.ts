import {Component, Input, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeLine';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent implements OnInit{

  constructor() { }
  numberEntries = 0;
  alternate: true;
  toggle: true;
  color: false;
  size: 40;
  side = 'left';

  // @Input() entry: ElementTimeLine;
  entries: ElementTimeLine[] = [];

  ngOnInit(): void {
    console.log('test');
  }

  addEntry() {
    this.numberEntries++;
    const entry = {id: 0, header: '', description: '', show: true};
    // this.entry = element1;
    this.entries.push(entry);
  }

  removeEntry() {
    if (this.numberEntries > 0) {
      this.numberEntries--;
    }
    this.entries.pop();
  }


}
