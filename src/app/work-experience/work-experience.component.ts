import { Component, Input } from '@angular/core';
import { WorkExperience } from './work-experience.type';
import { SplitDotPipe } from './work-experience.pipe';

@Component({
    selector: 'app-work-experience',
    imports: [SplitDotPipe,],
    templateUrl: './work-experience.component.html',
    styleUrl: './work-experience.component.css',

})
export class WorkExperienceComponent {
    @Input({ required: true }) workExperience!: WorkExperience;
}
