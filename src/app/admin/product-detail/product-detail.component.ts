import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  userData: any = {};
  constructor(
  public dialogRef:MatDialogRef<ProductDetailComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  public db: AngularFirestore,
  public auth: AngularFireAuth
 ) { }

 ngOnInit(): void {
  this.auth.user.subscribe(res=>{
    this.userData = res;
  });
}

loading:boolean | undefined
saveData()
  {
    this.loading=true;
    if(this.data.id == undefined)
    {
      //simpan ke firebase
      let doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;
      this.db.collection('books').doc(doc).set(this.data).then(result=>{
        this.dialogRef.close(this.data);
        this.loading=false;
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert('Tidak Dapat Menyimpan Data');
      })
    
    }else{
      this.db.collection('books/').doc(this.data.id).update(this.data).then(result=>{
        this.dialogRef.close(this.data);
        this.loading=false;
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert('Tidak Dapat Mengupdate Data');
      })
    }
  }
}