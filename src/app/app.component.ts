import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {isPlatformBrowser} from "@angular/common";
import * as AOS from 'aos';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {ContactComponent} from "./contact/contact.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselModule, RouterLink, FooterComponent, HeaderComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'leatra';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({once: true, duration: 1000});
    }
  }

  ngOnInit() {
    if (typeof window != 'undefined') {
      let scrollRef = 0;

      window.addEventListener('scroll', function () {
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
      });
    }

  }

}
