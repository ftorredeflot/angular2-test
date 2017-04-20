import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LluisComponent } from './lluis.component';

describe('LluisComponent', () => {
  let component: LluisComponent;
  let fixture: ComponentFixture<LluisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LluisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LluisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
