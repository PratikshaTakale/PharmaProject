import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrls: ['./appointmentform.component.css']
})
export class AppointmentformComponent {

  
  public empform:any;
  public theader:any=['First Name','Last Name','Email','Phone Number','Gender','Comment & Request']
  public isFormSubmit:boolean=false;
  submitteddata:any=[];

  constructor(private fb:FormBuilder , private api:ApiService){
    this.empform=this.fb.group({
      id:[''],
      fname : ['' , [Validators.required]],
      lname:['' ,[Validators.required]],
      email:['' ,[Validators.required , Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phno:[' '],
      gender:[''],
      date:[''],
      pass:['']
      
    })
  }
  
  onSubmit(){
/*     console.log(this.empform.value); */
    this.isFormSubmit=true;
    this.submitteddata.push(this.empform.value);
    console.log(this.submitteddata);
  

  }

  ondelete(data:any){

    this.submitteddata.forEach((element: any,Index: any)=>{
      console.log(element,Index);
      if(element.id==data.id){
        this.submitteddata.splice(Index,1);
      }
     }) 
  }

  sendapidata(){
    this.api.senddata(this.empform.value);
    
  }

  get f(){
    return this.empform.controls;
  }

}
