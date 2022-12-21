import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroughtComponent } from './brought.component';

describe('BroughtComponent', () => {
  let component: BroughtComponent;
  let fixture: ComponentFixture<BroughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
