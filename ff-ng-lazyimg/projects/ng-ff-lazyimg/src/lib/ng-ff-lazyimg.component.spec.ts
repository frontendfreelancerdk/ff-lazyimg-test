import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFfLazyimgComponent } from './ng-ff-lazyimg.component';

describe('NgFfLazyimgComponent', () => {
  let component: NgFfLazyimgComponent;
  let fixture: ComponentFixture<NgFfLazyimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFfLazyimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFfLazyimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
