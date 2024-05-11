import {Component} from '@angular/core';
import {PageHeaderComponent} from "../page-header/page-header.component";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Contact Us');
  }
}
