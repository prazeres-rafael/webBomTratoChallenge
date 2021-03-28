import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-add',
  templateUrl: './process-add.component.html',
  styleUrls: ['./process-add.component.scss']
})
export class ProcessAddComponent implements OnInit {

  checkoutForm: FormGroup;
  faSingOutAlt = faSignOutAlt;
  processNumberError = false;
  processValueError = false;
  processOfficeError = false;
  processComplainantError = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm() {
    this.checkoutForm = this.formBuilder.group({
      process_number: [''],
      process_value: [''],
      process_office: [''],
      process_complainant: ['']
    })
  }

  addProcess(){
    if(this.checkoutForm.get('process_number').value.length < 12) {
      this.processNumberError = true;
    } else {
      this.processNumberError = false;
    }
    if(this.checkoutForm.get('process_value').value <= 30000) {
      this.processValueError = true;
    } else {
      this.processValueError = false;
    }
    if(this.checkoutForm.get('process_office').value.length == 0) {
      this.processOfficeError = true;
    } else {
      this.processOfficeError = false;
    }
    if(this.checkoutForm.get('process_complainant').value.length == 0) {
      this.processComplainantError = true;
    } else {
      this.processComplainantError = false;
    }
    if (this.processNumberError == false && this.processValueError == false && this.processOfficeError == false && this.processComplainantError == false){
      this.router.navigate(['/process'])
    }
  }

}
