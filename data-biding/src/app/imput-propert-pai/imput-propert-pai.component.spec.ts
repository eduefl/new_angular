import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputPropertPaiComponent } from './imput-propert-pai.component';

describe('ImputPropertPaiComponent', () => {
  let component: ImputPropertPaiComponent;
  let fixture: ComponentFixture<ImputPropertPaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputPropertPaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputPropertPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
