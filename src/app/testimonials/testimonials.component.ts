import {Component, ViewChild} from '@angular/core';
import {CarouselComponent, CarouselModule, OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {

  testimonialOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {items: 1}, 479: {items: 1}, 768: {items: 2}, 979: {items: 2}, 1199: {items: 2},
    },
    margin: 0,
    stagePadding: 0,
    nav: false
  }

  @ViewChild('testimonials') testimonials!: CarouselComponent;

  nextTestimonial() {
    this.testimonials.next();
  }

  prevTestimonial() {
    this.testimonials.prev();
  }
}
