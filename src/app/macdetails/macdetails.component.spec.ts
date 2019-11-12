import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacdetailsComponent } from './macdetails.component';

describe('MacdetailsComponent', () => {
  let component: MacdetailsComponent;
  let fixture: ComponentFixture<MacdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
