import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from "./section/section.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, SectionComponent],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    title = 'personal-site-bleal';
}
