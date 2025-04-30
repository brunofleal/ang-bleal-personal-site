import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFragmentComponent } from './skills-fragment.component';

describe('SkillsFragmentComponent', () => {
  let component: SkillsFragmentComponent;
  let fixture: ComponentFixture<SkillsFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
