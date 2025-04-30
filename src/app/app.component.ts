import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from "./section/section.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { workExperience } from './work-experience/work-experience.constants';
import { SkillsFragmentComponent } from "./skills-fragment/skills-fragment.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, SectionComponent, WorkExperienceComponent, SkillsFragmentComponent],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    title = 'personal-site-bleal';
    workExperience = workExperience
}
