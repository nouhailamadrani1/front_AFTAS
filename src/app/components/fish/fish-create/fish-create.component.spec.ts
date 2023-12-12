import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishCreateComponent } from './fish-create.component';

describe('FishCreateComponent', () => {
  let component: FishCreateComponent;
  let fixture: ComponentFixture<FishCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishCreateComponent]
    });
    fixture = TestBed.createComponent(FishCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
