import {Component} from '@angular/core';
import {PageHeaderComponent} from "../page-header/page-header.component";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-corporate-trainings',
  standalone: true,
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './corporate-trainings.component.html',
})
export class CorporateTrainingsComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Corporate Training');
  }
}
