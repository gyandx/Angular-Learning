import { Injectable } from "@angular/core";
import { UserService } from "./userService.service";

// using providedIn to lazy load service directly in app module provider
@Injectable({
  providedIn: 'root'
})

export class CounterService{

  // used to store active and inactive counts
  inActiveCount: number = 0;
  activeCount: number = 0;

  constructor(private userService: UserService){}

  // function to increment activetoinactive count and emit it
  activeToInactive(){
    this.inActiveCount++;
    this.userService.userSetToInactive.emit(this.inActiveCount);
  }

  // function to increment inactivetoactive count and emit it
  inactiveToActive(){
    this.activeCount++;
    this.userService.userSetToActive.emit(this.activeCount);
  }
}
