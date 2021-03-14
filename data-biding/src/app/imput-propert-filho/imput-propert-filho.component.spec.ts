import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputPropertFilhoComponent } from './imput-propert-filho.component';

describe('ImputPropertFilhoComponent', () => {
  let component: ImputPropertFilhoComponent;
  let fixture: ComponentFixture<ImputPropertFilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputPropertFilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputPropertFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
