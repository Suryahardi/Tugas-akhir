import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  api: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin()
  {
    this.api.get('bookswithauth/status').subscribe((result: any)=>{
      return;
    }, (err: any)=>{
      this.router.navigate(['/login']);
    })
  }

  logout()
  {
    let conf=confirm('Keluar aplikasi?');
    if (conf){
      localStorage.removeItem('appToken');
      window.location.reload();
    }
  }


}