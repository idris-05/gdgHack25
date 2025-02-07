import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestClubsComponent } from './guest-clubs.component';

describe('GuestClubsComponent', () => {
  let component: GuestClubsComponent;
  let fixture: ComponentFixture<GuestClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestClubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
