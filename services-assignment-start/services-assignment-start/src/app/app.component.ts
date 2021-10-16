import { Component } from '@angular/core';
import { UserService } from './userService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // inactiveToActiveUser: number;
  // activeToInactiveUser: number;
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  // constructor(private userService: UserService){
  //   this.userService.userSetToInactive.subscribe((count: number) => {
  //     this.activeToInactiveUser = count;
  //   })
  //   this.userService.userSetToActive.subscribe((count: number) => {
  //     this.inactiveToActiveUser = count;
  //   })
  // }

}
