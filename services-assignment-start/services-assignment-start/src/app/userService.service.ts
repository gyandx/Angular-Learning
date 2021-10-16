import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class UserService{

  // active and inactive users array
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  // event emitter to emit the count values
  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  // function to push or delete to inactive
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  // function to push or delete to active
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
