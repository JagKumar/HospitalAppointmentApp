import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../../../_service/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe,formatDate } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent implements OnInit {
  myForm!: FormGroup;
  PetName!: string
  data: any;
  id?: string;
  submitted = false;
  dt:any;
  AppointmentType!:string;
  constructor(
    private formBuilder: FormBuilder,
    private apiserviceservice: ApiserviceService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //this.myForm = new FormGroup(
      this.myForm = this.formBuilder.group(
      {
      petName: new FormControl('', Validators.required),
      petOwnersName: new FormControl('', Validators.required),
      petOwnersAddress: new FormControl('', Validators.required),
      petOwnersContactNo: new FormControl('', Validators.required),
      reasonforAppointment: new FormControl('', Validators.required),
      dateofAppointment: new FormControl('', Validators.required),
      id: new FormControl('0')
    });


    if (this.id) {
      this.apiserviceservice.getById(this.id)
        .subscribe(x => {
          var date = this.formatDate(new Date(x.dateofAppointment!), 'YYYY-MM-dd')
          const data = {
            petName: x.petName,
            petOwnersName: x.petOwnersName,
            petOwnersAddress: x.petOwnersAddress,
            petOwnersContactNo: x.petOwnersContactNo,
            reasonforAppointment: x.reasonforAppointment,
            dateofAppointment:date,
            id: x.id
          };
          this.myForm.patchValue(data);
          this.dt = date;
          this.AppointmentType="Edit Appointment";
        });
    }
    else{
      this.AppointmentType="New Appointment";
    }
  }

  formatDate(date: Date | string, format: string = 'YYYY-MM-dd'): string {
    return this.datePipe.transform(date, format) || '';
  }

  // convenience getter for easy access to form fields
  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm.value);
    if (this.myForm.invalid) {
      return;
    }
   
    this.apiserviceservice.create(this.myForm.value)
      .subscribe((response) => {
        this.router.navigate(['/Appointment']);
      });
  }
  onReset() {
    this.submitted = false;
    this.myForm.reset();
}
}
