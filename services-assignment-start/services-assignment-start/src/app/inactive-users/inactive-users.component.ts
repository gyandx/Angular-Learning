import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counterService.service';
import { UserService } from '../userService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[];
  inActiveCount: number;

  constructor(private userService: UserService, private countService: CounterService){
    this.userService.userSetToInactive.subscribe((count: number) => {
      this.inActiveCount = count;
    })
  }

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }

  setToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
    this.countService.activeToInactive();
  }
}
