import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdfAssignment';
  subscription = ['Basic', 'Advance', 'Pro'];
  defaultSubscription = 'Advance';
  toggleInvalidMsg: boolean = false;
  toggleValues: boolean = false;
  infoForm = {
    email: '',
    subscription: '',
    password: ''
  }

  submitForm(form: NgForm){
    // console.log(form.invalid)
    this.infoForm.email = form.value.email;
    this.infoForm.subscription = form.value.subscription;
    this.infoForm.password = form.value.password;

    if (form.invalid){
      this.toggleInvalidMsg = true;
      this.toggleValues = false;
    }else{
      this.toggleInvalidMsg = false;
      this.toggleValues = true;
    }
  }
}
