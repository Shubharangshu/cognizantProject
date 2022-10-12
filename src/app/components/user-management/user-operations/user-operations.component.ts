import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user-service.service';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-operations',
  templateUrl: './user-operations.component.html',
  styleUrls: ['./user-operations.component.scss']
})
export class UserOperationsComponent implements OnInit {
  currUser:any={}
  formFlag="something"
  constructor(private userService: UserServiceService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe({
        next: (data: any)=>{
         console.log("data: ",data);
         this.userService.usersList = data;
          
       },
       error: ()=>{},
       complete: ()=>{}
      })
  }
  editUser(user: any){
    console.log(user);
    this.formFlag='update'
    this.currUser = {...user}
    console.log("currUser", this.currUser);
    
    this.dialog.open(EditUserComponent,{width: "500px",
    panelClass: 'confirm-dialog-container',
      data:{
        name: this.currUser
      }
    })
    
    
  }
}
// {
//   panelClass: 'confirm-dialog-container',
//   disableClose: true,
//   width: "500px",}
// .afterClosed().subscribe(res=>{
//   if(res){
//     console.log(res);
    
//   }
//   console.log("error");
  
// })