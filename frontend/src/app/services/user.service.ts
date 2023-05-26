import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { user } from '../resources/datatypes/user';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../resources/interfaces/UserLogin';
import { USER_LOGIN_URL } from 'src/url';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<user>(this.getUserFromLocal());
  public userObservable:Observable<user>;
  constructor(private http:HttpClient, private toastrService : ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:UserLogin):Observable<user>{
    return this.http.post<user>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUsertoLocalStore(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Foodmine ${user.name}`,
            'login successful'
          )
        },
        error:() => {
          this.toastrService.error('If you don\'t have an account then please Sign Up','login failed')
        }
      })
    );
  }

  logout(){
    this.userSubject.next(new user());
    localStorage.removeItem('FoodzieUser');
    window.location.reload();
  }

  private setUsertoLocalStore(user:user){
    localStorage.setItem('FoodzieUser', JSON.stringify(user));
  }

  private getUserFromLocal():user{
    const UserJson = localStorage.getItem('FoodzieUser');
    if(UserJson) return JSON.parse(UserJson) as user;
    else return new user();
  }
}
