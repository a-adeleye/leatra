import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";
import {StatComponent} from "../stat/stat.component";
import {TestimonialsComponent} from "../testimonials/testimonials.component";
import {PageHeaderComponent} from "../page-header/page-header.component";
import {NgOptimizedImage} from "@angular/common";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    StatComponent,
    TestimonialsComponent,
    PageHeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('About Us');
  }
}
