import {Component} from '@angular/core';
import {PageHeaderComponent} from "../page-header/page-header.component";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-e-learning',
  standalone: true,
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './e-learning.component.html',
})
export class ELearningComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('E learning');
  }
}
