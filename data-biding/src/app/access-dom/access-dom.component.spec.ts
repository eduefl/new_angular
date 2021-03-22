import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDomComponent } from './access-dom.component';

describe('AccessDomComponent', () => {
  let component: AccessDomComponent;
  let fixture: ComponentFixture<AccessDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
