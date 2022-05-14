import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulinaComponent } from './insulina.component';

describe('InsulinaComponent', () => {
  let component: InsulinaComponent;
  let fixture: ComponentFixture<InsulinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsulinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsulinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
