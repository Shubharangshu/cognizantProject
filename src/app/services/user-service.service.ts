import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usersList:any =[]
  constructor(private http: HttpClient,) { }

  getAllUsers(){
    console.log("usersList of services",this.usersList);
    
    return this.http.get('http://localhost:5000/users')
  }
  createUser(users:any){
    console.log("users: ",users);
   return this.http.post('http://localhost:5000/users',users)
  }
  updateUser(user: any){
   return this.http.put('http://localhost:5000/users/'+user._id,user)

  }
  deleteUser(id: any){
    return this.http.delete('http://localhost:5000/users/'+id)
  }
}
