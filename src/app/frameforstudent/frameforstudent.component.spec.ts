import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameforstudentComponent } from './frameforstudent.component';

describe('FrameforstudentComponent', () => {
  let component: FrameforstudentComponent;
  let fixture: ComponentFixture<FrameforstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameforstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameforstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
