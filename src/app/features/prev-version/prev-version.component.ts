import { Component, OnInit } from '@angular/core';
import { BaseAnimate } from 'src/app/animations/base-animate';
import { RoutingStateService } from 'src/app/services/routing-state.service';

@Component({
  selector: 'app-prev-version',
  templateUrl: './prev-version.component.html',
  styleUrls: ['./prev-version.component.scss']
})
export class PrevVersionComponent extends BaseAnimate implements OnInit {
  currentIndex = 0;
  constructor(protected override routingStateService: RoutingStateService) { super(routingStateService) }

  ngOnInit(): void {
  }

  public setVersionIndex(): number {
    return this.currentIndex;
  }

  public setIndex(value: number): void {
    switch (value) {
      case 0: {
        this.currentIndex = 0;
        break;
      }
      case 1: {
        this.currentIndex = 1;
        break;
      }
      case 2: {
        this.currentIndex = 2;
        break;
      }
      case 3: {
        this.currentIndex = 3;
        break;
      }
      case 4: {
        this.currentIndex = 4;
        break;
      }
    }
  }
}
