import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  // @Input() user : any;
  status:any;
  userForm= this.fb.group({
    _id: ['', [Validators.required]],
    fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    displayName: ['', [Validators.required]],
    title: ['', [Validators.required]],
    userLevel: ['', [Validators.required, Validators.min(20000), Validators.max(200000)]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    status: ['', [Validators.required]],
  });
  user:any;
  @Output() onCancelUpdateEvent: EventEmitter<any>
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef: MatDialogRef<EditUserComponent>,
              private userService: UserServiceService,
              private fb: FormBuilder) {
                this.user = data.name;
                console.log("firstName : ",this.user);
                this.onCancelUpdateEvent = new  EventEmitter();
              }
      
  
  ngOnInit(): void {
    this.userForm.setValue({...this.user})
    console.log("userForm",this.userForm);
    
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log('changes: ', changes);
  //   console.log('changes: ', changes['user'].currentValue);
  //   this.userForm.setValue({...changes['user'].currentValue})
  // }
  // closeDialogue(){
  //   this.dialogRef.close(false);
  // }
  
  closeDialog(){
     this.dialogRef.close(false)
  }

  updateEmployee(){
    console.log("user: ", this.userForm.value);
    this.userService.updateUser(this.userForm.value)
    .subscribe({
     next: (result)=>{
      console.log("result: ", result);
     this.userService.getAllUsers()
       .subscribe({
        next: (data: any)=>{
         console.log("data: ", data);
         this.userService.usersList = data;
          
       },
       error: ()=>{},
       complete: ()=>{}
      })
    },
    error: ()=>{},
    complete: ()=>{},
  })
  }
  cancelUpdateForm(){
    this.onCancelUpdateEvent.emit();
  }
  statusActive(){
   console.log("status:", this.userForm.controls['status'].value);
   this.userForm.patchValue({status:'Active'})
   this.status = this.userForm.controls['status'].value
   console.log("active",this.status);
   
  }
  statusInactive(){
    console.log("status:", this.userForm.controls['status'].value);
    this.userForm.patchValue({status:'Inactive'})
    this.status = this.userForm.controls['status'].value
    console.log("inactive",this.status);
    
   }


}


