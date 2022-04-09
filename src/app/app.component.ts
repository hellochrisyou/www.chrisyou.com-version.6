import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from './services/routing-state.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'www.chrisyou.com - Version 6';

  constructor(public router: Router, public routingStateService: RoutingStateService) { }

  ngOnInit(): void {
    let tmpVar = this;
    $('.menu-collapsed').click(function () {
      $(tmpVar).toggleClass('menu-expanded');
    });
  }
  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public navigateHome(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/home');
    }, 500);
  }

  public navigateBackground(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/background');
    }, 500);
  }

  public navigateProject(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/project');
    }, 500);
  }


  public navigatePrevVersion(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/previous-versions');
    }, 500);
  }
}
