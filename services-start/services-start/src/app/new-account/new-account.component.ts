import { Component, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { LoginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoginService] we have provide the service in app module so that it can be used in any component
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoginService, private accountService: DataService){
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert('New status:- ' + status);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    // using accountService to add new account
    this.accountService.accountAdd(accountName, accountStatus);

    // this.loggingService.loginStatusChange(accountStatus); //moved loginservice to a single service
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
