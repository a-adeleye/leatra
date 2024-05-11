import {Routes} from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeComponent} from "./home/home.component";
import {OurServicesComponent} from "./our-services/our-services.component";
import {CorporateTrainingsComponent} from "./corporate-trainings/corporate-trainings.component";
import {ELearningComponent} from "./e-learning/e-learning.component";
import {SkillAssessmentComponent} from "./skill-assessment/skill-assessment.component";
import {QualityAssuranceComponent} from "./quality-assurance/quality-assurance.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'our-services/corporate-training',
    component: CorporateTrainingsComponent
  },
  {
    path: 'our-services/e-learning',
    component: ELearningComponent
  },
  {
    path: 'our-services/skill-assessment',
    component: SkillAssessmentComponent
  },
  {
    path: 'our-services/quality-assurance',
    component: QualityAssuranceComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];
