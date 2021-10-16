import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoginService] //using login service, we have provide the service in app module so that it can be used in any component
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  //injecting DI in loginService
  constructor(private loginService: LoginService, private accountService: DataService){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});

    //using updateService to update status
    this.accountService.updateAccount(this.id, status);

    //emitting the status from service on button click
    this.accountService.statusUpdated.emit(status);

    // this.loginService.loginStatusChange(status); // calling the loginService, moved loginService to dataService
    // console.log('A server status changed, new status: ' + status);
  }
}
