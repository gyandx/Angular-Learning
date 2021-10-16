import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup; // creating formGroup
  forbiddenUserName = ['Ankit', 'Gyan'];

  ngOnInit(): void{
    // assigning value to formGroup and formControl
    this.signUpForm = new FormGroup({
      // creating nested formGroup
      'userData': new FormGroup({
        // this in forbiddenUserNames will not work as this is not a part of class so we have to use bind to make it work.
        'username': new FormControl(null, [Validators.required, this.forbiddenUserNames.bind(this)]), // adding Validator
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenUserEmail), // adding multiple validators
      }),
      // 'username': new FormControl(null, Validators.required), // adding Validator
      // 'email': new FormControl(null, [Validators.required, Validators.email]), // adding multiple validators
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    // value changes is an observable which can be use to observe any change in value
    // this.signUpForm.valueChanges.subscribe(value => {console.log(value)});

    // status changes is an observable which can be use to observe any change in status
    this.signUpForm.statusChanges.subscribe(status => {console.log(status)});

    // let data = (<FormArray>this.signUpForm.get('hobbies')).controls[0];
    // setValue
    this.signUpForm.setValue({
      'userData': {
        'username': 'Nitesh',
        'email': 'nts@yahoo.com'
      },
      'gender':'male',
      'hobbies': []
    })
  }

  submitForm(): void{
    console.log(this.signUpForm);
  }

  // adding hobby in hobbies array
  addHobby(): void{
    const hobby = new FormControl(null, Validators.required);
    // on clicking push data in hobbies and we have to explicitly cast into FormArray
    (<FormArray>this.signUpForm.get('hobbies')).push(hobby);
  }

  // creating custom validators
  forbiddenUserNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserName.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }else{
      return null; // we can't return {'nameIsForbidden' : false} or we can omit the else part
    }
  }

  // async validators for validating a field from web
  forbiddenUserEmail(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'abc@gmail.com'){
          resolve({'emailIsInvalid' : true});
        }else{
          resolve(null);
        }
      },1500);
    })
    return promise;
  }
}
