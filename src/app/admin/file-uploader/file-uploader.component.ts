import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  constructor(
    public api:ApiService,
    public dialogRef :MatDialogRef<FileUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData :any,
  ) { }

  ngOnInit(): void {
    console.log(this.dialogData);
  }
  selectedFile:any;
  onFileChange(event: any){
if(event.target.files.length>0){
  this.selectedFile=event.target.files[0];
  console.log(this.selectedFile);
}
  }
  loadingUpload !: boolean;
  uploadFile() {
    let input =new FormData();
    input.append('file',this.selectedFile);
    this.loadingUpload=true;
    this.api.upload(input).subscribe((data: any)=>{
      this.updateProduct(data);
     console.log(data);
    },(error: any)=>{
      this.loadingUpload=false;
      alert('Gagal mengunggah file')
  
    });
  }
  updateProduct(data: any) 
    {
      if(data.status == true)
      {
        //lakukan update data produk disini
   
        //
        alert('File berhasil diunggah');
        //kode tambahan
        this.dialogRef.close();
      }else{
        alert(data.message);
      }
    }

    updateBook(data: any)
    {
      this.api.put('book/'+this.dialogData.id, {url: data.url}).subscribe(res=>{
        console.log(res);
      });
    }
  }
