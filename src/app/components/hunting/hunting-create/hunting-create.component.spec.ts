import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingCreateComponent } from './hunting-create.component';

describe('HuntingCreateComponent', () => {
  let component: HuntingCreateComponent;
  let fixture: ComponentFixture<HuntingCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingCreateComponent]
    });
    fixture = TestBed.createComponent(HuntingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
