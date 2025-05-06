import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations'
import { InViewportModule } from 'ng-in-viewport';


const hidden = { opacity:0 };
const visible = { opacity:1 };
const animationDuration = 1;
const animation = `${animationDuration}s ease-in`;

@Component({
  selector: 'app-section',
  imports: [
    InViewportModule
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  animations: [
    trigger('visibleHidden', [
      transition(':enter', [
        style(hidden),
        animate(animation), style(visible)
      ]),
      transition(':leave', [
        style(visible),
        animate(animation), style(hidden)
      ]),
    ])
  ]
})

export class SectionComponent {
  @Input({ required: false }) imagePath!: string;
  @Input({ required: false }) toHref!: string;
  protected isVisible: boolean = false;

  isInViewPort (event:any) {
    this.isVisible = event.target.visible;
  }

  onVisibilityChange(event: any) {
    const element = event.target;
    if (event.visible) {
      element.classList.add('animate-in');

      setTimeout(() => {
        element.classList.remove('animate-in');
      }, 1000);
    }
  }
}
