import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup = this.l.group({
    email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.(net|com|fr)$")]],
    password:['',[Validators.required, Validators.pattern("([a-zA-Z0-9]*)([0-9]+)([a-zA-Z0-9]*)"), Validators.minLength(6)]],
    age:['',[Validators.required, Validators.pattern("([0-9]{1,2})"), Validators.minLength(6)]]
  });

  constructor(private l:FormBuilder, private data: DataService) { }

  ngOnInit() {
  }

  send = () => {
    //Avec la deuxieme methode
    this.data.postApi('login',{email:this.login.value.email,password:this.login.value.password}).subscribe((res: any) => {
      if(res.allowd) {
        alert('erreur de connexion');
      }
    })
  }

}
