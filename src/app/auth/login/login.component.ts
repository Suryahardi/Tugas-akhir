import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={};
  constructor(
    public api:ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
    
  }

  login()
  {
    this.api.login(this.user.email, this.user.password).subscribe(res=>{
      localStorage.setItem('appToken',JSON.stringify(res)); 
      this.router.navigate(['admin/dashboard']);
    },_error=>{
      alert('Tidak dapat login');
    });
      
  }

}