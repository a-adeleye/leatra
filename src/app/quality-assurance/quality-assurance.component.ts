import {Component} from '@angular/core';
import {PageHeaderComponent} from "../page-header/page-header.component";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-quality-assurance',
  standalone: true,
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './quality-assurance.component.html',
})
export class QualityAssuranceComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Quality Assurance');
  }
}
