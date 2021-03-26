import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessScreenComponent } from './process-screen.component';

describe('ProcessScreenComponent', () => {
  let component: ProcessScreenComponent;
  let fixture: ComponentFixture<ProcessScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
