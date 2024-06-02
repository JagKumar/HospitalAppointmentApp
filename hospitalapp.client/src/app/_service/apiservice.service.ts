import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewAppointment } from '../_models/newappointment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  baseUrl1: string = "https://localhost:5154/api/";
  baseUrl: string ="http://localhost:5154/api/";

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<NewAppointment[]> {
    debugger
    return this.httpClient.get<NewAppointment[]>(this.baseUrl + 'Appointment');
  }

  getById(id: string) {
    return this.httpClient.get<NewAppointment>(`${this.baseUrl}Appointment/${id}`);
  }

  create(appointment: NewAppointment) {
    return this.httpClient.post(`${this.baseUrl}Appointment`, appointment);
  }

  update(id: string, petdetails: any) {
    return this.httpClient.put(`${this.baseUrl}Appointment`, id, petdetails);
  }
  delete(id: string) {
    return this.httpClient.delete<NewAppointment>(`${this.baseUrl}Appointment/${id}`);
  }
}
