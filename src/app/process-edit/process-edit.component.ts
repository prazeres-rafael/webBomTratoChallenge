import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../models/filter.service';
import { ProcessPage } from '../models/process';
import { ProcessService } from '../services/process.service';

@Component({
  selector: 'app-process-edit',
  templateUrl: './process-edit.component.html',
  styleUrls: ['./process-edit.component.scss']
})
export class ProcessEditComponent implements OnInit {

  checkoutForm: FormGroup;
  faSingOutAlt = faSignOutAlt;
  processNumberError = false;
  processValueError = false;
  processOfficeError = false;
  processComplainantError = false;
  filter = {} as FilterService;
  processInfo: ProcessPage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private processService: ProcessService
  ) { }

  ngOnInit(): void {
    this.clearForm();
    this.getProcess();
  }

  getProcess() {
    this.filter.process = 'process/' + this.route.snapshot.paramMap.get('id');
    this.processService.getProcess(this.filter).subscribe(
      (infoProcess: ProcessPage) => {
        if (infoProcess) {
          this.processInfo = infoProcess;
          this.checkoutForm.get('process_number').setValue(this.processInfo.process_number);
          this.checkoutForm.get('process_value').setValue(this.processInfo.value);
          this.checkoutForm.get('process_office').setValue(this.processInfo.office);
          this.checkoutForm.get('process_complainant').setValue(this.processInfo.complainant);
        }
      }
    );
  }

  clearForm() {
    this.checkoutForm = this.formBuilder.group({
      process_number: [''],
      process_value: [''],
      process_office: [''],
      process_complainant: ['']
    });
  }

  editProcess() {
    if (this.checkoutForm.get('process_number').value.length < 12) {
      this.processNumberError = true;
    } else {
      this.processNumberError = false;
    }
    if (this.checkoutForm.get('process_value').value <= 30000) {
      this.processValueError = true;
    } else {
      this.processValueError = false;
    }
    if (this.checkoutForm.get('process_office').value.length === 0) {
      this.processOfficeError = true;
    } else {
      this.processOfficeError = false;
    }
    if (this.checkoutForm.get('process_complainant').value.length === 0) {
      this.processComplainantError = true;
    } else {
      this.processComplainantError = false;
    }
    if (this.processNumberError === false && this.processValueError === false &&
      this.processOfficeError === false && this.processComplainantError === false) {
      this.filter.product = { id: this.route.snapshot.paramMap.get('id'),
        process_number: this.checkoutForm.get('process_number').value,
        value: this.checkoutForm.get('process_value').value,
        office: this.checkoutForm.get('process_office').value,
        complainant: this.checkoutForm.get('process_complainant').value
      };
      this.processService.editProcess(this.filter).subscribe(
        (infoProcess: ProcessPage) => {
          if (infoProcess) {
            this.router.navigate(['/process']);
          }
        }
      );
    }
  }

}
