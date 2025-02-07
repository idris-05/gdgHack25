import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarclubuserComponent } from './sidebarclubuser.component';

describe('SidebarclubuserComponent', () => {
  let component: SidebarclubuserComponent;
  let fixture: ComponentFixture<SidebarclubuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarclubuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarclubuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
