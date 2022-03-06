import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorTasksComponent } from './major-tasks.component';

describe('MajorTasksComponent', () => {
  let component: MajorTasksComponent;
  let fixture: ComponentFixture<MajorTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
