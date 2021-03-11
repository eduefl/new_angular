import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBaidenComponent } from './two-way-data-baiden.component';

describe('TwoWayDataBaidenComponent', () => {
  let component: TwoWayDataBaidenComponent;
  let fixture: ComponentFixture<TwoWayDataBaidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDataBaidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataBaidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
