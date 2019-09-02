import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackvueComponent } from './trackvue.component';

describe('TrackvueComponent', () => {
  let component: TrackvueComponent;
  let fixture: ComponentFixture<TrackvueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackvueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackvueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
