import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsCloudComponent } from './points-cloud.component';

describe('PointsCloudComponent', () => {
  let component: PointsCloudComponent;
  let fixture: ComponentFixture<PointsCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
