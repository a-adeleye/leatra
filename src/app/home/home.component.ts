import {Component, ViewChild} from '@angular/core';
import {CarouselComponent, CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {RouterLink} from "@angular/router";
import {StatComponent} from "../stat/stat.component";
import {TestimonialsComponent} from "../testimonials/testimonials.component";
import {ServicesComponent} from "../services/services.component";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    ContactUsComponent,
    RouterLink,
    StatComponent,
    TestimonialsComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {items: 1}, 479: {items: 1}, 768: {items: 2}, 979: {items: 2}, 1199: {items: 2},
    },
    margin: 10,
    stagePadding: 40,
    nav: false
  }

  @ViewChild('owlCar') owlCar!: CarouselComponent;

  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Home Page');
  }

  next() {
    this.owlCar.next();
  }

  prev() {
    this.owlCar.prev();
  }

}
