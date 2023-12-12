import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishViewComponent } from './fish-view.component';

describe('FishViewComponent', () => {
  let component: FishViewComponent;
  let fixture: ComponentFixture<FishViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishViewComponent]
    });
    fixture = TestBed.createComponent(FishViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
