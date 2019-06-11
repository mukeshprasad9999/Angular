import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletedrivenComponent } from './templetedriven.component';

describe('TempletedrivenComponent', () => {
  let component: TempletedrivenComponent;
  let fixture: ComponentFixture<TempletedrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletedrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
