
export class AuthService{
  isLoggedIn: boolean = false;

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {resolve(this.isLoggedIn)},1000)
      }
      );
      return promise;
  }

  loggedIn() {
    this.isLoggedIn = true;
  }

  loggedOut(){
    this.isLoggedIn = false;
  }
}
