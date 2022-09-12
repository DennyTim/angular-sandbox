import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarItemComponent } from './progress-bar-item.component';

describe('ProgressBarItemComponent', () => {
  let component: ProgressBarItemComponent;
  let fixture: ComponentFixture<ProgressBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
