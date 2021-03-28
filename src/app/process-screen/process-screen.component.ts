import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { faComments, faEye, faList, faPen, faPlus, faSignOutAlt, faTh, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FilterService } from '../models/filter.service';
import { ProcessPage } from '../models/process';
import { ProcessService } from '../services/process.service';

@Component({
  selector: 'app-process-screen',
  templateUrl: './process-screen.component.html',
  styleUrls: ['./process-screen.component.scss']
})
export class ProcessScreenComponent implements OnInit {

  faTh = faTh;
  faList = faList;
  faPen = faPen;
  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faSingOutAlt = faSignOutAlt;
  faPlus = faPlus;
  faComments = faComments;
  filter = {} as FilterService;
  processInfo: ProcessPage;
  chatProcess: string;
  chatValue: string;
  chatComplainant: string;
  card = false;
  table = true;
  
  constructor(
    private router: Router,
    private processService: ProcessService
  ) {
   }

  ngOnInit(): void {
    this.getProcess();
  }

  getProcess() {
    this.filter.process = 'process';
    this.processService.getProcess(this.filter).subscribe(
      (infoProcess: ProcessPage) => {
        if (infoProcess) {
          this.processInfo = infoProcess;
        }
      }
    )
  }

  openForm(number, value, complainant) {
    this.chatProcess = number;
    this.chatValue = value;
    this.chatComplainant = complainant;
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  goCard() {
    this.card = false;
    this.table = true;
  }

  goTable() {
    this.table = false;
    this.card = true;
  }

  goToEdit(id) {
    this.router.navigate(['/process-edit', id]);
  }

}
