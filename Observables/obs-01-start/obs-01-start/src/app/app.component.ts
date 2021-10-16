import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivate: boolean = false;
  subscribe: Subscription

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscribe = this.userService.activatedEmitter.subscribe(data => {
      this.userActivate = data;
    })
  }

  ngOnDestroy(): void{
    this.subscribe.unsubscribe();
  }
}
