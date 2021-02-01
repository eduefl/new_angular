import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBidenComponent } from './class-biden.component';

describe('ClassBidenComponent', () => {
  let component: ClassBidenComponent;
  let fixture: ComponentFixture<ClassBidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
