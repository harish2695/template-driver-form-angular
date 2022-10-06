import { DataService } from './../data/data.service';
import { Registration } from './../data/Registration';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  registraion : Registration = {
    name: null,
    notifications: null,
    alerts: null,
    gender: null,
    subscriptionType: null,
    notes: null
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit  (form:NgForm){
    console.log("form",form.valid)
    this.dataService.postRegistrationForm(this.registraion).subscribe(
      result => console.log("success",result),
      error=> console.log("error",error)
      );

  }

}
