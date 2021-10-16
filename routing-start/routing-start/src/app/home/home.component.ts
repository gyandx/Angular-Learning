import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //inject router to navigate between pages
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navigateToServer(){
    //the navigate method is used to navigate to different component
    // this.router.navigate(['/servers']);
    // this.router.navigate(['servers']);
    this.router.navigate(['../servers']);
  }

  navigateToServerOne(id: number){
    //the navigate method, adding queryParams and fragment
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowed: 1}, fragment: 'show'});
  }

  logIn(){
    this.authService.loggedIn();
  }

  loggedOut(){
    this.authService.loggedOut();
  }

}
