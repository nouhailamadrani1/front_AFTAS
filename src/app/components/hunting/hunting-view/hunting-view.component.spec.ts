import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingViewComponent } from './hunting-view.component';

describe('HuntingViewComponent', () => {
  let component: HuntingViewComponent;
  let fixture: ComponentFixture<HuntingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingViewComponent]
    });
    fixture = TestBed.createComponent(HuntingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
