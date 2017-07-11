import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  titke = "submit";

  constructor() { }

  ngOnInit() {
  }

  addContact(){
    console.log("submit form");
    var submit = "form sumit";
    return submit;
  }

}
