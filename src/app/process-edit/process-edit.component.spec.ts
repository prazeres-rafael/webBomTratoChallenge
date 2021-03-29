import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProcessEditComponent } from './process-edit.component';

describe('ProcessEditComponent', () => {
  let component: ProcessEditComponent;
  let fixture: ComponentFixture<ProcessEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProcessEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
