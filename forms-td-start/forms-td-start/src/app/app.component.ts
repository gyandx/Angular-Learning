import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // we can use viewchild to access form object before or after submit.
  @ViewChild('userForm') signUpForm: NgForm;
  defaultSelect = 'pet';
  answer: string = '';
  gender = ['Male', 'Female', 'Others'];
  defaultGender = 'Male';
  userInfo = {
    username: '',
    email: '',
    gender: '',
    question: '',
    answer: ''
  }
  toggleUserData: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // using setValue
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer:'',
    //   gender:'Female'
    // });

    // using patchValue
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // submitForm(form: NgForm){
  //   console.log(form)
  // }

  submitForm(){
    console.log(this.signUpForm)
    this.toggleUserData = !this.toggleUserData;
    this.userInfo.username = this.signUpForm.value.userData.username;
    this.userInfo.email = this.signUpForm.value.userData.email;
    this.userInfo.question = this.signUpForm.value.secret;
    this.userInfo.answer = this.signUpForm.value.questionAnswer;
    this.userInfo.gender = this.signUpForm.value.gender;
  }

  resetForm(){
    this.signUpForm.reset();
  }
}
