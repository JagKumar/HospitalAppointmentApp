import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { ApiserviceService } from '../../../_service/apiservice.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  AppointmentData: any;
  id?: string;
  constructor(
    private formBuilder: FormBuilder,
    private apiserviceservice: ApiserviceService,
    private route: ActivatedRoute

  ) { }
  ngOnInit(): void {
    
    this.getAllData();
  }

  deleteUser(id: string) { 
    this.apiserviceservice.delete(id).subscribe((response) => {
      this.getAllData();
    });
  }

  getAllData() {
    this.apiserviceservice.getAll().subscribe((response) => {
      this.AppointmentData = response;
    });
  }
}
