import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/canDeactivate.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes  = [
  {path:'', component: HomeComponent}, //default page i.e localhost:4200/home
  // {path:'users', component: UsersComponent},
  // {path:'users/:id/:name', component: UserComponent}, // used to pass parameters
  {path:'users', component: UsersComponent, children: [
    {path:':id/:name', component: UserComponent}
  ]},
  // {path:'servers', component: ServersComponent},
  // {path:'servers/:id', component: ServerComponent},
  // {path:'servers/:id/edit', component: EditServerComponent}
  {path:'servers',
  //  canActivate: [AuthGuardService] ,
  canActivateChild: [AuthGuardService],
  component: ServersComponent, children: [
    {path:':id', component: ServerComponent, resolve: {server: ServerResolver}},
    {path:':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
  ]},
  // {path: 'notFound', component: PagenotfoundComponent},

  // statically send message through data object
  {path: 'notFound', component: ErrorComponent, data: {message: 'Page Not Found'}},
  //this is called wildcard routes
  {path: '**', redirectTo: '/notFound'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),

    // useHash is used to put # in url to host the app in server properly and old browsers also not use the / in urls
    // RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
