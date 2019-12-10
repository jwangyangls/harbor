import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarborEchartsComponent } from './harbor-echarts.component';

describe('HarborEchartsComponent', () => {
  let component: HarborEchartsComponent;
  let fixture: ComponentFixture<HarborEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarborEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarborEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
