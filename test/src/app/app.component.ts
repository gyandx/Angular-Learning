import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';

  contactForm: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.pattern("[a-zA-Z]+"),Validators.required]),
      age: new FormControl('', [Validators.required, this.ageValidator.bind(this)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.pattern("[0-9]{10}"), Validators.required]),
      gender: new FormControl('male')
    });
  }

  ageValidator(f:FormControl): {[s: string]: boolean}{
    if(f.value < 18 || f.value > 60){
       return {'ageRange': true};
    }else{
      return null;
    }
  }

  submitForm(form){
    console.log(form)
  }
}
