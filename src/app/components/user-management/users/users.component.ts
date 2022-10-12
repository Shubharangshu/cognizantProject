import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDetailsComponent } from 'src/app/components/user-management/user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private dialogRef : MatDialog) { }

  openDialog(){
    this.dialogRef.open(UserDetailsComponent);
  }
  ngOnInit(): void {
  }
  // fullName="";
  // displayName="";
  // title="";
  // userLevel="";
  // email="";
  // phone="";
  // status=""
  // userData:any=[]
  // userForm= this.fb.group({
  //   fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
  //   displayName: ['', [Validators.required]],
  //   title: ['', [Validators.required]],
  //   userLevel: ['', [Validators.required, Validators.min(20000), Validators.max(200000)]],
  //   email: ['', [Validators.required]],
  //   phone: ['', [Validators.required]],
  //   status: ['', [Validators.required]],
  // });
  // constructor(private fb : FormBuilder,
  //             private userService: UserServiceService) { }

  // ngOnInit(): void {
  // }

  // // saveUser(data:NgForm){
  // //   console.log("data :",data);
  // //   this.userData.push(data);
  // //   console.log("userData : ",this.userData);
    
  // saveUser(){
  //   console.log("user :", this.userForm.value);
    
  //   if(!this.userForm.valid){
  //     alert("data is missing for some fields")
  //     return;
  //   }
  //   const userData={
  //     ...this.userForm.value 
  //   }
  //   console.log("employee: ",userData);
    
  //   this.userService.createUser(userData)
  //   .subscribe({
  //     next: (result)=>{
  //       console.log("result: ",result);
  //       this.clearForm()
  //       this.userService.getAllUsers()
  //        .subscribe({
  //         next: (data: any)=>{
  //          console.log("data: ",data);
  //          this.userService.usersList= data;
            
  //        },
  //        error: ()=>{},
  //        complete: ()=>{}
  //       })
  //     },
  //     error:()=>{},
  //     complete:()=>{},
  //   })
    
  // }
  // clearForm(){
  //   this.userForm.reset()
  // }
}
