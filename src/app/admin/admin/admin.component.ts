import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loading:boolean=true;
  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {

  }

  logout()
  {
    let conf=confirm('Keluar aplikasi?');
    if (conf){
      localStorage.removeItem('appToken');
      this.router.navigate(['/login']);
      
    }
  }

}