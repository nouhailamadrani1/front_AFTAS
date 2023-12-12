import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishUpdateComponent } from './fish-update.component';

describe('FishUpdateComponent', () => {
  let component: FishUpdateComponent;
  let fixture: ComponentFixture<FishUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishUpdateComponent]
    });
    fixture = TestBed.createComponent(FishUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
