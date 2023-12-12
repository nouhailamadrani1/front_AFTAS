import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingUpdateComponent } from './ranking-update.component';

describe('RankingUpdateComponent', () => {
  let component: RankingUpdateComponent;
  let fixture: ComponentFixture<RankingUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingUpdateComponent]
    });
    fixture = TestBed.createComponent(RankingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
