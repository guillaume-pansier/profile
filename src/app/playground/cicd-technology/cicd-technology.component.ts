import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-cicd-technology',
  templateUrl: './cicd-technology.component.html',
  styleUrls: ['./cicd-technology.component.css']
})
export class CicdTechnologyComponent implements OnInit {

  isSmallScreen$: Observable<boolean>;
  detailview = false;

  constructor() { }

  ngOnInit() {
      const checkScreenSize = () => document.body.offsetWidth < 750;

    // Create observable from window resize event throttled so only fires every 500ms
      const screenSizeChanged$ = fromEvent(window, 'resize')
        .pipe(
          debounceTime(300),
          map(checkScreenSize)
        );

      // Start off with the initial value use the isScreenSmall$ | async in the
      // view to get both the original value and the new value after resize.
      this.isSmallScreen$ = screenSizeChanged$.pipe(startWith(checkScreenSize()));
  }

  onDetailedViewClick() {
    this.detailview = !this.detailview;
  }
}
