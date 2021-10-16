import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counterService.service';
import { UserService } from '../userService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];
  activeCount: number;

  constructor(private userService: UserService, private countService: CounterService){
    this.userService.userSetToActive.subscribe((count: number) => {
      this.activeCount = count;
    })
  }

  ngOnInit(){
    this.users = this.userService.activeUsers;
  }

  setToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.onSetToInactive(id);
    this.countService.inactiveToActive();
  }
}
