import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingUpdateComponent } from './hunting-update.component';

describe('HuntingUpdateComponent', () => {
  let component: HuntingUpdateComponent;
  let fixture: ComponentFixture<HuntingUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingUpdateComponent]
    });
    fixture = TestBed.createComponent(HuntingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
