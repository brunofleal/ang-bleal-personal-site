import { Component, OnDestroy, OnInit } from '@angular/core';
import { bootstrapEyeFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Subscription, timer } from 'rxjs';

type Project = { title: string; description: string; link: string; imgSrc: string; };

@Component({
    selector: 'app-open-source-projects',
    imports: [NgIcon],
    templateUrl: './open-source-projects.component.html',
    styleUrl: './open-source-projects.component.css',
    viewProviders: [provideIcons({ bootstrapEyeFill })]
})
export class OpenSourceProjectsComponent implements OnInit, OnDestroy  {
    currentIndex: number = 0;
    projects: Project[] = [
        { title: 'Speech Therapist Personal Site', description: 'React + TS + Tailwind SPA', link: 'http://aurorafono.com.br', imgSrc: 'assets/images/projeto-2.PNG' },
        { title: 'Dota Matchmaking Calculator', description: 'React SPA application for calculating statistics for dota 2 game', link: 'https://brunofleal.github.io/d2checker/', imgSrc: 'assets/images/project-1.PNG' },
        { title: 'Car listing Site', description: 'React + TS + MaterialUI', link: 'http://www.parkbus.com.br', imgSrc: 'assets/images/projeto-3.PNG' },
    ];
    nextSlideDelay: number = 10000;
    subscription !: Subscription;

    ngOnInit() {
        this.subscription = timer(0, this.nextSlideDelay).subscribe(result =>
            this.currentIndex =(this.currentIndex + 1) % this.projects.length
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    prevSlide(): void {
        this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    }

    nextSlide(): void {
        this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    }

    goToSlide(index: number): void {
        if (index >= 0 && index < this.projects.length) {
            this.currentIndex = index;
        }
    }

    get currentProject() {
        return this.projects[this.currentIndex];
    }
}

