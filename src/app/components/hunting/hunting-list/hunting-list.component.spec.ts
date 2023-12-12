import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingListComponent } from './hunting-list.component';

describe('HuntingListComponent', () => {
  let component: HuntingListComponent;
  let fixture: ComponentFixture<HuntingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingListComponent]
    });
    fixture = TestBed.createComponent(HuntingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
