import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogconComponent } from './dailogcon.component';

describe('DailogconComponent', () => {
  let component: DailogconComponent;
  let fixture: ComponentFixture<DailogconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailogconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
