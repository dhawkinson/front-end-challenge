import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QplComponent } from './qpl.component';

describe('QplComponent', () => {
  let component: QplComponent;
  let fixture: ComponentFixture<QplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
