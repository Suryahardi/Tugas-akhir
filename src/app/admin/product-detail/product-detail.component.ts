import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
 selector: 'app-product-detail',
 templateUrl: './product-detail.component.html',
 styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 constructor(
   public dialogRef:MatDialogRef<ProductDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any
 )
 {
 
 }
 ngOnInit(): void {
 }

 saveData()
 {
   this.dialogRef.close(this.data);
 }

}
