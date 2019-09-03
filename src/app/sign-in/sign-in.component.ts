import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signIn:FormGroup = this.si.group({
    email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.(net|com|fr)$")]],
    password:['',[Validators.required, Validators.pattern("([a-zA-Z0-9]*)([0-9]+)([a-zA-Z0-9]*)"), Validators.minLength(6)]]
  });

  constructor(private si:FormBuilder, private data: DataService) { }

  ngOnInit() {
  }

  send = () => {
    //Avec la deuxieme methode
    this.data.postApi('signIn',{email:this.signIn.value.email,password:this.signIn.value.password}).subscribe((res: any) => {
      if(res.allowd) {
        localStorage.setItem("tokken",res.tokken);
      } else {
        alert('erreur de connexion');
      }
    })
  }

}
