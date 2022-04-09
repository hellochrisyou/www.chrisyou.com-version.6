import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  slideElements = ['.back__slide', '.card__slide', '.content__slide'];
  inProgress = false;
  ngOnInit() {
    const goToSlide = (slideElements, index) => {
      if (!this.inProgress) {
        this.inProgress = true;

        $('.active').addClass('exit');
        $('.active').removeClass('active');
        slideElements.forEach(elem => {
          $(`${elem}:nth-child(${index})`).addClass('active');
        });

        const evenSlide = index % 2 === 0;
        if (evenSlide) {
          $('.content__ping').addClass('content__ping--right');
        } else {
          $('.content__ping').removeClass('content__ping--right');
        }
        $('.content__ping--noanimation').removeClass('content__ping--noanimation');

        setTimeout(() => $('.exit').removeClass('exit'), 1000);
        setTimeout(() => (this.inProgress = false), 2000);
      }
    };

    $('.content__slide:nth-child(1) .button').on('click', () => goToSlide(this.slideElements, 2));
    $('.content__slide:nth-child(2) .button').on('click', () => goToSlide(this.slideElements, 1));

    setTimeout(() => goToSlide(this.slideElements, 2), 2000);
    // setTimeout(() => goToSlide(this.slideElements, 1), 8000);
  }
}
