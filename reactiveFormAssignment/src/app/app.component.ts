import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactiveFormAssignment';
  projectForm: FormGroup;
  subscriptions = ['Stable', 'Critical', 'Finished'];
  showValues: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.projectForm = new FormGroup(
      {
        // 'name': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
        'name': new FormControl(null, Validators.required, this.forbiddenProjectName),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'subscription': new FormControl('Stable')
      }
    )
  }

  submitForm() {
    // console.log(this.projectForm);
    this.showValues = this.projectForm.status === 'INVALID' ? false : true;
  }

  // custom validator
  // forbiddenProjectName(control: FormControl): {[s: string]: boolean}{
  //   if (control.value === 'Test'){
  //     return {'forbiddenName': true};
  //   }else{
  //     return null;
  //   }
  // }

  // custom async validator
  forbiddenProjectName(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test"){
          resolve({'forbiddenName': true})
        }else{
          resolve(null);
        }
      },1000)
    });
    return promise;
  }
}
