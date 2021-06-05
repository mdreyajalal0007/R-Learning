import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  form: FormGroup;
  constructor(
    private formbuilder: FormBuilder
  ) { this.createFrom() }


createFrom(){
  this.form=this.formbuilder.group({


    name:['',Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
      
    ])],

    email:['',Validators.compose([
      Validators.required,
      this.validateEmail
          ])],

    
     
     massage:['',Validators.compose([

      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)
     ])]
  })
}

validateEmail(controls) {
    
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
  if (regExp.test(controls.value)) {
    return null; 
  } else {
    return { 'validateEmail': true } 
  
  }
} 


 
  ngOnInit(): void {
    

  }
}
