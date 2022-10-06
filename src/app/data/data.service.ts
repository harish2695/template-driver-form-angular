import { Registration } from './Registration';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postRegistrationForm(register: Registration){
    return of(register)
  }
}
