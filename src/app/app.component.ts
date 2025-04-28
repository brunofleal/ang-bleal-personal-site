import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from "./section/section.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, SectionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'personal-site-bleal';
}
