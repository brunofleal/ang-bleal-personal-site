import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from "./section/section.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { workExperience } from './work-experience/work-experience.constants';
import { SkillsFragmentComponent } from "./skills-fragment/skills-fragment.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { OpenSourceProjectsComponent } from './open-source-projects/open-source-projects.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, SectionComponent, WorkExperienceComponent, OpenSourceProjectsComponent, SkillsFragmentComponent, NgIcon],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin })]

})
export class AppComponent {
    title = 'personal-site-bleal';
    workExperience = workExperience;
}
