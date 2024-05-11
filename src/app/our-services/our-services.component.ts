import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";
import {ServicesComponent} from "../services/services.component";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {PageHeaderComponent} from "../page-header/page-header.component";
import {NgOptimizedImage} from "@angular/common";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    ServicesComponent,
    ContactUsComponent,
    PageHeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './our-services.component.html',
})
export class OurServicesComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Our Services');
  }
}
