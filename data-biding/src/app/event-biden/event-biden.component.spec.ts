import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBidenComponent } from './event-biden.component';

describe('EventBidenComponent', () => {
  let component: EventBidenComponent;
  let fixture: ComponentFixture<EventBidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
