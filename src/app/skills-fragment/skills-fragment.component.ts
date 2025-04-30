import { Component } from '@angular/core';
import { skillsGroups } from './skills-fragment.constants';
import { SkillSetArea } from './skills-fragment.type';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {bootstrapArrowReturnRight} from '@ng-icons/bootstrap-icons'


@Component({
  selector: 'app-skills-fragment',
  imports: [NgIcon],
  templateUrl: './skills-fragment.component.html',
  styleUrl: './skills-fragment.component.css',
  viewProviders: [provideIcons({ bootstrapArrowReturnRight })]
})
export class SkillsFragmentComponent {
  skillGroups: SkillSetArea[] = skillsGroups
}
