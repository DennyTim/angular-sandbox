import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingsItemComponent } from './star-ratings-item.component';

describe('StarRatingsItemComponent', () => {
  let component: StarRatingsItemComponent;
  let fixture: ComponentFixture<StarRatingsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
