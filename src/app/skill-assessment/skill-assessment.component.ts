import {Component} from '@angular/core';
import {PageHeaderComponent} from "../page-header/page-header.component";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-skill-assessment',
  standalone: true,
  imports: [
    PageHeaderComponent
  ],
  templateUrl: './skill-assessment.component.html',
})
export class SkillAssessmentComponent {
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Skill Assessment');
  }
}
