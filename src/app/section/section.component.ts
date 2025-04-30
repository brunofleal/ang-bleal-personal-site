import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input({ required: false }) imagePath!: string;
  @Input({ required: false }) toHref!: string;
}
