import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRoadmapComponent } from './display-roadmap.component';

describe('DisplayRoadmapComponent', () => {
  let component: DisplayRoadmapComponent;
  let fixture: ComponentFixture<DisplayRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayRoadmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
