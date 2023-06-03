import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'angular-router-sample';
  count = 1;

  strArrayInParent: any[] = [];

  constructor() {}
  //below function is check C/h detecion when call setIntrval
  /*   test() {
    setInterval(() => {
      this.count++;
    }, 1000);
    console.log('test AppComponent');
    //this.count++;
  } */

  test() {
    this.strArrayInParent.push('i am parent');
    console.log(this.strArrayInParent);
  }

  ngDoCheck() {
    console.log('Parent component change detection');
  }
  ngOnInit() {
    console.log('app');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
