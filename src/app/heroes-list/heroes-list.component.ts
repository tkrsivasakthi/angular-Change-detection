import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // to avoid chnage detection
})
export class HeroesListComponent implements DoCheck {
  @Input() myChildarray: any[] = [];

  constructor(private cd: ChangeDetectorRef) {}
  ngDoCheck() {
    console.log(this.myChildarray);
    this.cd.detectChanges(); // if we give this means it will detech the chnages
    console.log('Child component Change detction');
  }

  clickChild() {
    this.myChildarray.push('i am child');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
