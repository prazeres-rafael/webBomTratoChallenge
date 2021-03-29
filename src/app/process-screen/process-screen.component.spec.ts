import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProcessScreenComponent } from './process-screen.component';

describe('ProcessScreenComponent', () => {
  let component: ProcessScreenComponent;
  let fixture: ComponentFixture<ProcessScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProcessScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
